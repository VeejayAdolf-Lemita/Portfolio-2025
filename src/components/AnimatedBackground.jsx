import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate random positions for orbs
  const orbs = [
    { size: 400, x: 10, y: 20, color: 'var(--orb-1)' },
    { size: 500, x: 80, y: 60, color: 'var(--orb-2)' },
    { size: 350, x: 50, y: 80, color: 'var(--orb-3)' },
    { size: 450, x: 20, y: 50, color: 'var(--orb-4)' },
  ]

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated Gradient Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [
              mousePosition.x * 0.02,
              mousePosition.x * 0.03,
              mousePosition.x * 0.02,
            ],
            y: [
              mousePosition.y * 0.02,
              mousePosition.y * 0.03,
              mousePosition.y * 0.02,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [
              `${particle.y}%`,
              `${(particle.y + Math.random() * 30 - 15)}%`,
              `${particle.y}%`,
            ],
            x: [
              `${particle.x}%`,
              `${(particle.x + Math.random() * 30 - 15)}%`,
              `${particle.x}%`,
            ],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
        </svg>
      </div>

      {/* Animated Geometric Shapes */}
      <motion.div
        className="hidden md:block absolute top-20 right-20 w-64 h-64 border-2 border-primary/20 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 left-20 w-48 h-48 border-2 border-primary/15 rounded-full"
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-1/4 w-32 h-32 border-2 border-primary/10"
        style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
        animate={{
          rotate: [45, 135, 225, 315, 45],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="rgba(20, 184, 166, 0.05)"
            animate={{
              d: [
                'M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z',
                'M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z',
                'M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </div>

      {/* Radial Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default AnimatedBackground

