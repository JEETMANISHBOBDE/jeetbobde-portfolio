// app/api/contact/route.js
import { NextResponse } from 'next/server'

async function sendWithResend(payload, apiKey) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    }),
  })
  const text = await res.text()
  return { ok: res.ok, status: res.status, text }
}

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, message } = data || {}

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.TO_EMAIL || 'jmbobde99@gmail.com'
    // Use FROM_EMAIL from env if set, otherwise fallback to onboarding by default for safety
    const CONFIGURED_FROM = process.env.FROM_EMAIL || null
    const DEFAULT_ONBOARDING_FROM = 'onboarding@resend.dev'

    const basePayload = {
      to: TO_EMAIL,
      subject: `New contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    }

    // Log what env the server sees (safe for local debugging — don't commit sensitive logs in production)
    console.log('Contact API env:', {
      hasResendKey: !!RESEND_API_KEY,
      TO_EMAIL,
      CONFIGURED_FROM,
    })

    if (!RESEND_API_KEY) {
      // No API key configured — log and return success for development
      const payload = { from: CONFIGURED_FROM || DEFAULT_ONBOARDING_FROM, ...basePayload }
      console.log('No RESEND_API_KEY — logging payload:', payload)
      return NextResponse.json({ ok: false, debug: 'no-resend-key', payload })
    }

    // Try sending with configured FROM (if provided) or with onboarding first
    const firstFrom = CONFIGURED_FROM || DEFAULT_ONBOARDING_FROM
    let payload = { from: firstFrom, ...basePayload }

    let result = await sendWithResend(payload, RESEND_API_KEY)
    console.log('Resend first attempt:', result)

    // If we get a domain verification validation_error, and we didn't already send from onboarding, retry once with onboarding sender
    if (!result.ok && result.status === 403 && result.text && result.text.includes('domain is not verified')) {
      if (payload.from !== DEFAULT_ONBOARDING_FROM) {
        const retryPayload = { ...payload, from: DEFAULT_ONBOARDING_FROM }
        console.log('Resend domain validation error — retrying with onboarding sender:', DEFAULT_ONBOARDING_FROM)
        result = await sendWithResend(retryPayload, RESEND_API_KEY)
        console.log('Resend retry attempt:', result)
        if (!result.ok) {
          // Return provider error text for debugging
          return NextResponse.json({ ok: false, status: result.status, body: result.text }, { status: 502 })
        }
        return NextResponse.json({ ok: true, status: result.status, body: result.text })
      }
    }

    if (!result.ok) {
      // Send failed for another reason — return provider response for debugging
      return NextResponse.json({ ok: false, status: result.status, body: result.text }, { status: 502 })
    }

    // Success
    return NextResponse.json({ ok: true, status: result.status, body: result.text })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
