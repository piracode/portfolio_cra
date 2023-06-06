import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import NavigationLinks from './NavigationLinks'
import ThemeToggleButton from './ThemeToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import SearchFeature from './SearchFeature'

const MobileNavigation = ({ getClassNames, isMobile }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

  // const closeMenu = () => {
  //   setIsMenuOpen(false)
  // }

  return (
    // <div className={`navigation-container ${isMenuOpen ? 'opened' : ''}`}>
    <div className={'navigation-container'}>
      {/* <Menu> */}
      <Menu>
        {/* expose the close render prop */}
        {({ close }) => (
          <>
            <Menu.Button
            // type='button'
            // onClick={toggleMenu}
            // className='navigation-button hamburger-desktop'
            >
              <Hamburger
                alt='Menu Dropdown'
                className='navigation-menu-dropdown'
              />
            </Menu.Button>
            <Menu.Items className='navigation'>
              {/* pass the close render prop down to Navigation Links */}
              <NavigationLinks closeMenu={close} />
              <div className='navigation-separator'>&nbsp;</div>
              <Menu.Item className={getClassNames('navigation-item')}>
                <ThemeToggleButton isMobile={isMobile} />
              </Menu.Item>
              <Menu.Item>
                <SearchFeature
                  isMobile={isMobile}
                  getClassNames={getClassNames}
                />
              </Menu.Item>
              <Menu.Item>
                <LanguageSwitcher isMobile={isMobile} />
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  )
}

export default MobileNavigation
