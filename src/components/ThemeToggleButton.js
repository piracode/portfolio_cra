import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggleButton = ({ className, isMobile }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const { t } = useTranslation()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <div className={`nav-button-container ${className}`} onClick={handleToggle}>
      <div className='nav-button secondary-button'>
        {isDarkMode ? (
          <span className='navigation-link-icon'>
            <FaSun
              className={`theme-icon ${
                isDarkMode ? 'dark-icon' : 'light-icon'
              }`}
            />
          </span>
        ) : (
          <span className='navigation-link-icon'>
            <FaMoon
              className={`theme-icon ${
                isDarkMode ? 'dark-icon' : 'light-icon'
              }`}
            />
          </span>
        )}
      </div>
      <span className='navigation-link-text'>
        {t(`toggleTheme.${isDarkMode ? 'dark' : 'light'}`)}
      </span>
    </div>
  )
}

export default ThemeToggleButton
