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
        animation-delay: ${delay}s;
        --rotate-x: ${Math.random() * 360}deg;
        --rotate-y: ${Math.random() * 360}deg;
        --translate-z: ${Math.random() * 100 - 50}px;
        filter: blur(0.5px);
      `
      container.appendChild(element)
      return element
    }

    // Create multiple elements
    const elements = []
    for (let i = 0; i < 8; i++) {
      const type = i % 2 === 0 ? 'cube' : 'sphere'
      const element = createFloatingElement(type, i * 0.5)
      elements.push(element)
    }

    // Cleanup function
    return () => {
      elements.forEach(element => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Additional floating tech elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-blue/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-teal/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-neon-purple/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-neon-blue/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* Tech circuit lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#00ffd4" />
            </linearGradient>
          </defs>
          <path
            d="M10 50 Q25 25 50 50 Q75 75 90 50"
            stroke="url(#circuitGradient)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M50 10 Q75 25 50 50 Q25 75 50 90"
            stroke="url(#circuitGradient)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default Floating3DElements
