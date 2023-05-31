import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState, createContext } from 'react'
import './scss/styles.scss'
import Logo from './components/Logo'
import Home from './pages/Home'
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
    // document.body.classList = isDarkMode ? 'light' : 'dark'
    // document.body.classList = !isDarkMode ? 'light' : 'dark'
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
