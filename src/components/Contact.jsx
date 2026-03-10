import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const refLeft = useReveal()
  const refRight = useReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal" ref={refLeft}>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let&rsquo;s Build Something Remarkable</h2>
            <p className="section-subtitle">
              Have a project in mind? Reach out to discuss how STADFURN can deliver
              precision-engineered EPC solutions for your next venture.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+919867435206">+91 98674 35206</a><br />
                    <a href="tel:+919967612883">+91 99676 12883</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:sanjaygiri@stadfurn.com">sanjaygiri@stadfurn.com</a><br />
                    <a href="mailto:gajendra@stadfurn.com">gajendra@stadfurn.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Office</h4>
                  <p>
                    Plot No. 15, Aditya Industrial Area,<br />
                    Village - Kumbhivali, Savroli - Kharpada Road,<br />
                    Khalapur, Raigad - 410202
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right reveal" ref={refRight}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Company name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>EPC Turnkey Project</option>
                  <option>Structural Engineering</option>
                  <option>Procurement Services</option>
                  <option>Construction & Commissioning</option>
                  <option>Design & Engineering Consultancy</option>
                  <option>Project Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Details</label>
                <textarea placeholder="Tell us about your project requirements..." />
              </div>
              <button
                type="submit"
                className={`btn btn-primary contact-submit ${submitted ? 'submitted' : ''}`}
              >
                {submitted ? 'Enquiry Sent!' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
