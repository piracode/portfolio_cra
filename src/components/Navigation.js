import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { Menu } from '@headlessui/react'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { useTranslation } from 'react-i18next'
import search from '../assets/magnifier.svg'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import resume from '../assets/resume.pdf'
import i18n from '../utilities/i18n'

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const [showTooltip, setShowTooltip] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  //handle language switching
  const switchLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  // const handleToggleTheme = (event) => {
  //   event.stopPropagation() // Prevent event propagation

  //   console.log('Propagation stopped:', event.isPropagationStopped())

  //   toggleTheme()
  // }

  const getClassNames = (baseClassName) => {
    return `${baseClassName} ${isDarkMode ? 'dark-theme' : 'light-theme'}`
  }

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip)
  }

  return (
    <div className={`navigation-container ${isMenuOpen ? 'opened' : ''}`}>
      <Menu>
        <Menu.Button
          type='button'
          onClick={toggleMenu}
          className='navigation-button'
        >
          <Hamburger alt='Menu Dropdown' className='navigation-menu-dropdown' />
        </Menu.Button>
        <Menu.Items className='navigation'>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a className={`nav-link ${active ? 'active' : ''}`} href='/about'>
                <span className='navigation-link-number'>01.</span>
                {/* Use the t function to access translations */}
                {t('about')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a
                className={`nav-link ${active ? 'active' : ''}`}
                href='/projects'
              >
                <span className='navigation-link-number'>02.</span>
                {t('projects')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a
                className={`nav-link ${active ? 'active' : ''}`}
                href='/contact'
              >
                <span className='navigation-link-number'>03.</span>
                {t('contact')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a className={`nav-link ${active ? 'active' : ''}`} href='/lab'>
                <span className='navigation-link-number'>04.</span>
                {t('lab')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item className={getClassNames('navigation-item')}>
            {({ active }) => (
              <a
                className={`nav-button primary-button resume-button ${
                  active ? 'active' : ''
                }`}
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
              >
                {t('resume')}
              </a>
            )}
          </Menu.Item>
          <div className='navigation-separator'>&nbsp;</div>
          <Menu.Item className={getClassNames('navigation-item')}>
            <button
              className={`nav-button secondary-button`}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <img src={sun} alt='Sun Icon' className='theme-icon' />
              ) : (
                <img src={moon} alt='Moon Icon' className='theme-icon' />
              )}
              {t(`toggleTheme.${isDarkMode ? 'dark' : 'light'}`)}
            </button>
          </Menu.Item>
          <Menu.Item>
            <div className={getClassNames('secondary-button')}>
              <img src={search} alt='Search Icon' className='search-icon' />
              <div className='input-container'>
                <input
                  className={getClassNames('input')}
                  type='text'
                  placeholder={t('search')}
                  onClick={toggleTooltip}
                />
              </div>
              {showTooltip && (
                <span className='tooltip'>{t('searchTooltip')}</span>
              )}
            </div>
          </Menu.Item>
          <Menu.Item>
            <div>
              <button onClick={() => switchLanguage('en')}>English</button>
              <button onClick={() => switchLanguage('fr')}>French</button>
              <button onClick={() => switchLanguage('es')}>Spanish</button>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Navigation
