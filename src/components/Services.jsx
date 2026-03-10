import useReveal from '../hooks/useReveal'
import './Services.css'

const services = [
  {
    title: 'Structural Engineering',
    desc: 'Precision-engineered structural designs for industrial, commercial, and infrastructure projects.',
    items: ['Structural analysis & design', 'Load calculations', 'Foundation engineering', 'Seismic-resistant design'],
    image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 20h20M5 20V10l7-7 7 7v10M9 20v-6h6v6" /></svg>
    ),
  },
  {
    title: 'Procurement & Supply Chain',
    desc: 'Strategic material sourcing and vendor management ensuring quality, compliance, and cost efficiency.',
    items: ['Vendor qualification & selection', 'Material procurement', 'Quality inspections', 'Logistics coordination'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
    ),
  },
  {
    title: 'Construction & Commissioning',
    desc: 'End-to-end project execution with rigorous safety standards and milestone-driven progress.',
    items: ['Civil & structural construction', 'Mechanical & piping installation', 'Pre-commissioning & testing', 'Project handover & documentation'],
    image: 'https://images.unsplash.com/photo-1625722662233-297060231b85?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
    ),
  },
  {
    title: 'Road & Tunnel Infrastructure',
    desc: 'Highways, expressways, tunnels, flyovers, and urban road network construction across India.',
    items: ['Highway & expressway construction', 'Tunnel boring & lining', 'Flyover & bridge building', 'Road resurfacing & maintenance'],
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
    ),
  },
  {
    title: 'Project Management',
    desc: 'Disciplined project governance ensuring scope, cost, time, and quality targets are met.',
    items: ['Scheduling & planning', 'Cost control & budgeting', 'Risk management', 'Stakeholder reporting'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    ),
  },
  {
    title: 'Design & Engineering Consultancy',
    desc: 'Expert advisory and detailed engineering to transform concepts into buildable designs.',
    items: ['Feasibility studies', 'Detailed engineering drawings', '3D modeling & BIM', 'Value engineering'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
    ),
  },
  {
    title: 'Quality & Safety Assurance',
    desc: 'ISO-certified processes with zero-compromise commitment to quality and workplace safety.',
    items: ['QA/QC inspections', 'Safety audits & HSSE', 'Compliance management', 'Material testing & certification'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
]

function ServiceCard({ service, index }) {
  const ref = useReveal(index * 100)
  return (
    <div className="service-card reveal" ref={ref}>
      <div className="service-card-image">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-card-body">
        <div className="service-icon">{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <ul>
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  const headerRef = useReveal()

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal" ref={headerRef}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Comprehensive EPC Services</h2>
          <p className="section-subtitle">
            From concept through commissioning, we deliver integrated solutions
            that combine engineering expertise with flawless execution.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
