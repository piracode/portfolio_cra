import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import profilePic from '../assets/profile.png'

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  const sectionClassName = isDarkMode ? 'hero dark-theme' : 'hero light-theme'
  const buttonClassName = isDarkMode
    ? 'primary-button hero-button dark-theme'
    : 'primary-button hero-button light-theme'
  const anchorClassName = isDarkMode
    ? 'button-link dark-theme'
    : 'button-link light-theme'

  return (
    <section className={sectionClassName}>
      <img
        className='hero-img'
        src={profilePic}
        alt="Martha Villa Martin's profile picture"
      />
      <div className='hero-text-container'>
        <div className='hero-intro-box'>
          <p className='hero-greeting'>{t('greeting')}</p>
          <h1 className='hero-name'>{t('name')}</h1>
          <h2 className='hero-role'>{t('role')}</h2>
        </div>
        <div className='hero-description-box'>
          <p className='hero-description'> {t('descriptionPart1')}</p>
          <strong className='hero-subdescription'>
            {t('descriptionPart2')}
          </strong>
        </div>
        <button className={buttonClassName}>
          <a className={anchorClassName} href='#projects'>
            {t('SeeProjectsCTA')}
          </a>
        </button>
      </div>
    </section>
  )
}

export default Hero
