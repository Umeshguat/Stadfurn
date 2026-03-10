import useReveal from '../hooks/useReveal'
import './CtaBanner.css'

export default function CtaBanner() {
  const ref = useReveal()

  return (
    <section className="cta-banner">
      <div className="cta-banner-bg" />
      <div className="cta-banner-overlay" />
      <div className="container">
        <div className="cta-content reveal-scale" ref={ref}>
          <span className="section-label">Ready to Build?</span>
          <h2>Let's Engineer Your Next Project Together</h2>
          <p>
            From initial concept to final commissioning — our team is ready
            to deliver precision, quality, and reliability at every stage.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="tel:+919867435206" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
