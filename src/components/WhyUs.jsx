import useReveal from '../hooks/useReveal'
import './WhyUs.css'

const reasons = [
  {
    num: '01',
    title: 'Single-Point Accountability',
    text: 'One partner for engineering, procurement, and construction — eliminating finger-pointing and coordination gaps between multiple vendors.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'ISO-Certified Quality',
    text: 'ISO 9001:2015 certified processes ensure consistent quality standards across every project phase, from design to handover.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'On-Time, On-Budget',
    text: 'Milestone-driven project management with transparent cost control — delivering projects within agreed timelines and budgets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Safety-First Culture',
    text: 'Zero-incident commitment with rigorous HSSE protocols, regular audits, and continuous safety training across all project sites.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

function WhyCard({ item, index }) {
  const ref = useReveal(index * 120)
  return (
    <div className="why-card reveal" ref={ref}>
      <div className="why-card-icon">{item.icon}</div>
      <span className="why-number">{item.num}</span>
      <div>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
      <div className="why-card-glow" />
    </div>
  )
}

export default function WhyUs() {
  const headerRef = useReveal()

  return (
    <section className="why-us" id="why-us">
      {/* Decorative background image */}
      <div className="why-us-bg" />
      <div className="container">
        <div className="why-us-header reveal" ref={headerRef}>
          <span className="section-label">Why STADFURN</span>
          <h2 className="section-title">The STADFURN Advantage</h2>
          <p className="section-subtitle">
            When precision matters and deadlines are non-negotiable, STADFURN delivers with confidence.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <WhyCard key={r.num} item={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
