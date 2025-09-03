import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Zap, BarChart3, TrendingUp, CheckCircle } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Solutions',
      avatar: 'https://via.placeholder.com/80x80/1e293b/ffffff?text=SC',
      rating: 5,
      content: 'NextFlow AI transformed our customer support operations. We automated 80% of routine inquiries and reduced response time from 4 hours to 15 minutes. The ROI was immediate and substantial.',
      results: ['80% automation', '4h → 15min response', 'Immediate ROI']
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'Global Retail Corp',
      avatar: 'https://via.placeholder.com/80x80/1e293b/ffffff?text=MR',
      rating: 5,
      content: 'The workflow automation capabilities are incredible. We streamlined our entire order processing pipeline, eliminating manual errors and reducing processing time by 60%. Our team can now focus on strategic initiatives.',
      results: ['60% time reduction', 'Zero manual errors', 'Strategic focus']
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      company: 'HealthTech Innovations',
      avatar: 'https://via.placeholder.com/80x80/1e293b/ffffff?text=EW',
      rating: 5,
      content: 'The AI agents are incredibly intelligent. They handle complex data analysis tasks that used to take our team days, now completed in hours. The accuracy and insights are remarkable.',
      results: ['Days → Hours', 'Complex analysis', 'Remarkable accuracy']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'VP of Engineering',
      company: 'FinTech Dynamics',
      avatar: 'https://via.placeholder.com/80x80/1e293b/ffffff?text=DK',
      rating: 5,
      content: 'NextFlow AI\'s integration capabilities are unmatched. We connected 15 different systems in record time. The platform\'s reliability and performance exceeded our expectations.',
      results: ['15 systems connected', 'Record time', 'Exceeded expectations']
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Growth Marketing Pro',
      avatar: 'https://via.placeholder.com/80x80/1e293b/ffffff?text=LT',
      rating: 5,
      content: 'Our lead scoring accuracy improved by 40% using NextFlow AI. The automated workflows handle our entire marketing funnel, from lead capture to conversion tracking.',
      results: ['40% accuracy improvement', 'End-to-end automation', 'Full funnel coverage']
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-navy-200 mb-6"
          >
            <Zap className="w-4 h-4 text-neon-blue mr-2" />
            <span>Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            See how companies across industries are transforming their operations with NextFlow AI. 
            Real results from real businesses.
          </p>
        </motion.div>

        {/* Tech Background Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden backdrop-blur-md border border-white/20">
              {/* Tech Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-teal/10 to-neon-purple/10"></div>
              
              {/* Success Metrics Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                    <BarChart3 className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                  
                  {/* Success Lines */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 160 160">
                      <defs>
                        <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00d4ff" />
                          <stop offset="100%" stopColor="#00ffd4" />
                        </linearGradient>
                      </defs>
                      {/* Success trend lines */}
                      <path
                        d="M20 120 Q40 100 60 80 Q80 60 100 40 Q120 20 140 20"
                        stroke="url(#successGradient)"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.6"
                      />
                      <path
                        d="M20 140 Q40 120 60 100 Q80 80 100 60 Q120 40 140 40"
                        stroke="url(#successGradient)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Icons */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-teal rounded-xl opacity-80 animate-float flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-neon-teal to-neon-purple rounded-xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-teal rounded-xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '3s' }}>
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  opacity: 0, 
                  x: direction === 1 ? 300 : -300 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 1 ? -300 : 300 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="glass-card p-12 text-center"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-teal rounded-full flex items-center justify-center mx-auto mb-8">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl text-navy-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Results */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {currentTestimonial.results.map((result, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 border border-neon-blue/30 rounded-full text-sm text-neon-blue font-medium"
                    >
                      {result}
                    </motion.span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-neon-blue/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white text-lg">{currentTestimonial.name}</div>
                    <div className="text-navy-300">{currentTestimonial.role}</div>
                    <div className="text-neon-blue font-medium">{currentTestimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-neon-blue to-neon-teal scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '10x', label: 'Average ROI' },
            { number: '24/7', label: 'Global Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-navy-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
