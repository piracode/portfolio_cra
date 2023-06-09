import React from 'react'
import NavigationLinks from './NavigationLinks'
import ThemeToggleButton from './ThemeToggleButton'
import LanguageSwitcher from './LanguageSwitcher'
import SearchFeature from './SearchFeature'

const Navigation = () => {
  return (
    <nav className='navigation-container sticky'>
      <NavigationLinks />
    </nav>
  )
}

export default Navigation
