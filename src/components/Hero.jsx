import { useEffect, useRef } from 'react'

function Hero() {
  const heroImageRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          if (heroImageRef.current) {
            heroImageRef.current.style.transform = `translateY(${scrolled * 0.1}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Visual Storyteller</span>
          <h1 className="hero-title">
            <span>ARKO</span>
          </h1>
          <p className="hero-description">
            Professional video editor, photographer & cinematographer crafting visual narratives that captivate, inspire, and leave lasting impressions.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
        <div className="hero-image" ref={heroImageRef}>
          <div className="image-container">
            <div className="image-frame"></div>
            <img 
              src="/profile_picture.jpg" 
              alt="Arko - Visual Storyteller"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%231a1a1a%22 width=%22400%22 height=%22500%22/%3E%3Ctext fill=%22%23ff3d00%22 font-family=%22Bebas Neue, sans-serif%22 font-size=%2280%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EARKO%3C/text%3E%3C/svg%3E"
              }}
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
