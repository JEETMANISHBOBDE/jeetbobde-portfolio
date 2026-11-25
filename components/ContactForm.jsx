'use client'

import { useState } from 'react'
import { CheckCircle2, CircleAlert, Send } from 'lucide-react'

const emailFallback = 'I couldn’t send your message. Please try again or use the email link.'

export default function ContactForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (loading) return

    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await response.json()

      if (response.ok && data.ok) {
        form.reset()
        setStatus({ ok: true, message: 'Message sent. Thank you for reaching out.' })
      } else {
        setStatus({ ok: false, message: data.error || emailFallback })
      }
    } catch {
      setStatus({ ok: false, message: emailFallback })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" method="post" action="/api/contact" onSubmit={handleSubmit} data-reveal>
      <div className="form-fields">
        <label>
          Name
          <input name="name" placeholder="Your name" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" placeholder="Tell me what you’d like to discuss" rows={4} maxLength={4000} required />
      </label>
      <div className="form-actions">
        <button type="submit" className="button button-primary" disabled={loading}>
          <Send size={16} aria-hidden="true" /> {loading ? 'Sending…' : 'Send message'}
        </button>
        <p className={'form-status' + (status ? (status.ok ? ' form-success' : ' form-error') : '')} role="status">
          {status && (
            <>
              {status.ok ? <CheckCircle2 size={17} aria-hidden="true" /> : <CircleAlert size={17} aria-hidden="true" />}
              {status.message}
            </>
          )}
        </p>
      </div>
    </form>
  )
}
