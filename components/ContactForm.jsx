// components/ContactForm.jsx
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.ok) {
        setStatus({ ok: true, message: 'Message sent — thanks!' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ ok: false, message: data.error || 'Failed to send message' })
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="p-3 border rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" required className="p-3 border rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={6} className="p-3 border rounded md:col-span-2" required />
      <button type="submit" disabled={loading} className="md:col-span-2 inline-block py-3 px-6 rounded bg-slate-900 text-white hover:opacity-90">
        {loading ? 'Sending...' : 'Send message'}
      </button>

      {status && (
        <div className={`md:col-span-2 mt-2 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
          {status.message}
        </div>
      )}
    </form>
  )
}
