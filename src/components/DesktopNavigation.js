// const DesktopNavigation = () => {
//   return 'desktop nav'
// }

// export default DesktopNavigation
import React from 'react'
import NavigationLinks from './NavigationLinks'
import ThemeToggleButton from './ThemeToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import SearchFeature from './SearchFeature'

const DesktopNavigation = ({ getClassNames, isMobile }) => {
  return (
    // <div className='navigation-container navigation-desktop'>
    <nav
      className={`navigation-container ${
        isMobile ? 'navigation-mobile' : 'navigation-desktop'
      }`}
    >
      <div className='navigation-link-box'>
        <NavigationLinks />
        <ThemeToggleButton className={getClassNames('navigation-item')} />
        <SearchFeature getClassNames={getClassNames} />
      </div>
      <LanguageSwitcher />
    </nav>
  )
}

export default DesktopNavigation
