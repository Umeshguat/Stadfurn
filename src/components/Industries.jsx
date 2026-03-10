import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import useCounter from '../hooks/useCounter'
import './Industries.css'

const industries = [
  {
    title: 'Manufacturing',
    desc: 'Factories & production plants',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&q=80',
    projects: 45,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h20M5 20V10l7-7 7 7v10"/></svg>,
  },
  {
    title: 'Oil & Gas',
    desc: 'Refineries & processing units',
    image: 'https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?w=400&q=80',
    projects: 28,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    title: 'Power & Energy',
    desc: 'Power plants & substations',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
    projects: 32,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    title: 'Commercial',
    desc: 'Office & retail complexes',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
    projects: 20,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3"/></svg>,
  },
  {
    title: 'Pharmaceuticals',
    desc: 'Cleanrooms & GMP facilities',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&q=80',
    projects: 15,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'Water Treatment',
    desc: 'WTP, STP & ETP plants',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80',
    projects: 18,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  },
  {
    title: 'Industrial',
    desc: 'Warehouses & logistics hubs',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80',
    projects: 22,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    title: 'Infrastructure',
    desc: 'Metro, rail & urban utilities',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80',
    projects: 12,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
  },
]

function IndustryItem({ item, index }) {
  const ref = useReveal(index * 80)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`industry-item reveal-scale ${hovered ? 'industry-item--active' : ''}`}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="industry-img">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="industry-img-overlay" />
      </div>

      {/* Icon */}
      <div className="industry-icon">{item.icon}</div>

      {/* Project count badge */}
      <div className="industry-badge">{item.projects}+ Projects</div>

      <div className="industry-content">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <div className="industry-cta">
          <span>View Projects</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="industry-line" />
    </div>
  )
}

function IndustryStat({ end, suffix, label }) {
  const [count, counterRef] = useCounter(end, 2000)
  return (
    <div className="industries-stat" ref={counterRef}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  )
}

export default function Industries() {
  const headerRef = useReveal()
  const statsRef = useReveal(200)

  return (
    <section className="industries" id="industries">
      {/* Background elements */}
      <div className="industries-bg-grid" />
      <div className="industries-glow industries-glow--1" />
      <div className="industries-glow industries-glow--2" />

      <div className="container">
        <div className="industries-header reveal" ref={headerRef}>
          <span className="section-label">Sectors We Serve</span>
          <h2 className="section-title">
            Industries & <span className="industries-gold">Applications</span>
          </h2>
          <p className="section-subtitle">
            Delivering EPC excellence across diverse industrial sectors with domain-specific expertise.
          </p>
          <div className="industries-header-line" />
        </div>

        <div className="industries-grid">
          {industries.map((item, i) => (
            <IndustryItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="industries-stats reveal" ref={statsRef}>
          <IndustryStat end={8} suffix="+" label="Industry Sectors" />
          <div className="industries-stat-divider" />
          <IndustryStat end={150} suffix="+" label="Projects Completed" />
          <div className="industries-stat-divider" />
          <IndustryStat end={50} suffix="+" label="Expert Engineers" />
          <div className="industries-stat-divider" />
          <IndustryStat end={100} suffix="%" label="Client Retention" />
        </div>
      </div>
    </section>
  )
}
