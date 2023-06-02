import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    setIsMenuOpen(!isMenuOpen) // flip the value from true to false or from false to true
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // const openMenu = () => {
  //   setIsMenuOpen(true)
  // }

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
          className='navigation-button hamburger-desktop'
        >
          <Hamburger alt='Menu Dropdown' className='navigation-menu-dropdown' />
        </Menu.Button>
        <Menu.Items className='navigation'>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <Link
                to='/about'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>01.</span>
                {t('about')}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <Link
                to='/projects'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>02.</span>
                {t('projects')}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <Link
                to='/contact'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>03.</span>
                {t('contact')}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <Link
                to='/lab'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>04.</span>
                {t('lab')}
              </Link>
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
                onClick={closeMenu}
              >
                {t('resume')}
              </a>
            )}
          </Menu.Item>
          <div className='navigation-separator'>&nbsp;</div>
          <Menu.Item className={getClassNames('navigation-item')}>
            <button
              className={`nav-button secondary-button`}
              onClick={() => {
                toggleTheme()
                closeMenu() //Fix this so the menu doesnt close but also doesnt get all messsed up, same for search and for the langages
              }}
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
