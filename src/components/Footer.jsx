import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'AI Solutions', href: '#solutions' },
        { name: 'Workflow Gallery', href: '#workflows' },
        { name: 'Live Demo', href: '#demo' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' },
        { name: 'Partners', href: '#partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'Community', href: '#community' },
        { name: 'Support', href: '#support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' },
        { name: 'Security', href: '#security' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'hello@nextflow.ai', href: 'mailto:hello@nextflow.ai' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ]

  return (
    <footer className="bg-navy-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-48 h-48 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-teal rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold font-display gradient-text">NextFlow AI</span>
              </div>
              
              <p className="text-navy-300 mb-6 leading-relaxed max-w-md">
                Transform your business with cutting-edge AI solutions, intelligent automation, 
                and workflow optimization. Built for the future.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-navy-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-navy-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center space-x-3 text-navy-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <contact.icon className="w-5 h-5" />
                </div>
                <span className="text-sm">{contact.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-navy-400 text-sm mb-4 md:mb-0">
            © 2024 NextFlow AI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-navy-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-neon-blue/25 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer
