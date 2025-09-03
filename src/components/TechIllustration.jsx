import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Cpu, Bot, Workflow, Zap, Shield, BarChart3, TrendingUp, CheckCircle, MessageSquare, Star } from 'lucide-react'

const TechIllustration = ({ 
  type = 'default', 
  height = 'h-64 md:h-80', 
  className = '',
  showParticles = true,
  showConnections = true,
  showFloatingIcons = true
}) => {
  const getIllustrationConfig = (type) => {
    switch (type) {
      case 'ai-brain':
        return {
          icon: Brain,
          title: 'AI Brain',
          connections: [
            { d: 'M100 0 Q150 30 100 60 Q50 90 100 120 Q150 150 100 180 Q50 150 100 120 Q150 90 100 60 Q50 30 100 0', opacity: 0.4 },
            { d: 'M0 100 Q30 50 60 100 Q90 150 120 100 Q150 50 180 100 Q150 150 120 100 Q90 50 60 100 Q30 150 0 100', opacity: 0.3 }
          ],
          floatingIcons: [
            { icon: Bot, position: 'top-8 left-8', color: 'from-neon-blue to-neon-teal', delay: 0 },
            { icon: Workflow, position: 'top-8 right-8', color: 'from-neon-teal to-neon-purple', delay: 1 },
            { icon: Cpu, position: 'bottom-8 left-8', color: 'from-neon-purple to-neon-blue', delay: 2 },
            { icon: MessageSquare, position: 'bottom-8 right-8', color: 'from-neon-blue to-neon-teal', delay: 3 }
          ]
        }
      case 'workflow':
        return {
          icon: Workflow,
          title: 'Workflow',
          connections: [
            { d: 'M100 0 Q150 50 100 100 Q50 150 100 200', opacity: 0.5 },
            { d: 'M0 100 Q50 50 100 100 Q150 150 200 100', opacity: 0.4 },
            { d: 'M50 0 Q100 50 150 100 Q100 150 50 200', opacity: 0.3 }
          ],
          floatingIcons: [
            { icon: Zap, position: 'top-8 left-8', color: 'from-neon-blue to-neon-teal', delay: 0 },
            { icon: Bot, position: 'top-8 right-8', color: 'from-neon-teal to-neon-purple', delay: 1 },
            { icon: BarChart3, position: 'bottom-8 left-8', color: 'from-neon-purple to-neon-blue', delay: 2 },
            { icon: Shield, position: 'bottom-8 right-8', color: 'from-neon-blue to-neon-teal', delay: 3 }
          ]
        }
      case 'success-metrics':
        return {
          icon: BarChart3,
          title: 'Success Metrics',
          connections: [
            { d: 'M20 120 Q40 100 60 80 Q80 60 100 40 Q120 20 140 20', opacity: 0.6 },
            { d: 'M20 140 Q40 120 60 100 Q80 80 100 60 Q120 40 140 40', opacity: 0.4 }
          ],
          floatingIcons: [
            { icon: Star, position: 'top-6 left-6', color: 'from-neon-blue to-neon-teal', delay: 0 },
            { icon: Zap, position: 'top-6 right-6', color: 'from-neon-teal to-neon-purple', delay: 1 },
            { icon: TrendingUp, position: 'bottom-6 left-6', color: 'from-neon-purple to-neon-blue', delay: 2 },
            { icon: CheckCircle, position: 'bottom-6 right-6', color: 'from-neon-blue to-neon-teal', delay: 3 }
          ]
        }
      default:
        return {
          icon: Cpu,
          title: 'Tech Hub',
          connections: [
            { d: 'M100 0 Q150 50 100 100 Q50 150 100 200', opacity: 0.4 },
            { d: 'M0 100 Q50 50 100 100 Q150 150 200 100', opacity: 0.3 }
          ],
          floatingIcons: [
            { icon: Bot, position: 'top-8 left-8', color: 'from-neon-blue to-neon-teal', delay: 0 },
            { icon: Workflow, position: 'top-8 right-8', color: 'from-neon-teal to-neon-purple', delay: 1 },
            { icon: Brain, position: 'bottom-8 left-8', color: 'from-neon-purple to-neon-blue', delay: 2 },
            { icon: Zap, position: 'bottom-8 right-8', color: 'from-neon-blue to-neon-teal', delay: 3 }
          ]
        }
    }
  }

  const config = getIllustrationConfig(type)
  const IconComponent = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`relative ${height} rounded-3xl overflow-hidden backdrop-blur-md border border-white/20`}>
          {/* Tech Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-teal/10 to-neon-purple/10"></div>
          
          {/* Central Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              
              {/* Connection Lines */}
              {showConnections && (
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id={`${type}Gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="50%" stopColor="#00ffd4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    {config.connections.map((connection, index) => (
                      <path
                        key={index}
                        d={connection.d}
                        stroke={`url(#${type}Gradient)`}
                        strokeWidth="3"
                        fill="none"
                        opacity={connection.opacity}
                      />
                    ))}
                  </svg>
                </div>
              )}
            </div>
          </div>
          
          {/* Floating Icons */}
          {showFloatingIcons && config.floatingIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl opacity-80 animate-float flex items-center justify-center`}
              style={{ animationDelay: `${item.delay}s` }}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
          ))}
          
          {/* Data Flow Particles */}
          {showParticles && (
            <>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue/60 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-teal/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-neon-purple/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-neon-blue/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default TechIllustration
