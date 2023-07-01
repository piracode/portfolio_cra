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
                role='button'
                tabIndex='0'
              />
            </div>
            <li className='navigation-link second-link hover'>
              <HashLink
                smooth
                to='/#about'
                className='navigation-link'
                onClick={() => setActiveLink('about')}
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0'
              >
                <span className='navigation-link-icon'>
                  <RiInformationFill
                    aria-label={t('navigation.about')}
                    title='About Section Link'
                  />
                </span>
                <span className='navigation-link-text'>
                  {t('navigation.about')}
                </span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <HashLink
                smooth
                to='/#projects'
                className='navigation-link'
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0'
              >
                <span className='navigation-link-icon'>
                  <BsFillBriefcaseFill
                    aria-label={t('navigation.projects')}
                    title='Project Section link'
                  />
                </span>
                <span className='navigation-link-text'>
                  {t('navigation.projects')}
                </span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <HashLink
                smooth
                to='/#contact'
                className='navigation-link'
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0'
              >
                <span className='navigation-link-icon'>
                  <RiContactsBookFill
                    aria-label={t('navigation.contact')}
                    title='Contact Section Link'
                  />
                </span>
                <span className='navigation-link-text'>
                  {t('navigation.contact')}
                </span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <HashLink
                className='navigation-link'
                smooth
                to='/#skills'
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0'
              >
                <span className='navigation-link-icon'>
                  <GiSkills
                    aria-label={t('navigation.skills')}
                    title='Skills Section Link'
                  />
                </span>
                <span className='navigation-link-text'>
                  {t('navigation.skills')}
                </span>
              </HashLink>
            </li>
            <li className='navigation-link hover'>
              <ThemeToggleButton className='theme-toggle-link' tabIndex='0' />
            </li>
            <li className=' navigation-contact-container contact-box-desktop'>
              <div className='navigation-contact-icons-box'>
                <a href='https://github.com/piracode' tabIndex='0'>
                  <FaGithub
                    className='navigation-contact-icon contact-icon-github'
                    aria-label='GitHub'
                    title='Open GitHub'
                  />
                </a>

                <a
                  href='https://www.linkedin.com/in/marthavillamartin/'
                  tabIndex='0'
                >
                  <FaLinkedin
                    className='navigation-contact-icon contact-icon-linkedin'
                    aria-label='LinkedIn'
                    title='Open Linkedin'
                  />
                </a>

                <a href='https://codepen.io/piracode' tabIndex='0'>
                  <SiCodepen
                    className='navigation-contact-icon contact-icon-codepen'
                    aria-label='CodePen'
                    title='Open CodePen'
                  />
                </a>
              </div>
            </li>
            <li className=' navigation-language-container language-box-desktop'>
              <LanguageSwitcher tabIndex='0' />
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
