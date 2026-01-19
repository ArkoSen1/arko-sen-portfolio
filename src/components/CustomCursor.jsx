import { useEffect } from 'react'

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const cursorDot = document.querySelector('.cursor-dot')

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
      if (cursorDot) {
        cursorDot.style.left = e.clientX + 'px'
        cursorDot.style.top = e.clientY + 'px'
      }
    }

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
      }
    }

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    const interactiveElements = document.querySelectorAll('a, button, .video-card, .gallery-item')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  )
}

export default CustomCursor
