import React from 'react'
import NavigationLinks from './NavigationLinks'
import ThemeToggleButton from './ThemeToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import SearchFeature from './SearchFeature'

const DesktopNavigation = ({ isMobile }) => {
  return (
    <nav
      className={`navigation-container ${
        isMobile ? 'navigation-mobile' : 'navigation-desktop'
      }`}
    >
      <div className='navigation-link-box'>
        <NavigationLinks />
      </div>
      <div className='navigation-btn-container'>
        <ThemeToggleButton
          isMobile={isMobile}
          className='theme-toggle-desktop'
        />
        {/* <SearchFeature isMobile={isMobile} getClassNames={getClassNames} /> */}
      </div>
      <LanguageSwitcher isMobile={isMobile} />
    </nav>
  )
}

export default DesktopNavigation
