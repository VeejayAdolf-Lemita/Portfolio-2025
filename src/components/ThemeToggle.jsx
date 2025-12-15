import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeToggle = ({ theme, toggleTheme }) => {
    const handleClick = () => {
        console.log('Theme toggle clicked! Current theme:', theme)
        toggleTheme()
    }

    return (
        <motion.button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-[100] p-3 rounded-full bg-slate-200 dark:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    )
}

export default ThemeToggle
