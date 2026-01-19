import { useEffect, useRef } from 'react'

function Gallery({ onImageClick }) {
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

  const galleryImages = [
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
    'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=600',
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-header reveal" ref={el => revealRefs.current[0] = el}>
        <span className="section-tag">Photography</span>
        <h2 className="section-title">GALLERY</h2>
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div 
            key={index} 
            className="gallery-item reveal" 
            ref={el => revealRefs.current[index + 1] = el}
            onClick={() => onImageClick(src)}
          >
            <img src={src} alt={`Photography work ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
