import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { Menu } from '@headlessui/react'

import { ReactComponent as Hamburger } from '../assets/hamburger.svg'

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  const openResumePDF = () => {
    window.open('/path/to/resume.pdf', '_blank')
  }

  // const handleToggleTheme = (event) => {
  //   event.stopPropagation() // Prevent event propagation

  //   console.log('Propagation stopped:', event.isPropagationStopped())

  //   toggleTheme()
  // }

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
                About
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
                Projects
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
                Contact
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              <a className={`nav-link ${active ? 'active' : ''}`} href='/lab'>
                <span className='navigation-link-number'>04.</span>
                Lab
              </a>
            )}
          </Menu.Item>
          <Menu.Item className='navigation-item'>
            {({ active }) => (
              // <button
              //   className={`nav-button ${active ? 'active' : ''}`}
              //   onClick={openResumePDF}
              // >
              //   Resume
              // </button>
              <button
                className={`nav-button resume-button ${
                  isDarkMode ? 'dark-theme' : 'light-theme'
                } ${active ? 'active' : ''}`}
                onClick={openResumePDF}
              >
                Resume
              </button>
            )}
          </Menu.Item>
          <div className='navigation-separator'>&nbsp;</div>
          <Menu.Item className='navigation-item'>
            {/* <button className='nav-button' onClick={handleToggleTheme}> */}
            <button className='nav-button' onClick={toggleTheme}>
              Toggle Theme
            </button>
          </Menu.Item>
          {/* <Menu.Item disabled> */}
          {/* <button className='nav-button disabled'>
              Type programming language (could it be type prog. lang.? Do I need to add a tooltip?)
            </button> */}
          {/* </Menu.Item> */}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Navigation
