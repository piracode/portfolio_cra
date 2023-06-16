import { useTranslation } from 'react-i18next'
import {
  BsFillBriefcaseFill,
  BsBriefcase,
  BsFillPhoneFill,
} from 'react-icons/bs'
import { RiInformationFill } from 'react-icons/ri'
import { IoIosPhonePortrait } from 'react-icons/io'
import { FaPhoneSquareAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrContact } from 'react-icons/gr'
import { GiSkills } from 'react-icons/gi'
import {
  RiContactsBook2Fill,
  RiContactsBook2Line,
  RiContactsBookFill,
  RiContactsBookLine,
} from 'react-icons/ri'
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

// const NavigationLinks = () => {
const NavigationLinks = () => {
  const { t } = useTranslation()
  const [activeLink, setActiveLink] = useState('')
  const navigate = useNavigate()

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/'
  }

  // const handleLinkClick = (link) => {
  //   setActiveLink(link)

  //   // Check if the current URL contains the ProjectDetails page slug
  //   const isProjectDetailsPage =
  //     window.location.pathname.includes('projectdetails')

  //   if (isProjectDetailsPage) {
  //     // Navigate to the main page with the respective section hash
  //     navigate(`/#${link}`)
  //   } else {
  //     // Update the URL
  //     // navigate(`/#${link}`, { replace: true })
  //     navigate(`/#${link}`)
  //   }
  // }

  // const handleLinkClick = (link) => {
  //   setActiveLink(link)

  //   // Scroll to the section with the corresponding ID
  //   document.getElementById(link).scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <>
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
              // onClick={() => handleLinkClick('projects')}
              className='navigation-link'
              // onClick={() => setActiveLink('projects')}
              // href='#projects'
              // onClick={() => handleLinkClick('projects')}
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
              // onClick={() => handleLinkClick('contact')}
              className='navigation-link'
              // href='#contact'
              // onClick={() => handleLinkClick('contact')}
            >
              <span className='navigation-link-icon'>
                <RiContactsBookFill />
              </span>
              <span className='navigation-link-text'>{t('contact')}</span>
            </HashLink>
          </li>
          <li className='navigation-link hover'>
            <a
              className='navigation-link'
              href='#skills'
              // onClick={() => handleLinkClick('skills')}
            >
              <span className='navigation-link-icon'>
                <GiSkills />
              </span>
              <span className='navigation-link-text'>{t('titleSkills')}</span>
            </a>
          </li>
          {/* <li className='navigation-link'>
          <SearchFeature className='search-link' />
        </li> */}
          <li className='navigation-link hover'>
            <ThemeToggleButton className='theme-toggle-link' />
          </li>
          <li className=' navigation-contact-container contact-box-desktop'>
            <div className='navigation-contact-icons-box'>
              {/* <FaGithub className='navigation-contact-icon contact-icon-github' />

            <FaLinkedin className='navigation-contact-icon contact-icon-linkedin' />
            <SiCodepen className='navigation-contact-icon contact-icon-codepen' /> */}

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
    </>
  )
}

export default NavigationLinks

{
  /* <GrContact /> maybe but color is wrong*/
}
{
  /* <RiContactsBook2Fill /> maybe*/
}
{
  /* <RiContactsBookLine /> */
}
