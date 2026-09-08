/// <reference types="node" />
import process from 'node:process'

type ApiRequest = { method?: string; body?: unknown }
type ApiResponse = {
  status: (code: number) => ApiResponse
  json: (body: unknown) => void
  setHeader: (name: string, value: string) => void
}

function clean(value: unknown, max = 200) {
  return typeof value === 'string' ? Array.from(value).map(c => c.charCodeAt(0) < 32 || c.charCodeAt(0) === 127 ? ' ' : c).join('').trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({ error: 'Method not allowed' })
    return
  }
  let input
  try {
    if (JSON.stringify(request.body).length > 20_000) throw new Error('Body too large')
    input = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid body')
  } catch {
    response.status(400).json({ error: 'Please provide valid contact details.' })
    return
  }
  const name = clean(input.name, 120)
  const email = clean(input.email, 254)
  const phone = clean(input.whatsapp, 40)
  const message = clean(input.message, 2000)
  // Older cached forms sent this display placeholder as an actual company.
  const companyValue = clean(input.company, 160)
  const company = companyValue.toLowerCase() === 'not provided' ? '' : companyValue
  const preference = input.preferredChannel
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    || !/^\+?[\d\s().-]{10,40}$/.test(phone) || !/^\d{10,15}$/.test(phone.replace(/\D/g, ''))
    || !message || input.consent !== true || !['email', 'whatsapp'].includes(preference)) {
    response.status(400).json({ error: 'Please provide valid contact details, a preferred communication mode, and consent.' })
    return
  }

  const apiKey = process.env.FRAPPE_API_KEY
  const apiSecret = process.env.FRAPPE_API_SECRET
  let endpoint
  try {
    const base = new URL(process.env.FRAPPE_BASE_URL || '')
    if (base.protocol !== 'https:' || base.username || base.password || base.pathname !== '/' || base.search || base.hash) throw new Error('Invalid CRM URL')
    endpoint = new URL('/api/resource/Lead', base).href
    if (!apiKey || !apiSecret) throw new Error('Missing credentials')
  } catch {
    response.status(503).json({ error: 'Enquiry submission is temporarily unavailable. Please contact us by email.' })
    return
  }
  const source = input.source && typeof input.source === 'object' ? input.source : {}
  const lines = [
    ['Submitted name', name],
    ['Submitted email', email],
    ['Submitted phone', phone],
    ['Submitted company', company],
    ['Requirement', message],
    ['Preferred communication', preference === 'whatsapp' ? 'WhatsApp' : 'Email'],
    ['Contact consent', 'Yes - permission to respond to this enquiry'],
    ['Source page', clean(source.path, 500) || 'Direct visit'],
    ['Source type', clean(source.type, 100) || 'Direct'],
    ['Source title', clean(source.title)],
    ['Source slug', clean(source.slug, 160)],
    ['Contact CTA', clean(source.cta, 160)],
  ]
  // One insert saves both the lead and its note; no partial second write.
  const lead = {
    first_name: name,
    email_id: email,
    mobile_no: phone,
    ...(preference === 'whatsapp' ? { whatsapp_no: phone } : {}),
    company_name: company,
    status: 'Lead',
    custom_website_communication: preference === 'email' ? 'Email' : 'WhatsApp',
    notes: [{ note: '<p><strong>Website enquiry - Nexora</strong></p>' + lines.map(([label, value]) => '<p><strong>' + label + ':</strong> ' + escapeHtml(value || 'Not provided') + '</p>').join('') }],
  }
  try {
    const headers = { Authorization: 'token ' + apiKey + ':' + apiSecret, 'Content-Type': 'application/json', Accept: 'application/json' }
    const signal = AbortSignal.timeout(25_000)
    const result = await fetch(endpoint, {
      method: 'POST',
      redirect: 'error',
      signal,
      headers,
      body: JSON.stringify(lead),
    })
    const body = await result.json().catch(() => ({}))
    // A definite conflict is not a failed/ambiguous network request. Resolve only
    // an exact email match, then append without overwriting staff-managed fields.
    if (result.status === 409) {
      const lookupUrl = new URL(endpoint)
      lookupUrl.searchParams.set('filters', JSON.stringify([['email_id', '=', email]]))
      lookupUrl.searchParams.set('fields', JSON.stringify(['name', 'email_id']))
      lookupUrl.searchParams.set('limit_page_length', '2')
      const lookup = await fetch(lookupUrl.href, { method: 'GET', headers, redirect: 'error', signal })
      const matches = await lookup.json().catch(() => ({}))
      if (!lookup.ok || !Array.isArray(matches.data) || matches.data.length !== 1
        || typeof matches.data[0]?.name !== 'string' || !matches.data[0].name
        || typeof matches.data[0].email_id !== 'string'
        || matches.data[0].email_id.toLowerCase() !== email.toLowerCase()) {
        throw new Error('Could not resolve an unambiguous existing lead')
      }
      const leadId = matches.data[0].name
      const appended = await fetch(new URL('/api/resource/Comment', endpoint).href, {
        method: 'POST', headers, redirect: 'error', signal,
        body: JSON.stringify({
          comment_type: 'Comment', reference_doctype: 'Lead', reference_name: leadId,
          comment_email: email, comment_by: name,
          subject: 'Nexora Website Enquiry - ' + (preference === 'email' ? 'Email' : 'WhatsApp'),
          content: lead.notes[0].note,
        }),
      })
      const saved = await appended.json().catch(() => ({}))
      if (!appended.ok || typeof saved.data?.name !== 'string' || !saved.data.name) {
        throw new Error('Repeat enquiry append was not confirmed')
      }
      response.status(200).json({ ok: true, leadId })
      return
    }
    if (!result.ok || typeof body.data?.name !== 'string' || !body.data.name) {
      console.error('CRM lead creation failed', { status: result.status })
      response.status(502).json({ error: 'We could not confirm your enquiry. Please contact us by email if this continues.' })
      return
    }
    response.status(200).json({ ok: true, leadId: body.data.name })
  } catch {
    // No credentials, customer data, upstream errors, or automatic retries of ambiguous inserts.
    console.error('CRM lead creation could not be confirmed')
    response.status(502).json({ error: 'We could not confirm your enquiry. Please contact us by email before resubmitting.' })
  }
}
