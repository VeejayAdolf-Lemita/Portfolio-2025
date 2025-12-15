import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 px-6 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Veejay Adolf M. Lemita. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

