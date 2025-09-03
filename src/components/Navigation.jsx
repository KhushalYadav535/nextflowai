import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bot } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Workflows', href: '#workflows' },
    { name: 'Demo', href: '#demo' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 relative"
          >
            {/* Tech Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-teal/10 rounded-xl blur-xl"></div>
            <div className="relative flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-teal rounded-lg flex items-center justify-center animate-pulse-glow">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display gradient-text">NextFlow AI</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-navy-200 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-200 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className="block text-navy-200 hover:text-white text-lg font-medium py-2"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full mt-4"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
