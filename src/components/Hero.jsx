import { useEffect, useState, useRef, lazy, Suspense } from 'react'
import useReveal from '../hooks/useReveal'
import useCounter from '../hooks/useCounter'
import useParallax from '../hooks/useParallax'
import './Hero.css'

const Hero3DScene = lazy(() => import('./Hero3DScene'))

/* ── Letter-by-letter animated text ── */
function AnimatedLetters({ text, delay = 0, className = '' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={`anim-letters ${className} ${visible ? 'anim-letters--visible' : ''}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="anim-letter"
          style={{ animationDelay: `${delay + i * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

/* ── Typewriter text effect ── */
function TypewriterText({ text, delay = 0, speed = 40 }) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i))
          i++
        } else {
          clearInterval(interval)
          setTimeout(() => setShowCursor(false), 2000)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(startTimer)
  }, [text, delay, speed])

  return (
    <span className="typewriter">
      {displayed}
      {showCursor && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

/* ── Glitch text effect ── */
function GlitchText({ text, className = '' }) {
  return (
    <span className={`glitch-wrapper ${className}`}>
      <span className="glitch-text" data-text={text}>{text}</span>
    </span>
  )
}

function AnimatedCounter({ end, suffix = '', label, icon }) {
  const [count, ref] = useCounter(end, 2200)
  return (
    <div className="hero-stat" ref={ref}>
      <div className="hero-stat-icon">{icon}</div>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  )
}

function HeroImageCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="hero-image-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`hero-image-wrapper ${hovered ? 'hovered' : ''}`}>
        <div className="hero-img-main">
          <img src="/hero-banner.jpg" alt="STADFURN Construction Project" loading="eager" />
          <div className="hero-img-overlay" />
        </div>
        <div className="hero-img-float">
          <img src="/hero-project.jpg" alt="Modern Architecture" loading="eager" />
          <div className="hero-img-float-border" />
        </div>
        <div className="hero-img-badge">
          <span className="hero-img-badge-number">15+</span>
          <span className="hero-img-badge-text">Years of<br/>Excellence</span>
        </div>
        <div className="hero-img-dots" />
        <div className="hero-img-corner hero-img-corner--tl" />
        <div className="hero-img-corner hero-img-corner--br" />
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useReveal()
  const badgeRef = useReveal(200)
  const titleRef = useReveal(400)
  const descRef = useReveal(600)
  const actionsRef = useReveal(800)
  const imageRef = useReveal(300)
  const parallaxOffset = useParallax(0.15)
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={`hero ${loaded ? 'hero--loaded' : ''}`} id="hero">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div className="hero-overlay" />

      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      <div className="hero-grid" />

      <div className="hero-glow hero-glow--1" style={{
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
      }} />
      <div className="hero-glow hero-glow--2" style={{
        transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`
      }} />

      <div className="container">
        <div className="hero-layout">
          <div className="hero-content" ref={ref}>
            {/* Animated Badge */}
            <div className="hero-badge reveal" ref={badgeRef}>
              <span className="hero-badge-dot" />
              <span>ISO 9001:2015 Certified</span>
              <span className="hero-badge-line" />
              <span className="hero-badge-tag">EPC Solutions</span>
            </div>

            {/* Title with animated text effects */}
            <h1 className="reveal" ref={titleRef}>
              <span className="hero-title-line">
                <AnimatedLetters text="Engineering" delay={500} />
              </span>
              <span className="hero-title-line">
                <GlitchText text="Precision" className="gold" />
                <AnimatedLetters text=" in" delay={1100} />
              </span>
              <span className="hero-title-line">
                <AnimatedLetters text="Every " delay={1300} />
                <span className="hero-title-outline">
                  <AnimatedLetters text="Structure" delay={1500} />
                </span>
              </span>
            </h1>

            {/* Typewriter description */}
            <p className="hero-desc reveal" ref={descRef}>
              <TypewriterText
                text="STADFURN delivers end-to-end EPC solutions — from concept to commissioning. We engineer, procure, and construct with a single-minded focus on quality, safety, and on-time delivery."
                delay={2000}
                speed={20}
              />
            </p>

            <div className="hero-actions reveal" ref={actionsRef}>
              <a href="#contact" className="btn btn-primary btn-glow">
                <span className="btn-text">Start Your Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#services" className="btn btn-outline btn-3d">
                <span className="btn-text">Our Services</span>
                <span className="btn-outline-shine" />
              </a>
            </div>

            <div className="hero-stats">
              <AnimatedCounter
                end={150} suffix="+"
                label="Projects Delivered"
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m4-8h2m4 0h2m-8 4h2m4 0h2"/></svg>}
              />
              <AnimatedCounter
                end={50} suffix="+"
                label="Expert Engineers"
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
              />
              <AnimatedCounter
                end={15} suffix="+"
                label="Years Experience"
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
              />
              <AnimatedCounter
                end={100} suffix="%"
                label="Client Satisfaction"
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>}
              />
            </div>
          </div>

          <div className="hero-right reveal" ref={imageRef}>
            <HeroImageCard />
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>

      <div className="hero-bottom-fade" />
    </section>
  )
}
