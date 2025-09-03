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
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`
        this.life = Math.random() * 100 + 50
        this.maxLife = this.life
      }

      update() {
        // Mouse attraction
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          this.vx += dx * force * 0.001
          this.vy += dy * force * 0.001
        }

        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -0.8
        if (this.y < 0 || this.y > canvas.height) this.vy *= -0.8

        // Friction
        this.vx *= 0.99
        this.vy *= 0.99

        // Life cycle
        this.life--
        if (this.life <= 0) {
          this.life = this.maxLife
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }

        // Opacity based on life
        this.opacity = (this.life / this.maxLife) * 0.5 + 0.2
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        )
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }
    }

    // Create particles
    const particleCount = 100
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          )
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}

export default ParticleSystem
