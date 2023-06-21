import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'

import './scss/styles.scss'
import Logo from './components/Logo'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Lab from './pages/Lab'
import Header from './components/Header'
import ProjectDetails from './pages/ProjectDetails'

export const ThemeContext = createContext()

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1700)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Retrieve the stored theme preference from local storage
    const storedTheme = localStorage.getItem('theme')

    // Set the initial theme based on the stored preference
    setIsDarkMode(storedTheme === 'dark')
  }, [])

  useEffect(() => {
    // Delay applying the theme until the animation is complete
    if (animationComplete) {
      // Update the theme preference in local storage whenever it changes
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')

      // Apply the theme to the body element
      document.body.classList = isDarkMode ? 'dark' : 'light'
    }
  }, [isDarkMode, animationComplete])

  function toggleTheme() {
    setIsDarkMode((d) => !d)
  }

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <main>
            {!animationComplete ? (
              <div className={`introduction ${isDarkMode ? 'dark' : 'light'}`}>
                <Logo />
              </div>
            ) : (
              <>
                <Header />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/projects/:slug' element={<ProjectDetails />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/lab' element={<Lab />} />
                </Routes>
              </>
            )}
          </main>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
