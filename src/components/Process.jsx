import useReveal from '../hooks/useReveal'
import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Understanding your requirements, scope, and project objectives in detail.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Engineering & Design',
    desc: 'Detailed design, engineering drawings, and technical specifications.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Procurement & Build',
    desc: 'Strategic sourcing followed by systematic construction and installation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Commissioning',
    desc: 'Testing, quality verification, and seamless project handover.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
]

function Step({ step, index }) {
  const ref = useReveal(index * 150)
  return (
    <div className="process-step reveal" ref={ref}>
      <div className="step-circle">
        <div className="step-num">{step.num}</div>
        <div className="step-icon">{step.icon}</div>
      </div>
      <h4>{step.title}</h4>
      <p>{step.desc}</p>
    </div>
  )
}

export default function Process() {
  const headerRef = useReveal()

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-header reveal" ref={headerRef}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A proven methodology that transforms your vision into reality with clarity at every stage.
          </p>
        </div>
        <div className="process-steps">
          <div className="process-line" />
          {steps.map((s, i) => (
            <Step key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
