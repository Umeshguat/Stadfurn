import useReveal from '../hooks/useReveal'
import useCounter from '../hooks/useCounter'
import './About.css'

const points = [
  {
    title: 'Engineering',
    text: 'Detailed design, technical specifications, and structural analysis with precision-first methodology.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V10l7-7 7 7v10M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Procurement',
    text: 'Strategic sourcing of materials, equipment, and subcontractors to ensure quality and cost-efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Construction',
    text: 'Physical building, installation, and commissioning delivered safely and on schedule.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

function MiniStat({ end, suffix, label }) {
  const [count, ref] = useCounter(end, 1800)
  return (
    <div className="about-mini-stat" ref={ref}>
      <h4>{count}{suffix}</h4>
      <p>{label}</p>
    </div>
  )
}

export default function About() {
  const refLeft = useReveal()
  const refRight = useReveal(200)

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal-left" ref={refLeft}>
            <div className="about-images">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=800&q=80"
                  alt="Indian construction site with steel framework"
                  loading="lazy"
                />
                <span className="about-iso">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  ISO 9001:2015
                </span>
              </div>
              <div className="about-img-secondary">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                  alt="Indian engineers reviewing construction blueprints"
                  loading="lazy"
                />
              </div>
              <div className="about-img-accent" />
            </div>
            <div className="about-mini-stats">
              <MiniStat end={150} suffix="+" label="Projects" />
              <MiniStat end={100} suffix="%" label="On-Time" />
            </div>
          </div>

          <div className="about-right reveal-right" ref={refRight}>
            <span className="section-label">About STADFURN</span>
            <h2 className="section-title">Single-Point Responsibility for Complex Projects</h2>
            <p className="section-subtitle">
              STADFURN is an integrated EPC company that brings engineering excellence,
              strategic procurement, and robust construction capabilities under one roof.
              We take ownership of your project from blueprint to handover.
            </p>
            <div className="about-points">
              {points.map((p, i) => (
                <div className="about-point" key={p.title} style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="about-point-icon">{p.icon}</div>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
