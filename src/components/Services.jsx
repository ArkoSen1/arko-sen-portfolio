import { useEffect, useRef } from 'react'

function Services() {
  const revealRefs = useRef([])

  useEffect(() => {
    const revealElements = revealRefs.current

    const reveal = () => {
      revealElements.forEach(el => {
        if (!el) return
        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top
        const revealPoint = 150

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal()

    return () => window.removeEventListener('scroll', reveal)
  }, [])

  const services = [
    {
      icon: 'video',
      title: 'Video Editing',
      description: 'Transform raw footage into compelling visual stories with professional color grading, seamless transitions, and cinematic effects.'
    },
    {
      icon: 'camera',
      title: 'Cinematography',
      description: 'Capture stunning visuals with expert camera work, dynamic compositions, and artistic lighting that brings your vision to life.'
    },
    {
      icon: 'photo',
      title: 'Photography',
      description: 'Professional photography services for events, portraits, products, and more. Every shot tells a unique story.'
    },
    {
      icon: 'videography',
      title: 'Videography',
      description: 'Complete video production from concept to final delivery. Events, commercials, documentaries, and creative projects.'
    },
  ]

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'video':
        return (
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M10 9l5 3-5 3V9z"/>
          </svg>
        )
      case 'camera':
        return (
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
          </svg>
        )
      case 'photo':
        return (
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
        )
      case 'videography':
        return (
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="services-section" id="services">
      <div className="section-header reveal" ref={el => revealRefs.current[0] = el}>
        <span className="section-tag">What I Do</span>
        <h2 className="section-title">SERVICES</h2>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card reveal" ref={el => revealRefs.current[index + 1] = el}>
            {renderIcon(service.icon)}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
