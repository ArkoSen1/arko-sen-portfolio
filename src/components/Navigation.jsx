import { useState } from 'react'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav>
        <a href="#home" className="logo" onClick={(e) => handleSmoothScroll(e, '#home')}>
          ARK<span>O</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
          <li><a href="#videos" onClick={(e) => handleSmoothScroll(e, '#videos')}>Videos</a></li>
          <li><a href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')}>Gallery</a></li>
          <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
        </ul>
        <div 
          className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
        <a href="#videos" onClick={(e) => handleSmoothScroll(e, '#videos')}>Videos</a>
        <a href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')}>Gallery</a>
        <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
      </div>
    </>
  )
}

export default Navigation
