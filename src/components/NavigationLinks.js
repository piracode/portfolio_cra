import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'

const NavigationLinks = ({ closeMenu }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  //   const handleScrollTo = (id) => {
  //     const element = document.getElementById(id)
  //     if (element) {
  //       element.scrollIntoView()
  //     }
  //   }

  const getClassNames = (baseClassName) => {
    return `${baseClassName} ${isDarkMode ? 'dark-theme' : 'light-theme'}`
  }

  return (
    <>
      <a href='#about' className={`nav-link`} onClick={closeMenu}>
        <span className='navigation-link-number'>01.</span>
        {t('about')}
      </a>
      <a href='#projects' className={`nav-link`} onClick={closeMenu}>
        <span className='navigation-link-number'>02.</span>
        {t('projects')}
      </a>
      <a href='#contact' className={`nav-link`} onClick={closeMenu}>
        <span className='navigation-link-number'>03.</span>
        {t('contact')}
      </a>
      <a
        href='#lab'
        className={`nav-link`}
        onClick={() => {
          //   handleScrollTo('lab')
          closeMenu()
        }}
      >
        <span className='navigation-link-number'>04.</span>
        {t('lab')}
      </a>
    </>
  )
}

export default NavigationLinks
