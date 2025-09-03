import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Download, Eye, Zap, Clock, Users, Star, ArrowRight, X, Workflow, Bot, BarChart3, Shield } from 'lucide-react'

const WorkflowGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedWorkflow, setSelectedWorkflow] = useState(null)

  const categories = [
    { id: 'all', name: 'All Workflows', count: 24 },
    { id: 'automation', name: 'Automation', count: 8 },
    { id: 'ai', name: 'AI & ML', count: 6 },
    { id: 'integration', name: 'Integration', count: 5 },
    { id: 'analytics', name: 'Analytics', count: 5 }
  ]

  const workflows = [
    {
      id: 1,
      title: 'Customer Support Automation',
      description: 'Automated ticket routing, response generation, and escalation based on priority and sentiment.',
      category: 'automation',
      complexity: 'Medium',
      timeToDeploy: '15 min',
      users: '2.4k',
      rating: 4.8,
      tags: ['Customer Service', 'Automation', 'AI'],
      preview: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
      deployed: false
    },
    {
      id: 2,
      title: 'AI-Powered Lead Scoring',
      description: 'Intelligent lead qualification using machine learning and behavioral analysis.',
      category: 'ai',
      complexity: 'Advanced',
      timeToDeploy: '30 min',
      users: '1.8k',
      rating: 4.9,
      tags: ['Lead Generation', 'AI', 'Analytics'],
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      deployed: false
    },
    {
      id: 3,
      title: 'E-commerce Order Processing',
      description: 'End-to-end order management with inventory updates and shipping notifications.',
      category: 'automation',
      complexity: 'Medium',
      timeToDeploy: '20 min',
      users: '3.1k',
      rating: 4.7,
      tags: ['E-commerce', 'Automation', 'Integration'],
      preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      deployed: true
    },
    {
      id: 4,
      title: 'Data Pipeline Orchestration',
      description: 'Automated data collection, transformation, and loading across multiple sources.',
      category: 'integration',
      complexity: 'Advanced',
      timeToDeploy: '45 min',
      users: '1.2k',
      rating: 4.6,
      tags: ['Data Engineering', 'ETL', 'Integration'],
      preview: 'https://images.unsplash.com/photo-1521791136064-7986c292e6ae?w=400&h=250&fit=crop&crop=center',
      deployed: false
    },
    {
      id: 5,
      title: 'Social Media Monitoring',
      description: 'Real-time brand monitoring and sentiment analysis across social platforms.',
      category: 'ai',
      complexity: 'Medium',
      timeToDeploy: '25 min',
      users: '2.7k',
      rating: 4.8,
      tags: ['Social Media', 'AI', 'Monitoring'],
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
      deployed: false
    },
    {
      id: 6,
      title: 'HR Onboarding Automation',
      description: 'Streamlined employee onboarding with document collection and system access provisioning.',
      category: 'automation',
      complexity: 'Simple',
      timeToDeploy: '10 min',
      users: '1.9k',
      rating: 4.5,
      tags: ['HR', 'Automation', 'Onboarding'],
      preview: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
      deployed: true
    }
  ]

  const filteredWorkflows = selectedCategory === 'all' 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory)

  return (
    <section id="workflows" className="py-20 relative">
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
            <span>Ready-to-Use Workflows</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Workflow </span>
            <span className="gradient-text">Gallery</span>
          </h2>
          
          <p className="text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            Deploy pre-built, battle-tested workflows in minutes. Each workflow is designed by experts 
            and optimized for performance and reliability.
          </p>
        </motion.div>

        {/* Tech Workflow Illustration */}
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
              
              {/* Central Workflow Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                    <Workflow className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  
                  {/* Workflow Connection Lines */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00d4ff" />
                          <stop offset="50%" stopColor="#00ffd4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      {/* Workflow paths */}
                      <path
                        d="M100 0 Q150 50 100 100 Q50 150 100 200"
                        stroke="url(#workflowGradient)"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.5"
                      />
                      <path
                        d="M0 100 Q50 50 100 100 Q150 150 200 100"
                        stroke="url(#workflowGradient)"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.4"
                      />
                      <path
                        d="M50 0 Q100 50 150 100 Q100 150 50 200"
                        stroke="url(#workflowGradient)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating Workflow Nodes */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-teal to-neon-purple rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '3s' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              
              {/* Data Flow Particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue/60 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-teal/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-neon-purple/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-neon-blue/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-teal text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-navy-200 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Workflows Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWorkflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden card-hover group"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={workflow.preview} 
                  alt={workflow.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                
                {/* Preview Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedWorkflow(workflow)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Eye className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {workflow.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-navy-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {workflow.title}
                </h3>
                
                <p className="text-navy-300 text-sm mb-4 leading-relaxed">
                  {workflow.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-navy-400 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {workflow.timeToDeploy}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {workflow.users}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {workflow.rating}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary py-3 text-sm flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {workflow.deployed ? 'Redeploy' : 'Deploy'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
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
            className="btn-secondary text-lg px-10 py-5 flex items-center mx-auto group"
          >
            Browse All Workflows
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Workflow Preview Modal */}
      <AnimatePresence>
        {selectedWorkflow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWorkflow(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white">{selectedWorkflow.title}</h3>
                  <button
                    onClick={() => setSelectedWorkflow(null)}
                    className="text-navy-300 hover:text-white p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <img 
                  src={selectedWorkflow.preview} 
                  alt={selectedWorkflow.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <p className="text-navy-300 text-lg mb-6">{selectedWorkflow.description}</p>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Deploy Workflow
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Download Template
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default WorkflowGallery
