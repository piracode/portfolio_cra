import { useTranslation } from 'react-i18next'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { RiInformationFill } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import { RiContactsBookFill } from 'react-icons/ri'
import SearchFeature from './SearchFeature'
import ThemeToggleButton from './ThemeToggleButton'
import { ReactComponent as Logo } from '../assets/mvm-logo.svg'
// import Logo from './Logo'

import LanguageSwitcher from './LanguageSwitcher'

import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'
import { SiCodepen } from 'react-icons/si'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Loading from './Loading'

// const NavigationLinks = () => {
const NavigationLinks = () => {
  const { t, ready } = useTranslation()
  const [activeLink, setActiveLink] = useState('')
  const navigate = useNavigate()

  // const handleLogoClick = () => {
  //   window.location.href = '/'
  // }

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {ready ? (
        <nav className='navigation-container sticky'>
          <ul className='navigation-links'>
            <div className='navigation-link logo-desktop-link'>
              <Logo
                alt='Martha Villa Martin Logo'
                className='logo-header logo-desktop'
                onClick={handleLogoClick}
              />
            </div>
            <li className='navigation-link second-link hover'>
              <HashLink
                smooth
                to='/#about'
                className='navigation-link'
                onClick={() => setActiveLink('about')}
                scroll={(el) => scrollWithOffset(el, 50)}
              >
                <span className='navigation-link-icon'>
                  <RiInformationFill />
                </span>
                <span className='navigation-link-text'>{t('about')}</span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <HashLink
                smooth
                to='/#projects'
                className='navigation-link'
                scroll={(el) => scrollWithOffset(el, 50)}
              >
                <span className='navigation-link-icon'>
                  <BsFillBriefcaseFill />
                </span>
                <span className='navigation-link-text'>{t('projects')}</span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <HashLink
                smooth
                to='/#contact'
                className='navigation-link'
                scroll={(el) => scrollWithOffset(el, 50)}
              >
                <span className='navigation-link-icon'>
                  <RiContactsBookFill />
                </span>
                <span className='navigation-link-text'>{t('contact')}</span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <HashLink
                className='navigation-link'
                smooth
                to='/#skills'
                scroll={(el) => scrollWithOffset(el, 50)}
              >
                <span className='navigation-link-icon'>
                  <GiSkills />
                </span>
                <span className='navigation-link-text'>{t('titleSkills')}</span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <ThemeToggleButton className='theme-toggle-link' />
            </li>
            <li className=' navigation-contact-container contact-box-desktop'>
              <div className='navigation-contact-icons-box'>
                <a href='https://github.com/piracode'>
                  <FaGithub className='navigation-contact-icon contact-icon-github' />
                </a>

                <a href='https://www.linkedin.com/in/marthavillamartin/'>
                  <FaLinkedin className='navigation-contact-icon contact-icon-linkedin' />
                </a>

                <a href='https://codepen.io/piracode'>
                  <SiCodepen className='navigation-contact-icon contact-icon-codepen' />
                </a>
              </div>
            </li>
            <li className=' navigation-language-container language-box-desktop'>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default NavigationLinks
