import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggleButton = ({ className, isMobile }) => {
  // Accessing the theme context using useContext hook
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  // Accessing translation function using useTranslation hook
  const { t } = useTranslation()

  // Event handler for toggling the theme
  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <div className={`nav-button-container ${className}`} onClick={handleToggle}>
      <div className='navigation-link'>
        <div className='nav-button secondary-button'>
          {/* Conditional rendering of icon based on the current theme */}
          {isDarkMode ? (
            <span className='navigation-link-icon'>
              <FaSun />
            </span>
          ) : (
            <span className='navigation-link-icon'>
              <FaMoon />
            </span>
          )}
        </div>
        {/* Displaying translated text based on the current theme */}
        <span className='navigation-link-text'>
          {t(`toggleTheme.${isDarkMode ? 'dark' : 'light'}`)}
        </span>
      </div>
    </div>
  )
}

export default ThemeToggleButton
