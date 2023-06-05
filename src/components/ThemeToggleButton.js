import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { ReactComponent as SunIcon } from '../assets/sun.svg'
import { ReactComponent as MoonIcon } from '../assets/moon.svg'
import { useTranslation } from 'react-i18next'

const ThemeToggleButton = ({ className, isMobile }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <button
      className={`nav-button secondary-button ${className}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <SunIcon
          className={`theme-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}
        />
      ) : (
        <MoonIcon
          className={`theme-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}
        />
      )}
      {isMobile && t(`toggleTheme.${isDarkMode ? 'dark' : 'light'}`)}
    </button>
  )
}

export default ThemeToggleButton
