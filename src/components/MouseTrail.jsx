import React, { useEffect, useRef } from 'react'

const MouseTrail = () => {
  const canvasRef = useRef(null)
  const trailRef = useRef([])
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

    // Trail particle class
    class TrailParticle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.life = 1
        this.decay = 0.02
        this.size = Math.random() * 3 + 2
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= this.decay
        this.size *= 0.98
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.life
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(0.5, `${this.color}80`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Core particle
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }

      isDead() {
        return this.life <= 0
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      
      // Add trail particles
      for (let i = 0; i < 3; i++) {
        trailRef.current.push(new TrailParticle(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        ))
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw trail particles
      trailRef.current = trailRef.current.filter(particle => {
        particle.update()
        particle.draw()
        return !particle.isDead()
      })

      // Draw connection lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)'
      ctx.lineWidth = 1
      
      for (let i = 0; i < trailRef.current.length; i++) {
        for (let j = i + 1; j < trailRef.current.length; j++) {
          const p1 = trailRef.current[i]
          const p2 = trailRef.current[j]
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          )
          
          if (distance < 50) {
            ctx.globalAlpha = (50 - distance) / 50 * 0.1 * p1.life * p2.life
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default MouseTrail
