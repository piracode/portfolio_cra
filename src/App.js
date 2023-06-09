import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useEffect, useState, createContext } from 'react'
import './scss/styles.scss'
import Logo from './components/Logo'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Lab from './pages/Lab'
import Header from './components/Header'

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

  function toggleTheme() {
    setIsDarkMode((d) => !d)
    console.log(isDarkMode)
  }

  useEffect(() => {
    document.body.classList = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <main>
            {!animationComplete ? (
              <div className='introduction'>
                <Logo />
              </div>
            ) : (
              <>
                <Header />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
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
