import { useEffect, useRef, useState } from 'react'

function Videos() {
  const revealRefs = useRef([])
  const [showAll, setShowAll] = useState(false)

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

  useEffect(() => {
    // Trigger reveal animation for newly shown videos
    if (showAll) {
      setTimeout(() => {
        const revealElements = revealRefs.current
        revealElements.forEach(el => {
          if (!el) return
          const windowHeight = window.innerHeight
          const elementTop = el.getBoundingClientRect().top
          const revealPoint = 150

          if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active')
          }
        })
      }, 100)
    }
  }, [showAll])

  const videos = [
    { 
      id: '1dtbQ2KZR8sAKXn0B-iR5SjuemfTvEj7M',
      title: 'Video 1', 
      category: 'Portfolio' 
    },
    { 
      id: '1lUr5mdRGZclRf4Kh3SmuT-PCO_QF9DvF',
      title: 'Video 2', 
      category: 'Portfolio' 
    },
    { 
      id: '1gFJ1lwJfWods2Gul24vHzg9wbjS9nbSA',
      title: 'Video 3', 
      category: 'Portfolio' 
    },
    { 
      id: '1MMIJ7HkrDbOt2jglev2_0rqgp7zrwVao',
      title: 'Video 4', 
      category: 'Portfolio' 
    },
    { 
      id: '1ZM7adiQ1q_eiwpkOsdqSlVsT2H4BiXk6',
      title: 'Video 5', 
      category: 'Portfolio' 
    },
    { 
      id: '1-0znS_v1SZTZ2_4AlnrxPfvHb7I_rdfD',
      title: 'Video 6', 
      category: 'Portfolio' 
    },
    { 
      id: '1i2wxV5nYYn7kftmuk5r49jjAvpCXmuLr',
      title: 'Video 7', 
      category: 'Portfolio' 
    },
    { 
      id: '1cuBuFaDtsTzZroIhWTJuyzx8XzWUaKDb',
      title: 'Video 8', 
      category: 'Portfolio' 
    },
    { 
      id: '1ZZ9PY0HowsIAepp1eG7Sd0ASkhEpN4Cq',
      title: 'Video 9', 
      category: 'Portfolio' 
    },
    { 
      id: '1mpTrbMzDM5eX38t2XzBsPvAxM7hfCF0_',
      title: 'Video 10', 
      category: 'Portfolio' 
    },
  ]

  return (
    <section className="videos-section" id="videos">
      <div className="section-header reveal" ref={el => revealRefs.current[0] = el}>
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">VIDEO WORK</h2>
      </div>
      
      <div className="video-grid">
        {videos.slice(0, showAll ? videos.length : 2).map((video, index) => {
          const embedUrl = `https://drive.google.com/file/d/${video.id}/preview`
          return (
            <div key={index} className="video-card reveal" ref={el => revealRefs.current[index + 1] = el}>
              <iframe
                src={embedUrl}
                allow="autoplay"
                allowFullScreen
                title={video.title}
              ></iframe>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <span className="video-category">{video.category}</span>
              </div>
            </div>
          )
        })}
      </div>
      
      {!showAll && videos.length > 2 && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={() => setShowAll(true)}>
            SEE MORE
          </button>
        </div>
      )}
    </section>
  )
}

export default Videos
