import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300" />
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                className="text-primary font-medium tracking-wider uppercase text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Who I Am
              </motion.h2>
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  textShadow: [
                    '0 0 20px rgba(20, 184, 166, 0.5)',
                    '0 0 40px rgba(20, 184, 166, 0.8)',
                    '0 0 20px rgba(20, 184, 166, 0.5)',
                  ],
                }}
                transition={{
                  textShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  opacity: { delay: 0.3 },
                  y: { delay: 0.3 }
                }}
              >
                About Me
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-50 blur transition duration-500" />
              <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-8 border border-slate-300/50 dark:border-white/10 shadow-2xl shadow-blue-500/10 dark:shadow-none transition-all duration-500">
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                  Hello! I am <span className="text-primary font-semibold">VEEJAY ADOLF M. LEMITA</span>.
                  and I’m passionate about designing, learning, and building for the web.
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                  I enjoy solving design problems, creating interactive interfaces, and developing engaging web experiences and applications. I’m on a continuous journey of learning, exploring exciting new technologies, and staying up-to-date with the latest trends in tech.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://github.com/VeejayAdolf-Lemita"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white dark:text-slate-900 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
              >
                View GitHub
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors hover:border-primary/50 dark:hover:border-white/20"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-[2rem] opacity-30 blur-xl" />
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 transition-colors duration-300">
                <img
                  src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/595814961_2022910521828389_7490552598414674229_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wjWGNqSHuYoQ7kNvwF2z0hX&_nc_oc=AdmF2REZehF8YP49rW0EztTIVG76CFg5pmD_Gete6XmxHsfa4KpTD7IxXCRjGr7DV2o&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=SpKReIFPYsNAVYPrV7R_1Q&oh=00_AfnJLJ-wq6zyomjqXQMjcV7_gsODqOul_KHX9ozpvvuUsQ&oe=6946175C"
                  alt="Veejay Adolf M. Lemita"
                  className="w-full max-w-md object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-slate-900/80 dark:via-transparent dark:to-transparent transition-colors duration-300" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 right-0 md:-right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">Open to work</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

