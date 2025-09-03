import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Bot, Workflow, Brain, Cpu } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-neon-teal/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-navy-200 mb-6"
          >
            <Zap className="w-4 h-4 text-neon-blue mr-2" />
            <span>Next-Generation AI Solutions</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
        >
          <span className="text-white">Transform Your Business with </span>
          <span className="gradient-text">AI-Powered</span>
          <br />
          <span className="text-white">Workflow Automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-navy-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Streamline operations, enhance customer experiences, and unlock unprecedented efficiency 
          with our cutting-edge AI solutions, voice bots, and intelligent workflow automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-5 flex items-center group"
          >
            Explore Workflows
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-10 py-5 flex items-center group"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Tech Illustration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden backdrop-blur-md border border-white/20">
            {/* Tech Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-teal/10 to-neon-purple/10"></div>
            
            {/* Central AI Brain */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                
                {/* Connecting Lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 128 128">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#00ffd4" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M64 0 Q96 32 64 64 Q32 96 64 128"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M0 64 Q32 32 64 64 Q96 96 128 64"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float"></div>
            <div className="absolute top-16 right-12 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-16 left-16 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Tech Icons */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-neon-blue" />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-neon-teal" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
              <Workflow className="w-5 h-5 text-neon-purple" />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Bot, number: '10K+', label: 'AI Agents Deployed' },
            { icon: Workflow, number: '50K+', label: 'Workflows Created' },
            { icon: Zap, number: '99.9%', label: 'Uptime Guarantee' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-navy-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
