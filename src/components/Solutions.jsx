import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Zap, Workflow, Brain, MessageSquare, Shield, Cpu, BarChart3 } from 'lucide-react'
import PremiumGlassCard from './PremiumGlassCard'

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI Voice Bots',
      description: 'Intelligent conversational agents that understand context and provide human-like interactions.',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability'],
      color: 'from-neon-blue to-neon-teal'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline complex business processes with intelligent automation and decision-making.',
      features: ['Visual Workflow Builder', 'Conditional Logic', 'API Integration'],
      color: 'from-neon-teal to-neon-purple'
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Autonomous AI systems that learn, adapt, and execute tasks with minimal human intervention.',
      features: ['Machine Learning', 'Predictive Analytics', 'Continuous Improvement'],
      color: 'from-neon-purple to-neon-blue'
    },
    {
      icon: MessageSquare,
      title: 'Smart Chatbots',
      description: 'Advanced conversational AI that handles customer inquiries and support tickets.',
      features: ['Intent Recognition', 'Sentiment Analysis', 'Seamless Handoff'],
      color: 'from-neon-blue to-neon-teal'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with built-in compliance for regulated industries.',
      features: ['End-to-End Encryption', 'GDPR Compliance', 'SOC 2 Type II'],
      color: 'from-neon-teal to-neon-purple'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Process AI workloads closer to data sources for faster response times.',
      features: ['Low Latency', 'Offline Capability', 'Scalable Architecture'],
      color: 'from-neon-purple to-neon-blue'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="solutions" className="py-20 relative">
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
            <span>Our Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Comprehensive </span>
            <span className="gradient-text">AI Solutions</span>
          </h2>
          
          <p className="text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            From intelligent automation to advanced AI agents, we provide the tools you need 
            to transform your business operations and stay ahead of the competition.
          </p>
        </motion.div>

        {/* Tech Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden backdrop-blur-md border border-white/20">
              {/* Tech Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-teal/10 to-neon-purple/10"></div>
              
              {/* Central AI Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                    <Brain className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  
                  {/* Neural Network Connections */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00d4ff" />
                          <stop offset="50%" stopColor="#00ffd4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      {/* Neural network paths */}
                      <path
                        d="M100 0 Q150 30 100 60 Q50 90 100 120 Q150 150 100 180 Q50 150 100 120 Q150 90 100 60 Q50 30 100 0"
                        stroke="url(#neuralGradient)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                      />
                      <path
                        d="M0 100 Q30 50 60 100 Q90 150 120 100 Q150 50 180 100 Q150 150 120 100 Q90 50 60 100 Q30 150 0 100"
                        stroke="url(#neuralGradient)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating Solution Icons */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-teal to-neon-purple rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '3s' }}>
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              
              {/* Data Flow Lines */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-blue/60 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-teal/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-neon-purple/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-neon-blue/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
                         <motion.div
               key={solution.title}
               variants={cardVariants}
               whileHover={{ y: -10 }}
               className="card-hover group"
             >
               <PremiumGlassCard>
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                {solution.title}
              </h3>
              
              <p className="text-navy-300 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-navy-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-neon-blue to-neon-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-neon-blue hover:text-neon-teal font-medium flex items-center group"
              >
                Learn More
                <BarChart3 className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                             </motion.button>
               </PremiumGlassCard>
             </motion.div>
           ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-5"
          >
            Explore All Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions
