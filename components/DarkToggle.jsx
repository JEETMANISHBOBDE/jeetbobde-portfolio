'use client'
import { useEffect, useState } from 'react'

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      aria-pressed={isDark}
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded border text-sm"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}