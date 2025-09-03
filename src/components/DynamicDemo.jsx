import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, Zap, Brain, MessageSquare, Play, Pause, RotateCcw } from 'lucide-react'

const DynamicDemo = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [demoStep, setDemoStep] = useState(0)

  const demoSteps = [
    {
      title: 'AI Agent Initialization',
      description: 'Starting up intelligent workflow automation agent...',
      icon: Bot,
      color: 'from-neon-blue to-neon-teal'
    },
    {
      title: 'Data Processing',
      description: 'Analyzing input parameters and optimizing workflow...',
      icon: Brain,
      color: 'from-neon-teal to-neon-purple'
    },
    {
      title: 'Decision Making',
      description: 'Applying AI logic to determine optimal execution path...',
      icon: Zap,
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Execution',
      description: 'Running automated workflow with real-time monitoring...',
      icon: MessageSquare,
      color: 'from-neon-blue to-neon-teal'
    }
  ]

  const sampleResponses = [
    "I've analyzed your request and identified the optimal workflow path. Let me execute this for you.",
    "Processing complete! I've automated 3 manual tasks and saved approximately 15 minutes of work.",
    "The workflow has been successfully deployed. You can monitor its progress in real-time.",
    "I've detected an optimization opportunity. Would you like me to implement the suggested improvements?"
  ]

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setDemoStep((prev) => (prev + 1) % demoSteps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isRunning])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const resetDemo = () => {
    setMessages([])
    setDemoStep(0)
    setIsRunning(false)
  }

  return (
    <section id="demo" className="py-20 relative">
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
            <span>Live Demo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Experience </span>
            <span className="gradient-text">AI in Action</span>
          </h2>
          
          <p className="text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            Interact with our AI agent in real-time. See how intelligent automation can transform 
            your workflow and boost productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 h-[600px] flex flex-col relative overflow-hidden"
          >
            {/* Tech Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-teal/5 to-neon-purple/5 rounded-2xl"></div>
            
            {/* Floating Tech Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-neon-blue/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-teal/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-4 w-1 h-1 bg-neon-purple/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Demo Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsRunning(!isRunning)}
                  className={`p-2 rounded-lg transition-colors ${
                    isRunning 
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetDemo}
                  className="p-2 rounded-lg bg-white/10 text-navy-300 hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-navy-400 py-8">
                  <Bot className="w-12 h-12 mx-auto mb-4 text-navy-500" />
                  <p>Start a conversation with our AI agent</p>
                </div>
              )}
              
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-neon-blue to-neon-teal text-white'
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask the AI agent anything..."
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-navy-400 focus:outline-none focus:border-neon-blue transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-3 bg-gradient-to-r from-neon-blue to-neon-teal text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Demo Status */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Demo Status</h3>
              
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      demoStep === index 
                        ? 'bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 border border-neon-blue/30' 
                        : 'bg-white/5'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center ${
                      demoStep === index ? 'animate-pulse' : ''
                    }`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-navy-300">{step.description}</p>
                    </div>
                    {demoStep === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-neon-blue rounded-full"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Demo Info */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">What You Can Try</h3>
              <ul className="space-y-3 text-navy-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ask about workflow automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span>Request AI agent assistance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span>Explore integration options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get workflow recommendations</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DynamicDemo
