'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      // Default = dark
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:scale-105 transition"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
