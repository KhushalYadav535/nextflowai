import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Scale, Settings, Shield, Zap as Lightning, Globe, BarChart3, Users, Cpu, Bot, Workflow } from 'lucide-react'
import InteractiveChart from './InteractiveChart'

const Features = () => {
  const features = [
    {
      icon: Scale,
      title: 'Enterprise Scalability',
      description: 'Built to handle millions of workflows and scale seamlessly as your business grows.',
      benefits: ['Auto-scaling infrastructure', 'Load balancing', 'Global CDN', '99.9% uptime SLA'],
      color: 'from-neon-blue to-neon-teal'
    },
    {
      icon: Settings,
      title: 'Customization & Flexibility',
      description: 'Tailor every aspect of your AI solutions to match your unique business requirements.',
      benefits: ['Custom AI models', 'Branded interfaces', 'Workflow templates', 'API customization'],
      color: 'from-neon-teal to-neon-purple'
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Advanced AI algorithms that learn from your processes and continuously optimize performance.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process optimization', 'Smart routing'],
      color: 'from-neon-purple to-neon-blue'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance certifications for regulated industries.',
      benefits: ['End-to-end encryption', 'SOC 2 Type II', 'GDPR compliance', 'Role-based access'],
      color: 'from-neon-blue to-neon-teal'
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Connect with 500+ services and platforms through our extensive integration library.',
      benefits: ['REST APIs', 'Webhook support', 'Custom connectors', 'Real-time sync'],
      color: 'from-neon-teal to-neon-purple'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights and reporting to measure ROI and optimize performance.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Performance metrics', 'Predictive insights'],
      color: 'from-neon-purple to-neon-blue'
    }
  ]

  const stats = [
    { number: '500+', label: 'Integrations', icon: Globe },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '50M+', label: 'Workflows Executed', icon: Zap },
    { number: '24/7', label: 'Support', icon: Users }
  ]

  const chartData = [
    { label: 'Q1', value: 85, color: '#00d4ff' },
    { label: 'Q2', value: 92, color: '#00ffd4' },
    { label: 'Q3', value: 88, color: '#8b5cf6' },
    { label: 'Q4', value: 96, color: '#00d4ff' }
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
    <section id="features" className="py-20 relative">
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
            <Lightning className="w-4 h-4 text-neon-blue mr-2" />
            <span>Why Choose NextFlow AI</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Built for the </span>
            <span className="gradient-text">Future</span>
          </h2>
          
          <p className="text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge AI technology with enterprise-grade infrastructure 
            to deliver solutions that scale with your business and evolve with technology.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
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

         {/* Interactive Chart */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
         >
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
             <p className="text-navy-300">Real-time insights into our platform's performance</p>
           </div>
           <div className="max-w-4xl mx-auto">
             <InteractiveChart data={chartData} type="line" height={300} />
           </div>
         </motion.div>

         {/* Tech Architecture Illustration */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
         >
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-white mb-4">Technology Architecture</h3>
             <p className="text-navy-300">Built on cutting-edge AI and cloud infrastructure</p>
           </div>
           <div className="max-w-6xl mx-auto">
             <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden backdrop-blur-md border border-white/20">
               {/* Tech Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-teal/10 to-neon-purple/10"></div>
               
               {/* Central Hub */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                   <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                     <Cpu className="w-10 h-10 md:w-14 md:h-14 text-white" />
                   </div>
                   
                   {/* Connection Lines */}
                   <div className="absolute top-0 left-0 w-full h-full">
                     <svg className="w-full h-full" viewBox="0 0 200 200">
                       <defs>
                         <linearGradient id="archGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                           <stop offset="0%" stopColor="#00d4ff" />
                           <stop offset="100%" stopColor="#00ffd4" />
                         </linearGradient>
                       </defs>
                       <path
                         d="M100 0 Q150 50 100 100 Q50 150 100 200"
                         stroke="url(#archGradient)"
                         strokeWidth="3"
                         fill="none"
                         opacity="0.4"
                       />
                       <path
                         d="M0 100 Q50 50 100 100 Q150 150 200 100"
                         stroke="url(#archGradient)"
                         strokeWidth="3"
                         fill="none"
                         opacity="0.3"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
               
               {/* Tech Nodes */}
               <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float flex items-center justify-center">
                 <Bot className="w-6 h-6 text-white" />
               </div>
               <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-teal to-neon-purple rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                 <Zap className="w-6 h-6 text-white" />
               </div>
               <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                 <Workflow className="w-6 h-6 text-white" />
               </div>
               <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-teal rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '3s' }}>
                 <Shield className="w-6 h-6 text-white" />
               </div>
               
               {/* Floating Particles */}
               <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue/60 rounded-full animate-pulse"></div>
               <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-teal/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
               <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-neon-purple/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
             </div>
           </div>
         </motion.div>

         {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-8 card-hover group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-navy-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-navy-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-neon-blue to-neon-teal rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-navy-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using NextFlow AI to automate their workflows 
              and unlock unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-5"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
