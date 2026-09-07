/// <reference types="node" />
import process from 'node:process'

type ApiRequest = {
  method?: string
  body?: unknown
}

type ApiResponse = {
  status: (code: number) => ApiResponse
  json: (body: unknown) => void
  setHeader: (name: string, value: string) => void
}

type ContactPayload = {
  name: string
  email: string
  company: string
  whatsapp: string
  message: string
  consent: boolean
  source: {
    path: string
    type: string
    title: string
    slug: string
    cta: string
  }
}

type TemplateParameter = {
  type: 'text'
  text: string
}

const MAX_BODY_LENGTH = 20_000

function clean(value: unknown, maxLength = 1_000) {
  return Array.from(String(value ?? ''))
    .map((character) => {
      const code = character.charCodeAt(0)
      return code <= 31 || code === 127 ? ' ' : character
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function normalizePhone(value: unknown) {
  const digits = String(value ?? '').replace(/\D/g, '')
  const defaultCountryCode = clean(process.env.WHATSAPP_DEFAULT_COUNTRY_CODE || '91', 4)
  const international = digits.length === 10 ? `${defaultCountryCode}${digits}` : digits
  return /^\d{10,15}$/.test(international) ? international : ''
}

function parsePayload(body: unknown): ContactPayload | null {
  let candidate = body
  if (typeof body === 'string') {
    if (body.length > MAX_BODY_LENGTH) return null
    try {
      candidate = JSON.parse(body)
    } catch {
      return null
    }
  }

  if (!candidate || typeof candidate !== 'object') return null
  const input = candidate as Record<string, unknown>
  const rawSource = input.source && typeof input.source === 'object'
    ? input.source as Record<string, unknown>
    : {}
  const payload: ContactPayload = {
    name: clean(input.name, 120),
    email: clean(input.email, 254),
    company: clean(input.company, 160) || 'Not provided',
    whatsapp: normalizePhone(input.whatsapp),
    message: clean(input.message, 2_000),
    consent: input.consent === true,
    source: {
      path: clean(rawSource.path, 500) || 'Direct visit',
      type: clean(rawSource.type, 100) || 'Direct',
      title: clean(rawSource.title, 200),
      slug: clean(rawSource.slug, 160),
      cta: clean(rawSource.cta, 160),
    },
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  if (!payload.name || !emailIsValid || !payload.whatsapp || !payload.message || !payload.consent) {
    return null
  }
  return payload
}

function textParameters(values: string[]): TemplateParameter[] {
  return values.map((value) => ({ type: 'text', text: value || 'Not provided' }))
}

async function sendLeadMessage(args: {
  deliveryMode: 'template' | 'text'
  to: string
  templateName: string
  parameters: string[]
  accessToken: string
  phoneNumberId: string
  graphApiVersion: string
  language: string
}) {
  const response = await fetch(
    `https://graph.facebook.com/${args.graphApiVersion}/${args.phoneNumberId}/messages`,
    {
      method: 'POST',
      signal: AbortSignal.timeout(15_000),
      headers: {
        Authorization: `Bearer ${args.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: args.to,
        ...(args.deliveryMode === 'text' ? {
          type: 'text',
          text: {
            preview_url: false,
            body: ['New website enquiry — Nexora Solution', ...[
              'Customer name', 'Customer email', 'Company', 'Contact number',
              'Requirement', 'Source details', 'Source page URL', 'Contact button',
            ].map((label, index) => `${label}: ${args.parameters[index] || 'Not provided'}`)].join('\n'),
          },
        } : {
          type: 'template',
          template: {
            name: args.templateName,
            language: { code: args.language },
            components: [
              {
                type: 'body',
                parameters: textParameters(args.parameters),
              },
            ],
          },
        }),
      }),
    },
  )

  const responseBody = await response.json().catch(() => ({}))
  if (!response.ok) {
    console.error('WhatsApp Cloud API request failed', {
      status: response.status,
      code: responseBody.error?.code,
      subcode: responseBody.error?.error_subcode,
      traceId: responseBody.error?.fbtrace_id,
    })
    throw new Error(`WhatsApp API returned ${response.status}`)
  }

  if (!responseBody.messages?.[0]?.id) throw new Error('WhatsApp API did not accept a message')
  return responseBody as { messages: Array<{ id: string }> }
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  response.setHeader('Cache-Control', 'no-store')

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({ error: 'Method not allowed' })
    return
  }

  const payload = parsePayload(request.body)
  if (!payload) {
    response.status(400).json({ error: 'Please provide valid contact and consent details.' })
    return
  }

  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const graphApiVersion = process.env.META_GRAPH_API_VERSION
  const leadRecipient = normalizePhone(process.env.WHATSAPP_LEAD_RECIPIENT)
  const leadTemplate = process.env.WHATSAPP_LEAD_TEMPLATE_NAME
  const language = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US'
  // Explicit temporary test mode only: recipient must have messaged the sender
  // within the last 24 hours. There is no automatic template-to-text fallback.
  const deliveryMode = process.env.WHATSAPP_DELIVERY_MODE || 'template'
  const testWindowExpiresAt = Date.parse(process.env.WHATSAPP_TEST_WINDOW_EXPIRES_AT || '')
  const testWindowIsOpen = Number.isFinite(testWindowExpiresAt)
    && testWindowExpiresAt > Date.now()
    && testWindowExpiresAt <= Date.now() + 24 * 60 * 60 * 1_000

  if (deliveryMode === 'text' && !testWindowIsOpen) {
    response.status(503).json({ error: 'WhatsApp is temporarily unavailable. Please use Send via Email.' })
    return
  }

  if (
    !accessToken ||
    !phoneNumberId ||
    !graphApiVersion ||
    !leadRecipient ||
    (deliveryMode !== 'template' && deliveryMode !== 'text') ||
    (deliveryMode === 'template' && !leadTemplate)
  ) {
    response.status(503).json({ error: 'WhatsApp service is not configured yet.' })
    return
  }

  const sourceDetails = [
    payload.source.type,
    payload.source.title,
    payload.source.slug,
  ].filter(Boolean).join(' - ')

  try {
    const leadResult = await sendLeadMessage({
      deliveryMode,
      to: leadRecipient,
      templateName: leadTemplate || '',
      parameters: [
        payload.name,
        payload.email,
        payload.company,
        payload.whatsapp,
        payload.message,
        sourceDetails,
        payload.source.path,
        payload.source.cta,
      ],
      accessToken,
      phoneNumberId,
      graphApiVersion,
      language,
    })

    response.status(200).json({
      ok: true,
      leadMessageId: leadResult.messages?.[0]?.id,
    })
  } catch (error) {
    console.error('Contact submission failed', error)
    response.status(502).json({
      error: 'We could not submit your enquiry. Please try email instead.',
    })
  }
}
