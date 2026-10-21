import { useEffect, useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ScrollBackground from './components/ScrollBackground.jsx'
import Skills from './components/Skills.jsx'
import './App.css'

const THEME_STORAGE_KEY = 'mohammad-riskhan-portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  } catch (error) {
    console.error('Unable to read the saved theme preference.', error)
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.style.colorScheme = theme

    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', theme === 'dark' ? '#101411' : '#f7f8f3')
    }

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch (error) {
      console.error('Unable to save the theme preference.', error)
    }
  }, [theme])

  return (
    <>
      <ScrollBackground />
      <div className="site-shell" data-theme={theme}>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
