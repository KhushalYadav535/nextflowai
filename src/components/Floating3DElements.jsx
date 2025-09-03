import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Floating3DElements = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating 3D elements
    const createFloatingElement = (type, delay) => {
      const element = document.createElement('div')
      element.className = `floating-3d-element ${type}`
      
      // Random position
      const x = Math.random() * 100
      const y = Math.random() * 100
      
      element.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${Math.random() * 60 + 40}px;
        height: ${Math.random() * 60 + 40}px;
        opacity: 0.1;
        pointer-events: none;
        z-index: 1;
        animation-delay: ${delay}s;
      `
      
      container.appendChild(element)
      
      // Animate
      const animate = () => {
        const time = Date.now() * 0.001 + delay
        const x = Math.sin(time * 0.5) * 50 + 50
        const y = Math.cos(time * 0.3) * 30 + 50
        const rotate = time * 30
        const scale = Math.sin(time * 2) * 0.2 + 0.8
        
        element.style.transform = `translate(${x}%, ${y}%) rotate(${rotate}deg) scale(${scale})`
        element.style.opacity = Math.sin(time * 1.5) * 0.05 + 0.1
      }
      
      const interval = setInterval(animate, 50)
      
      return () => clearInterval(interval)
    }

    // Create different types of elements
    const cleanup = []
    for (let i = 0; i < 8; i++) {
      const types = ['cube', 'sphere', 'pyramid', 'ring']
      const type = types[i % types.length]
      const delay = i * 0.5
      cleanup.push(createFloatingElement(type, delay))
    }

    return () => {
      cleanup.forEach(clean => clean?.())
      container.innerHTML = ''
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-1">
      <style jsx>{`
        .floating-3d-element {
          transition: all 0.1s ease-out;
        }
        
        .cube {
          background: linear-gradient(45deg, #00d4ff, #00ffd4);
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          border-radius: 4px;
        }
        
        .sphere {
          background: radial-gradient(circle, #00d4ff, #00ffd4);
          border-radius: 50%;
        }
        
        .pyramid {
          background: linear-gradient(45deg, #00d4ff, #00ffd4);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        .ring {
          background: transparent;
          border: 3px solid #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
      `}</style>
    </div>
  )
}

export default Floating3DElements
