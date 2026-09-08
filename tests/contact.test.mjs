import assert from 'node:assert/strict'
import { test } from 'node:test'
import handler from '../api/contact.ts'

const payload = {
  name: 'Integration Test', email: 'test@example.com', company: 'Example Company',
  whatsapp: '+12025550100', message: 'Test enquiry', consent: true, preferredChannel: 'whatsapp',
  source: { path: 'https://www.nexorasolution.io/products/export-price-calculation',
    type: 'Product', title: 'Export Price Calculation', slug: 'export-price-calculation', cta: 'Contact us' },
}

test('CRM contact delivery contract', async (t) => {
  const previousFetch = globalThis.fetch
  const originalEnv = { ...process.env }
  Object.assign(process.env, {
    FRAPPE_BASE_URL: 'https://crm.example.com', FRAPPE_API_KEY: 'test-key', FRAPPE_API_SECRET: 'test-secret',
  })
  t.after(() => { globalThis.fetch = previousFetch; process.env = originalEnv })
  let calls = []
  let upstreamStatus = 200
  let upstreamBody = { data: { name: 'TEST-LEAD-1' } }
  globalThis.fetch = async (url, options) => {
    calls.push({ url, ...options, body: JSON.parse(options.body) })
    return new Response(JSON.stringify(upstreamBody), { status: upstreamStatus })
  }
  const invoke = async (body = payload, method = 'POST') => {
    calls = []
    const result = { headers: {} }
    const response = {
      status(code) { result.status = code; return response },
      json(body) { result.body = body },
      setHeader(key, value) { result.headers[key] = value },
    }
    await handler({ method, body }, response)
    return result
  }
  await t.test('both preferences create one lead with contact details and all attribution', async () => {
    for (const preferredChannel of ['whatsapp', 'email']) {
      const result = await invoke({ ...payload, preferredChannel })
      assert.equal(result.status, 200)
      assert.equal(result.body.leadId, 'TEST-LEAD-1')
      assert.equal(calls.length, 1)
      const call = calls[0]
      assert.equal(call.url, 'https://crm.example.com/api/resource/Lead')
      assert.equal(call.headers.Authorization, 'token test-key:test-secret')
      assert.equal(call.redirect, 'error')
      assert.equal(call.body.first_name, payload.name)
      assert.equal(call.body.email_id, payload.email)
      assert.equal(call.body.mobile_no, payload.whatsapp)
      assert.equal(call.body.company_name, payload.company)
      assert.equal(call.body.status, 'Lead')
      assert.equal(call.body.custom_website_communication, preferredChannel === 'email' ? 'Email' : 'WhatsApp')
      for (const text of [payload.message, ...Object.values(payload.source), preferredChannel === 'email' ? 'Email' : 'WhatsApp', 'Contact consent']) {
        assert.ok(call.body.notes[0].note.includes(text))
      }
      assert.equal(JSON.stringify(result.body).includes('test-secret'), false)
    }
  })
  await t.test('blank and legacy placeholder company allow ERPNext to use the customer name as title', async () => {
    for (const company of ['', undefined, 'Not provided', '  not PROVIDED  ']) {
      assert.equal((await invoke({ ...payload, company })).status, 200)
      assert.equal(calls[0].body.company_name, '')
      assert.equal(calls[0].body.first_name, payload.name)
    }
  })
  await t.test('invalid input, preference, missing consent and oversized bodies fail before CRM', async () => {
    for (const body of [{ ...payload, consent: false }, { ...payload, email: 'invalid' },
      { ...payload, preferredChannel: 'sms' }, { ...payload, preferredChannel: undefined },
      { ...payload, whatsapp: 'call 1234567890' }, { ...payload, message: 'x'.repeat(21000) }, '{', null, []]) {
      assert.equal((await invoke(body)).status, 400)
      assert.equal(calls.length, 0)
    }
  })
  await t.test('untrusted input is escaped in the rich-text CRM note', async () => {
    await invoke({ ...payload, message: '<script>alert(1)</script>', source: { title: '<img src=x onerror=alert(1)>' } })
    const note = calls[0].body.notes[0].note
    assert.ok(note.includes('&lt;script&gt;'))
    assert.equal(note.includes('<script>'), false)
    assert.equal(note.includes('<img'), false)
    assert.ok(note.includes('Direct visit'))
  })
  await t.test('GET and invalid server configuration fail closed', async () => {
    assert.equal((await invoke(payload, 'GET')).status, 405)
    delete process.env.FRAPPE_API_SECRET
    assert.equal((await invoke()).status, 503)
    assert.equal(calls.length, 0)
    process.env.FRAPPE_API_SECRET = 'test-secret'
    process.env.FRAPPE_BASE_URL = 'http://crm.example.com'
    assert.equal((await invoke()).status, 503)
    process.env.FRAPPE_BASE_URL = 'https://crm.example.com'
  })
  await t.test('CRM errors and missing lead ID never report success or retry', async () => {
    upstreamStatus = 403
    upstreamBody = { exception: 'private upstream details' }
    assert.equal((await invoke()).status, 502)
    assert.equal(calls.length, 1)
    upstreamStatus = 200
    upstreamBody = {}
    assert.equal((await invoke()).status, 502)
    assert.equal(calls.length, 1)
  })
  await t.test('network timeout has an honest error and no automatic retry', async () => {
    let attempts = 0
    globalThis.fetch = async () => { attempts++; throw new Error('private network error') }
    assert.equal((await invoke()).status, 502)
    assert.equal(attempts, 1)
  })
  await t.test('409 appends both preferences to one exact lead without replacing its history', async () => {
    for (const preferredChannel of ['email', 'whatsapp']) {
      globalThis.fetch = async (url, options) => {
        calls.push({ url, ...options, body: options.body ? JSON.parse(options.body) : undefined })
        if (calls.length === 1) return Response.json({}, { status: 409 })
        if (calls.length === 2) return Response.json({ data: [{ name: 'EXISTING', email_id: payload.email }] })
        return Response.json({ data: { name: 'COMMENT' } })
      }
      const result = await invoke({ ...payload, preferredChannel })
      assert.equal(result.status, 200)
      assert.equal(result.body.leadId, 'EXISTING')
      assert.equal(calls.length, 3)
      const lookup = new URL(calls[1].url)
      assert.deepEqual(JSON.parse(lookup.searchParams.get('filters')), [['email_id', '=', payload.email]])
      assert.equal(lookup.searchParams.get('limit_page_length'), '2')
      const append = calls[2]
      assert.equal(append.url, 'https://crm.example.com/api/resource/Comment')
      assert.equal(append.body.reference_name, 'EXISTING')
      assert.equal(append.body.comment_email, payload.email)
      assert.equal(append.body.subject, 'Nexora Website Enquiry - ' + (preferredChannel === 'email' ? 'Email' : 'WhatsApp'))
      for (const text of [payload.name, payload.email, payload.whatsapp, payload.message, ...Object.values(payload.source)]) {
        assert.ok(append.body.content.includes(text))
      }
      assert.equal(calls.some(call => call.method === 'PUT' || call.method === 'PATCH'), false)
    }
  })
  await t.test('unresolved conflicts and failed appends never report success', async () => {
    for (const matches of [[], [{ name: 'X', email_id: 'other@example.com' }],
      [{ name: 'X', email_id: payload.email }, { name: 'Y', email_id: payload.email }]]) {
      globalThis.fetch = async () => {
        calls.push({})
        return calls.length === 1 ? Response.json({}, { status: 409 }) : Response.json({ data: matches })
      }
      assert.equal((await invoke()).status, 502)
      assert.equal(calls.length, 2)
    }
    for (const failure of ['error', 'missing-id', 'timeout']) {
      globalThis.fetch = async () => {
        calls.push({})
        if (calls.length === 1) return Response.json({}, { status: 409 })
        if (calls.length === 2) return Response.json({ data: [{ name: 'X', email_id: payload.email }] })
        if (failure === 'timeout') throw new Error('timeout')
        return Response.json({}, { status: failure === 'error' ? 403 : 200 })
      }
      assert.equal((await invoke()).status, 502)
      assert.equal(calls.length, 3)
    }
  })
})
