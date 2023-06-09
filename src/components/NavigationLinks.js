import React, { useContext } from 'react'
import { ThemeContext } from '../App'
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
import LanguageSwitcher from './LanguageSwitcher'

const NavigationLinks = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <>
      <ul className='navigation-links'>
        <div className='navigation-link logo-desktop-link'>
          <Logo
            alt='Martha Villa Martin Logo'
            className='logo-header logo-desktop'
          />
        </div>
        <li className='navigation-link second-link'>
          <a className='navigation-link' href='#about'>
            <span className='navigation-link-icon'>
              <RiInformationFill />
            </span>
            <span className='navigation-link-text'>{t('about')}</span>
          </a>
        </li>
        <li className='navigation-link'>
          <a className='navigation-link' href='#projects'>
            <span className='navigation-link-icon'>
              <BsFillBriefcaseFill />
            </span>
            <span className='navigation-link-text'>{t('projects')}</span>
          </a>
        </li>
        <li className='navigation-link'>
          <a className='navigation-link' href='#contact'>
            <span className='navigation-link-icon'>
              <RiContactsBookFill />
            </span>
            <span className='navigation-link-text'>{t('contact')}</span>
          </a>
        </li>
        <li className='navigation-link'>
          <SearchFeature className='search-link' />
        </li>
        <li className='navigation-link'>
          <ThemeToggleButton className='theme-toggle-link' />
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
