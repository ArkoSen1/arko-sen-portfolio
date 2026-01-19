import { useEffect, useRef } from 'react'

function Videos() {
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
    reveal() // Initial check

    return () => window.removeEventListener('scroll', reveal)
  }, [])

  const videos = [
    { title: 'Cinematic Reel', category: 'Cinematography' },
    { title: 'Commercial Edit', category: 'Video Editing' },
    { title: 'Music Video', category: 'Videography' },
    { title: 'Event Coverage', category: 'Videography' },
    { title: 'Documentary', category: 'Cinematography' },
    { title: 'Brand Story', category: 'Video Editing' },
  ]

  return (
    <section className="videos-section" id="videos">
      <div className="section-header reveal" ref={el => revealRefs.current[0] = el}>
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">VIDEO WORK</h2>
      </div>
      
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card reveal" ref={el => revealRefs.current[index + 1] = el}>
            <div className="video-placeholder">
              <div className="play-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <span className="video-category">{video.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos
