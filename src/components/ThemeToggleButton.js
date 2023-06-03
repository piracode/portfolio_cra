import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { useTranslation } from 'react-i18next'

const ThemeToggleButton = ({ className }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <button
      className={`nav-button secondary-button ${className}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <img src={sun} alt='Sun Icon' className='theme-icon' />
      ) : (
        <img src={moon} alt='Moon Icon' className='theme-icon' />
      )}
      {t(`toggleTheme.${isDarkMode ? 'dark' : 'light'}`)}
    </button>
  )
}

export default ThemeToggleButton
