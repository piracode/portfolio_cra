import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../App'
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize)

    // Call the function initially to set the initial value of isMobile
    handleResize()

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // const getClassNames = (baseClassName) => {
  //   return `${baseClassName} ${isDarkMode ? 'dark-theme' : 'light-theme'}`
  // }

  return isMobile ? (
    // <MobileNavigation getClassNames={getClassNames} isMobile={isMobile} />
    <MobileNavigation isMobile={isMobile} />
  ) : (
    // <DesktopNavigation getClassNames={getClassNames} isMobile={isMobile} />
    <DesktopNavigation isMobile={isMobile} />
  )
}

export default Navigation
