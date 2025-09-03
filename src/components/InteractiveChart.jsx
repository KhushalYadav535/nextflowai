import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const InteractiveChart = ({ data, type = 'line', height = 200, className = '' }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = height + 'px'
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Chart data
    const chartData = data || [
      { label: 'Jan', value: 65, color: '#00d4ff' },
      { label: 'Feb', value: 78, color: '#00ffd4' },
      { label: 'Mar', value: 90, color: '#8b5cf6' },
      { label: 'Apr', value: 85, color: '#00d4ff' },
      { label: 'May', value: 95, color: '#00ffd4' },
      { label: 'Jun', value: 88, color: '#8b5cf6' }
    ]

    const maxValue = Math.max(...chartData.map(d => d.value))
    const padding = 40
    const chartWidth = canvas.width / window.devicePixelRatio - padding * 2
    const chartHeight = height - padding * 2
    const barWidth = chartWidth / chartData.length
    const pointRadius = 6

    // Animation variables
    let animationProgress = 0
    const targetProgress = 1

    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      const gridLines = 5
      
      for (let i = 0; i <= gridLines; i++) {
        const y = padding + (chartHeight / gridLines) * i
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(padding + chartWidth, y)
        ctx.stroke()
      }

      // Draw chart based on type
      if (type === 'line') {
        drawLineChart(chartData, animationProgress)
      } else if (type === 'bar') {
        drawBarChart(chartData, animationProgress)
      } else if (type === 'area') {
        drawAreaChart(chartData, animationProgress)
      }

      // Draw labels
      drawLabels(chartData)

      // Animate
      if (animationProgress < targetProgress) {
        animationProgress += 0.02
        animationRef.current = requestAnimationFrame(drawChart)
      }
    }

    const drawLineChart = (data, progress) => {
      ctx.strokeStyle = '#00d4ff'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Draw line
      ctx.beginPath()
      data.forEach((item, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index
        const y = padding + chartHeight - (item.value / maxValue) * chartHeight * progress
        
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.stroke()

      // Draw points
      data.forEach((item, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index
        const y = padding + chartHeight - (item.value / maxValue) * chartHeight * progress
        
        // Glow effect
        ctx.shadowColor = item.color
        ctx.shadowBlur = 15
        ctx.fillStyle = item.color
        ctx.beginPath()
        ctx.arc(x, y, pointRadius, 0, Math.PI * 2)
        ctx.fill()
        
        // Reset shadow
        ctx.shadowBlur = 0
      })
    }

    const drawBarChart = (data, progress) => {
      data.forEach((item, index) => {
        const x = padding + index * barWidth + barWidth * 0.1
        const barHeight = (item.value / maxValue) * chartHeight * progress
        const y = padding + chartHeight - barHeight

        // Gradient
        const gradient = ctx.createLinearGradient(x, y, x, y + barHeight)
        gradient.addColorStop(0, item.color)
        gradient.addColorStop(1, item.color + '80')

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth * 0.8, barHeight)

        // Glow effect
        ctx.shadowColor = item.color
        ctx.shadowBlur = 10
        ctx.fillRect(x, y, barWidth * 0.8, barHeight)
        ctx.shadowBlur = 0
      })
    }

    const drawAreaChart = (data, progress) => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight)
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)')
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0.1)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      
      data.forEach((item, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index
        const y = padding + chartHeight - (item.value / maxValue) * chartHeight * progress
        
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      // Complete the area
      ctx.lineTo(padding + chartWidth, padding + chartHeight)
      ctx.lineTo(padding, padding + chartHeight)
      ctx.closePath()
      ctx.fill()

      // Draw line on top
      drawLineChart(data, progress)
    }

    const drawLabels = (data) => {
      ctx.fillStyle = '#ffffff'
      ctx.font = '12px Inter'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'

      data.forEach((item, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index
        const y = padding + chartHeight + 10
        
        ctx.fillText(item.label, x, y)
      })
    }

    // Start animation
    drawChart()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [data, type, height])

  return (
    <motion.div
      className={`interactive-chart ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <canvas
        ref={canvasRef}
        className="chart-canvas"
        style={{ 
          width: '100%', 
          height: height,
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      />
      
      <style jsx>{`
        .interactive-chart {
          position: relative;
          overflow: hidden;
        }
        
        .chart-canvas {
          transition: all 0.3s ease;
        }
        
        .chart-canvas:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
        }
      `}</style>
    </motion.div>
  )
}

export default InteractiveChart
