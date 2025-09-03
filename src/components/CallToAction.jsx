import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Rocket, Star, CheckCircle } from 'lucide-react'

const CallToAction = () => {
  const benefits = [
    '14-day free trial',
    'No credit card required',
    'Full access to all features',
    '24/7 expert support',
    'Cancel anytime'
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-neon-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
          {/* Floating Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 right-8 w-16 h-16 text-neon-blue/20"
          >
            <Zap className="w-full h-full" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-8 left-8 w-12 h-12 text-neon-teal/20"
          >
            <Rocket className="w-full h-full" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Tech Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-neon-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-0 w-24 h-24 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 border border-neon-blue/30 rounded-full text-sm text-neon-blue font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              <span>Limited Time Offer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            >
              <span className="text-white">Ready to </span>
              <span className="gradient-text">Transform</span>
              <br />
              <span className="text-white">Your Business?</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-navy-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Join thousands of companies already using NextFlow AI to automate workflows, 
              enhance customer experiences, and unlock unprecedented efficiency. 
              Start your transformation today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-xl px-12 py-6 flex items-center group shadow-2xl shadow-neon-blue/25"
              >
                <Rocket className="mr-3 w-6 h-6" />
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-xl px-12 py-6 flex items-center group"
              >
                <Zap className="mr-3 w-6 h-6" />
                Schedule Demo
              </motion.button>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-navy-200"
                >
                  <CheckCircle className="w-4 h-4 text-neon-teal mr-2" />
                  {benefit}
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-navy-400 text-sm mb-4">Trusted by 10,000+ companies worldwide</p>
              <div className="flex justify-center items-center space-x-6 text-navy-500">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-neon-blue mr-1" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
