import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import { FaSun, FaMoon } from 'react-icons/fa'
import Loading from './Loading'

const ThemeToggleButton = ({ className, isMobile }) => {
  // Accessing the theme context using useContext hook
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  // Accessing translation function using useTranslation hook
  const { t, ready } = useTranslation()

  // Event handler for toggling the theme
  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <>
      {ready ? (
        <div
          className={`nav-button-container ${className}`}
          onClick={handleToggle}
          role='button'
        >
          <div className='navigation-link'>
            <div className='nav-button secondary-button'>
              {/* Conditional rendering of icon based on the current theme */}
              {isDarkMode ? (
                <span className='navigation-link-icon'>
                  <FaSun title='Light Mode' />
                </span>
              ) : (
                <span className='navigation-link-icon'>
                  <FaMoon title='Dark Mode' />
                </span>
              )}
            </div>
            {/* Displaying translated text based on the current theme */}
            <span className='navigation-link-text'>
              {t(`navigation.toggleTheme.${isDarkMode ? 'dark' : 'light'}`)}
            </span>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ThemeToggleButton
