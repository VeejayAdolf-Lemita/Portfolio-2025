import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import GitHubStats from './components/GitHubStats'
import ThemeToggle from './components/ThemeToggle'
import { useProjectStore } from './store/projectStore'

function App() {
  const { fetchProjects } = useProjectStore()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  useEffect(() => {
    console.log('Theme changed to:', theme)
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
    console.log('HTML classes:', root.className)
  }, [theme])

  const toggleTheme = () => {
    console.log('toggleTheme called, current theme:', theme)
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark'
      console.log('Setting new theme:', newTheme)
      return newTheme
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative transition-all duration-500">
      <AnimatedBackground />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <main className="relative z-10">
        <About />
        <GitHubStats theme={theme} />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

