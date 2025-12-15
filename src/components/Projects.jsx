import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useProjectStore } from '../store/projectStore'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Project Card Component with Parallax
const ProjectCard = ({ project, index, scrollYProgress, isHovered, onHoverStart, onHoverEnd, itemVariants }) => {
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -15 * (index + 1)]
  )
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.02, 1]
  )

  return (
    <motion.div
      variants={itemVariants}
      style={{
        y: parallaxY,
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{
        y: -10,
        scale: 1.02,
        zIndex: 50,
      }}
      className="relative group"
    >
      {/* Flash Glow Effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary via-teal-400 to-primary rounded-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none blur-lg"
      />

      {/* Card */}
      <div className="relative bg-white/90 dark:bg-slate-800/70 backdrop-blur-md rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 group-hover:border-primary/80 transition-all duration-500 h-full flex flex-col">
        {/* Image Container with Parallax */}
        <motion.div
          className="relative overflow-hidden h-48"
          style={{ scale: imageScale }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 2 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              filter: isHovered ? 'brightness(1.2) saturate(1.2)' : 'brightness(1) saturate(1)',
            }}
          />

          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-900 dark:via-transparent dark:to-transparent pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

          {/* Featured Badge with Flash */}
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="bg-gradient-to-r from-primary to-teal-400 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg shadow-primary/50">
                ⭐ Featured
              </div>
            </motion.div>
          )}

          {/* Flash Effect on Hover */}

        </motion.div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <motion.h3
            className="text-2xl font-bold text-primary mb-2 line-clamp-1"
            title={project.title}
            animate={{
              textShadow: isHovered
                ? [
                  '0 0 10px rgba(20, 184, 166, 0.5)',
                  '0 0 20px rgba(20, 184, 166, 0.8)',
                  '0 0 10px rgba(20, 184, 166, 0.5)',
                ]
                : 'none',
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <div className="flex items-center gap-3">
              {project.title}
              {project.year && (
                <span className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  {project.year}
                </span>
              )}
            </div>
          </motion.h3>
          <p className="text-slate-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">{project.description}</p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-xs text-slate-600 dark:text-gray-300 rounded-full border border-slate-200 dark:border-slate-600/50"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(20, 184, 166, 0.2)',
                  borderColor: 'rgba(20, 184, 166, 0.5)',
                  color: '#14b8a6',
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4 mt-auto relative z-20">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  x: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-slate-500 dark:text-gray-400 hover:text-primary transition-colors group/link"
              >
                <motion.div
                  animate={{
                    rotate: isHovered ? 360 : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  <ExternalLink size={20} />
                </motion.div>
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
        />
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { projects, loading } = useProjectStore()
  const sectionRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Parallax transforms - reduced intensity for smoother scrolling
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -25])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const smoothY1 = useSpring(y1, { stiffness: 50, damping: 25 })
  const smoothY2 = useSpring(y2, { stiffness: 50, damping: 25 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="mt-4 text-slate-500 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 relative bg-gray-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: smoothY1, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Flash Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              y: [0, -100],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title with Parallax */}
        <motion.div
          style={{ y: smoothY2 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-64 h-64 text-primary/20" />
          </motion.div>
          <motion.h2
            className="text-6xl md:text-7xl font-bold text-primary mb-4 relative z-10"
            animate={{
              textShadow: [
                '0 0 20px rgba(20, 184, 166, 0.5)',
                '0 0 40px rgba(20, 184, 166, 0.8)',
                '0 0 20px rgba(20, 184, 166, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            My Projects
          </motion.h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg relative z-10">A showcase of my recent work and creations</p>
        </motion.div>

        {/* Projects Grid with Parallax */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
              isHovered={hoveredIndex === index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

