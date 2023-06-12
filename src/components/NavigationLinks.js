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

const NavigationLinks = () => {
  const { t } = useTranslation()

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/'
  }

  return (
    <>
      <ul className='navigation-links'>
        <div className='navigation-link logo-desktop-link'>
          <Logo
            alt='Martha Villa Martin Logo'
            className='logo-header logo-desktop'
            onClick={handleLogoClick}
          />
        </div>
        <li className='navigation-link second-link hover'>
          <a className='navigation-link' href='#about'>
            <span className='navigation-link-icon'>
              <RiInformationFill />
            </span>
            <span className='navigation-link-text'>{t('about')}</span>
          </a>
        </li>
        <li className='navigation-link hover'>
          <a className='navigation-link' href='#projects'>
            <span className='navigation-link-icon'>
              <BsFillBriefcaseFill />
            </span>
            <span className='navigation-link-text'>{t('projects')}</span>
          </a>
        </li>
        <li className='navigation-link hover'>
          <a className='navigation-link' href='#contact'>
            <span className='navigation-link-icon'>
              <RiContactsBookFill />
            </span>
            <span className='navigation-link-text'>{t('contact')}</span>
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
