import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleSystem = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 3 + 1
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`
        this.opacity = Math.random() * 0.5 + 0.2
        this.life = 1
        this.decay = Math.random() * 0.02 + 0.01
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = this.size * 2
        ctx.fill()
        ctx.restore()
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.opacity -= this.decay
        this.life -= this.decay

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1

        // Mouse interaction
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          this.vx += dx * force * 0.001
          this.vy += dy * force * 0.001
          this.opacity = Math.min(this.opacity + 0.01, 0.8)
        }
      }
    }

    // Initialize particles
    const init = () => {
      particlesRef.current = []
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push(new Particle())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update()
        particle.draw()
        
        // Remove dead particles
        if (particle.life <= 0) {
          particlesRef.current.splice(index, 1)
        }
      })
      
      // Add new particles
      if (particlesRef.current.length < 100) {
        particlesRef.current.push(new Particle())
      }
      
      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) {
            ctx.globalAlpha = (80 - distance) / 80 * 0.1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Initialize and start animation
    init()
    animate()
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default ParticleSystem
