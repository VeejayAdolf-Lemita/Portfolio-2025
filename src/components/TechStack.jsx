import { motion } from 'framer-motion'
import { Code2, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const TechCard = ({ title, items, delay }) => (
  <motion.div
    variants={cardVariants}
    className="group relative"
  >
    {/* Animated Gradient Border */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-3xl opacity-30 group-hover:opacity-100 blur transition duration-500" />

    {/* Card Content */}
    <div className="relative h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[22px] p-8 border border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10 flex items-center gap-3">
        <span className="w-2 h-8 bg-gradient-to-b from-primary to-cyan-400 rounded-full" />
        {title}
      </h3>

      <div className="flex flex-wrap gap-3 relative z-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="relative group/item"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover/item:opacity-70 blur transition duration-300`} />
            <div className="relative flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-white/5 hover:border-primary/50 dark:hover:border-white/20 transition-colors">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-slate-600 dark:text-gray-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                {item.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
)

const TechStack = () => {
  const languages = [
    { name: 'HTML', icon: '📄', color: 'from-orange-400 to-red-500' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-indigo-500' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-300 to-yellow-500' }
  ]

  const frontend = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-300 to-blue-400' },
    { name: 'Tailwind CSS', icon: '💨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Material-UI', icon: '🎨', color: 'from-blue-400 to-cyan-500' },
    { name: 'Framer Motion', icon: '✨', color: 'from-pink-400 to-rose-500' },
    { name: 'Bootstrap', icon: '🎯', color: 'from-purple-500 to-pink-500' }
  ]

  const backend = [
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-600' },
    { name: 'Express', icon: '🚀', color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-700' }
  ]

  const tools = [
    { name: 'Vite', icon: '⚡', color: 'from-purple-400 to-indigo-500' },
    { name: 'Redux', icon: '🔄', color: 'from-purple-500 to-indigo-600' },
    { name: 'Zustand', icon: '🐻', color: 'from-orange-300 to-amber-500' },
    { name: 'jQuery', icon: '📚', color: 'from-blue-600 to-blue-800' }
  ]

  return (
    <section id="tech-stack" className="py-32 px-6 relative bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-primary mb-6"
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
            Tech Stack
          </motion.h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <TechCard title="Languages" items={languages} delay={0} />
          <TechCard title="Frontend Ecosystem" items={frontend} delay={0.1} />
          <TechCard title="Backend & Database" items={backend} delay={0.2} />
          <TechCard title="Tools & State" items={tools} delay={0.3} />
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
