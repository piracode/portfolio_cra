import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './scss/styles.scss'
import Logo from './components/Logo'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Header'
import ProjectDetails from './pages/ProjectDetails'
import Gallery from './pages/Gallery'

import i18n from './utilities/i18n'

export const ThemeContext = createContext()
export const AOSContext = createContext()

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    AOS.init()
  }, [])

  // Set animation completion state after 1.7 seconds
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
          <AOSContext.Provider value={AOS}>
            <main>
              {!animationComplete ? (
                <div
                  className={`introduction ${isDarkMode ? 'dark' : 'light'}`}
                >
                  <Logo />
                </div>
              ) : (
                <>
                  <Header />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route
                      path='/projects/:slug'
                      element={<ProjectDetails />}
                    />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/gallery' element={<Gallery />} />
                  </Routes>
                </>
              )}
            </main>
          </AOSContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
