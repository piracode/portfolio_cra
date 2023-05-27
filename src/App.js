import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './scss/styles.scss'
import Logo from './components/Logo'
import Home from './pages/Home'

function App() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1700)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <main>
          {!animationComplete ? (
            <div className='introduction'>
              <Logo />
            </div>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              {/* Other routes here */}
            </Routes>
          )}
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
