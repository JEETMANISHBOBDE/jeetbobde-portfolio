import { NextResponse } from 'next/server'

const resendEndpoint = 'https://api.resend.com/emails'
const defaultSender = 'onboarding@resend.dev'
const deliveryError = 'I couldn’t send your message. Please try again or use the email link.'

function errorResponse(error, status) {
  return NextResponse.json({ ok: false, error }, { status })
}

function cleanField(value) {
  return typeof value === 'string' ? value.trim() : ''
}

async function sendWithResend(payload, apiKey) {
  return fetch(resendEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + apiKey,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
    cache: 'no-store',
  })
}

export async function POST(request) {
  const data = await request.json().catch(() => null)
  const name = cleanField(data?.name).replace(/[\r\n]+/g, ' ')
  const email = cleanField(data?.email)
  const message = cleanField(data?.message)

  if (!name || !email || !message) {
    return errorResponse('Please fill in your name, email, and message.', 400)
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse('Please enter a valid email address.', 400)
  }
  if (name.length > 100 || message.length > 4000) {
    return errorResponse('Please keep your name under 100 characters and your message under 4,000.', 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return errorResponse('The contact form is temporarily unavailable. Please use the email link.', 503)

  const payload = {
    from: process.env.FROM_EMAIL || defaultSender,
    to: process.env.TO_EMAIL || 'jmbobde99@gmail.com',
    reply_to: email,
    subject: 'Portfolio inquiry from ' + name,
    text: 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message,
  }

  try {
    let response = await sendWithResend(payload, apiKey)
    if (response.status === 403 && payload.from !== defaultSender) {
      const details = await response.text()
      if (details.includes('domain is not verified')) {
        response = await sendWithResend({ ...payload, from: defaultSender }, apiKey)
      }
    }
    if (!response.ok) return errorResponse(deliveryError, 502)
    return NextResponse.json({ ok: true })
  } catch {
    return errorResponse(deliveryError, 502)
  }
}
