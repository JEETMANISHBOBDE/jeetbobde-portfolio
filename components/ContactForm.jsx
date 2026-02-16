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
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.ok) {
        setStatus({ ok: true, message: 'Message sent — thanks!' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({
          ok: false,
          message: data.error || 'Failed to send message',
        })
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
    >
      {/* Name */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="p-3 rounded-lg border
        bg-white dark:bg-slate-800
        text-slate-900 dark:text-white
        border-slate-300 dark:border-slate-600
        placeholder-slate-400
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-colors duration-300"
      />

      {/* Email */}
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        required
        className="p-3 rounded-lg border
        bg-white dark:bg-slate-800
        text-slate-900 dark:text-white
        border-slate-300 dark:border-slate-600
        placeholder-slate-400
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-colors duration-300"
      />

      {/* Message */}
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={6}
        required
        className="p-3 rounded-lg border md:col-span-2
        bg-white dark:bg-slate-800
        text-slate-900 dark:text-white
        border-slate-300 dark:border-slate-600
        placeholder-slate-400
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-colors duration-300"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 py-3 px-6 rounded-lg
        bg-slate-900 dark:bg-blue-600
        text-white
        hover:opacity-90
        transition"
      >
        {loading ? 'Sending...' : 'Send message'}
      </button>

      {/* Status */}
      {status && (
        <div
          className={`md:col-span-2 mt-2 text-sm ${
            status.ok
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  )
}
