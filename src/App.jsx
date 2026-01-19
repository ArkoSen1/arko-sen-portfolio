import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import WebGLBackground from './components/WebGLBackground'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

function App() {
  const [loading, setLoading] = useState(true)
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
    
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      <div className={loading ? 'loader' : 'loader hidden'}>
        <div className="loader-text">
          <span style={{ animationDelay: '0s' }}>A</span>
          <span style={{ animationDelay: '0.1s' }}>R</span>
          <span style={{ animationDelay: '0.2s' }}>K</span>
          <span style={{ animationDelay: '0.3s' }}>O</span>
        </div>
      </div>
      <CustomCursor />
      <WebGLBackground />
      <Navigation />
      <Hero />
      <Videos />
      <Gallery onImageClick={setLightboxImage} />
      <Services />
      <Contact />
      <Footer />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  )
}

export default App
