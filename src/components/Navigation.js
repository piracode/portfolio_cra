import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { ThemeContext } from '../App'
import { Menu } from '@headlessui/react'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { useTranslation } from 'react-i18next'
import ThemeToggleButton from './ThemeToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import SearchFeature from './SearchFeature'

const Navigation = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView()
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // flip the value
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const getClassNames = (baseClassName) => {
    return `${baseClassName} ${isDarkMode ? 'dark-theme' : 'light-theme'}`
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
              <a
                href='#about'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>01.</span>
                {t('about')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a
                href='#projects'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>02.</span>
                {t('projects')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a
                href='#contact'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className='navigation-link-number'>03.</span>
                {t('contact')}
              </a>
            )}
          </Menu.Item>

          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a
                href='#lab'
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={() => {
                  handleScrollTo('lab')
                  closeMenu()
                }}
              >
                <span className='navigation-link-number'>04.</span>
                {t('lab')}
              </a>
            )}
          </Menu.Item>
          <div className='navigation-separator'>&nbsp;</div>
          <Menu.Item className={getClassNames('navigation-item')}>
            <ThemeToggleButton />
          </Menu.Item>
          <Menu.Item>
            <SearchFeature getClassNames={getClassNames} />
          </Menu.Item>
          <Menu.Item>
            <LanguageSwitcher />
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Navigation
