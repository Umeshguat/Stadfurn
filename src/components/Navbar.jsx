import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" onClick={close}>
          <img src="/logo.png" alt="STADFURN" className="nav-logo" />
        </a>
        <button
          className={`nav-toggle ${open ? 'nav-toggle--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          <a href="#about" onClick={close}>About</a>
          <a href="#services" onClick={close}>Services</a>
          <a href="#industries" onClick={close}>Industries</a>
          <a href="#why-us" onClick={close}>Why Us</a>
          <a href="#contact" className="nav-cta" onClick={close}>Get in Touch</a>
        </div>
      </div>
    </nav>
  )
}
