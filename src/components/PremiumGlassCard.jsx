import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const PremiumGlassCard = ({ children, className = '', intensity = 0.1 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])
  
  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return
      
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const normalizedX = (e.clientX - centerX) / (rect.width / 2)
      const normalizedY = (e.clientY - centerY) / (rect.height / 2)
      
      mouseX.set(normalizedX)
      mouseY.set(normalizedY)
      setMousePosition({ x: normalizedX, y: normalizedY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      className={`premium-glass-card ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Card Content */}
      <motion.div
        className="card-content"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
      >
        {children}
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="card-glow"
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(
            circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%,
            rgba(0, 212, 255, 0.3) 0%,
            rgba(0, 255, 212, 0.1) 50%,
            transparent 100%
          )`,
        }}
      />

      {/* Border Glow */}
      <motion.div
        className="card-border-glow"
        animate={{
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      <style jsx>{`
        .premium-glass-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .premium-glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border-radius: 24px;
          pointer-events: none;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          z-index: 1;
          border-radius: 50%;
          filter: blur(40px);
        }

        .card-border-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            rgba(0, 212, 255, 0.3),
            rgba(0, 255, 212, 0.3),
            rgba(139, 92, 246, 0.3)
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          padding: 1px;
          pointer-events: none;
          z-index: 0;
        }

        .premium-glass-card:hover {
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 40px rgba(0, 212, 255, 0.2);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .premium-glass-card {
            padding: 1.5rem;
            border-radius: 20px;
          }
          
          .card-border-glow {
            border-radius: 20px;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default PremiumGlassCard
