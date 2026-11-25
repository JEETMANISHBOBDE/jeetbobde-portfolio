import { Download, Terminal } from 'lucide-react'
import DarkToggle from './DarkToggle'

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container header-inner">
        <a href="#top" className="wordmark">
          <span className="brand-mark"><Terminal size={17} aria-hidden="true" /></span>
          Jeet Bobde
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <DarkToggle />
          <a href="/resume.pdf" download="Jeet-Bobde-Resume.pdf" className="button button-outline header-resume">
            <Download size={15} aria-hidden="true" /> Resume
          </a>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  )
}
