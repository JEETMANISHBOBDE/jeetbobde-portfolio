'use client'

import { useEffect } from 'react'

export default function MotionEffects() {
  useEffect(() => {
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return
        target.classList.add('has-entered')
        observer.unobserve(target)
      })
    }, { threshold: 0.14 }) : null

    document.querySelectorAll('[data-reveal]').forEach((element) => observer?.observe(element))

    const panel = document.querySelector('[data-parallax]')
    const canTilt = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    let frame = 0

    function updatePosition(event) {
      if (!canTilt.matches || event.pointerType !== 'mouse') return

      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const bounds = panel.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5
        panel.style.setProperty('--pan-x', (x * 17) + 'px')
        panel.style.setProperty('--pan-y', (y * 17) + 'px')
      })
    }

    function resetPosition() {
      window.cancelAnimationFrame(frame)
      panel.style.removeProperty('--pan-x')
      panel.style.removeProperty('--pan-y')
    }

    panel?.addEventListener('pointermove', updatePosition)
    panel?.addEventListener('pointerleave', resetPosition)

    return () => {
      observer?.disconnect()
      window.cancelAnimationFrame(frame)
      panel?.removeEventListener('pointermove', updatePosition)
      panel?.removeEventListener('pointerleave', resetPosition)
    }
  }, [])

  return null
}
