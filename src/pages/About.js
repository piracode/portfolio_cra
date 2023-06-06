import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  const sectionClassName = isDarkMode ? 'about dark-theme' : 'about light-theme'
  const buttonClassName = isDarkMode
    ? 'primary-button about-button dark-theme'
    : 'primary-button about-button light-theme'

  return (
    <section id='about' className={sectionClassName}>
      <h3>
        <span className='parallax-link-number'> 01. </span>
        {t('titleSection')}
        <span className='title-line'>&nbsp;</span>
      </h3>
      <p className='about-paragraph-1'>{t('paragraph1')}</p>
      <p className='about-paragraph-2'>{t('paragraph2')}</p>
      <p className='about-paragraph-3'>{t('paragraph3')}</p>
      <p className='about-paragraph-4'>{t('paragraph4')}</p>
      <a
        className='about-youtubeLink'
        href='https://www.youtube.com/watch?v=q2SPILI34io'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('youtubeLink')}
      </a>
      <a
        className='about-youtubeLink'
        href='https://www.facebook.com/quillerina.paperart'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('QuillerinaLink')}
      </a>
      <p className='about-paragraph-4'>{t('paragraph4-continued')}</p>
      <button className={buttonClassName}>
        <a href='#'>{t('seePhotosCTA')}</a>
      </button>
    </section>
  )
}

export default About
