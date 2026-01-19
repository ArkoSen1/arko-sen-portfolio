import { useEffect } from 'react'

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (image) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div className={`lightbox ${image ? 'active' : ''}`} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <img src={image} alt="Gallery image" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

export default Lightbox
