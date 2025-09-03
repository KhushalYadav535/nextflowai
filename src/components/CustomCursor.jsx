import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true))
      el.addEventListener('mouseleave', () => setIsHovering(false))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true))
        el.removeEventListener('mouseleave', () => setIsHovering(false))
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="custom-cursor-trail"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />

      <style jsx>{`
        .custom-cursor {
          mix-blend-mode: difference;
        }
        
        .cursor-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #00d4ff, #00ffd4);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
        }
        
        .cursor-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0, 212, 255, 0.5);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .custom-cursor-trail {
          width: 8px;
          height: 8px;
          background: rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          filter: blur(2px);
        }
        
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
        
        /* Show default cursor for touch devices */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
          
          .custom-cursor,
          .custom-cursor-trail {
            display: none;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .custom-cursor,
          .custom-cursor-trail {
            display: none;
          }
          
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  )
}

export default CustomCursor
