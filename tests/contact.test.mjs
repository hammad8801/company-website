import assert from 'node:assert/strict'
import { test } from 'node:test'
import handler from '../api/contact.ts'

const payload = {
  name: 'Integration Test', email: 'test@example.com', company: 'Example Company',
  whatsapp: '2025550100', message: 'Test enquiry', consent: true,
  source: { path: 'https://www.nexorasolution.io/products/export-price-calculation',
    type: 'Product', title: 'Export Price Calculation', slug: 'export-price-calculation', cta: 'Contact us' },
}

test('contact delivery contract', async (t) => {
  const previousFetch = globalThis.fetch
  const originalEnv = { ...process.env }
  Object.assign(process.env, {
    WHATSAPP_ACCESS_TOKEN: 'test-only-not-a-real-token', WHATSAPP_PHONE_NUMBER_ID: 'test-sender',
    META_GRAPH_API_VERSION: 'v25.0', WHATSAPP_LEAD_RECIPIENT: '918799010330',
    WHATSAPP_LEAD_TEMPLATE_NAME: 'new_website_lead', WHATSAPP_TEMPLATE_LANGUAGE: 'en_US',
    WHATSAPP_DELIVERY_MODE: 'template',
  })
  t.after(() => { globalThis.fetch = previousFetch; process.env = originalEnv })
  let calls = []
  let metaStatus = 200
  let metaBody = { messages: [{ id: 'test-message-id' }] }
  globalThis.fetch = async (url, options) => {
    calls.push({ url, ...options, body: JSON.parse(options.body) })
    return new Response(JSON.stringify(metaBody), { status: metaStatus })
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
  await t.test('one team message with all eight fields; never messages the customer', async () => {
    const result = await invoke()
    assert.equal(result.status, 200)
    assert.equal(result.body.leadMessageId, 'test-message-id')
    assert.equal(calls.length, 1)
    assert.equal(calls[0].body.to, '918799010330')
    assert.deepEqual(calls[0].body.template.components[0].parameters.map(p => p.text), [
      payload.name, payload.email, payload.company, '912025550100', payload.message,
      'Product - Export Price Calculation - export-price-calculation', payload.source.path, 'Contact us',
    ])
  })
  await t.test('invalid input and missing consent do not call Meta', async () => {
    for (const body of [{ ...payload, consent: false }, { ...payload, email: 'invalid' }, '{', null]) {
      assert.equal((await invoke(body)).status, 400)
      assert.equal(calls.length, 0)
    }
  })
  await t.test('explicit temporary text mode includes the same source and contact details', async () => {
    process.env.WHATSAPP_DELIVERY_MODE = 'text'
    assert.equal((await invoke()).status, 200)
    assert.equal(calls.length, 1)
    assert.equal(calls[0].body.to, '918799010330')
    assert.equal(calls[0].body.type, 'text')
    assert.equal(calls[0].body.template, undefined)
    assert.ok(calls[0].body.text.body.includes(payload.source.path))
    assert.ok(calls[0].body.text.body.includes(payload.email))
    assert.ok(calls[0].body.text.body.includes(payload.message))
    process.env.WHATSAPP_DELIVERY_MODE = 'invalid'
    assert.equal((await invoke()).status, 503)
    assert.equal(calls.length, 0)
    process.env.WHATSAPP_DELIVERY_MODE = 'template'
  })
  await t.test('GET is rejected and missing configuration fails closed', async () => {
    assert.equal((await invoke(payload, 'GET')).status, 405)
    delete process.env.WHATSAPP_ACCESS_TOKEN
    assert.equal((await invoke()).status, 503)
    assert.equal(calls.length, 0)
    process.env.WHATSAPP_ACCESS_TOKEN = 'test-only-not-a-real-token'
  })
  await t.test('Meta failures and missing message IDs cannot display success', async () => {
    metaStatus = 400
    metaBody = { error: { code: 132001 } }
    assert.equal((await invoke()).status, 502)
    metaStatus = 200
    metaBody = {}
    assert.equal((await invoke()).status, 502)
  })
})
