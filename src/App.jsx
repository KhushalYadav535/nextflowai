import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Bot, 
  Zap, 
  Workflow, 
  Brain, 
  ChevronRight, 
  Play, 
  Download, 
  Star,
  ArrowRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

// Components
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import WorkflowGallery from './components/WorkflowGallery'
import DynamicDemo from './components/DynamicDemo'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

// Premium Components
import ParticleSystem from './components/ParticleSystem'
import Floating3DElements from './components/Floating3DElements'
import MouseTrail from './components/MouseTrail'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">NextFlow AI</h2>
          <p className="text-navy-300 mt-2">Loading the future...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Premium Background Effects */}
      <ParticleSystem />
      <Floating3DElements />
      <MouseTrail />
      <CustomCursor />
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Solutions />
        <WorkflowGallery />
        <DynamicDemo />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}

export default App
