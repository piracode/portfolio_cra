import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'
import { SiCodepen } from 'react-icons/si'

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section id='contact' className='contact'>
      <h3 className='section-title'>
        <span className='parallax-link-number'> 03. </span>
        <span className='title-text'>{t('titleSectionContact')}</span>
        <span className='title-line'>&nbsp;</span>
      </h3>
      <p className='contact-text'> {t('contactParagraph-1')}</p>
      <p className='contact-text'> {t('contactParagraph-2')}</p>
      <div className='contact-icons-box'>
        <FaGithub className='contact-icon contact-icon-github' />

        <FaLinkedin className='contact-icon contact-icon-linkedin' />
        <SiCodepen className='contact-icon contact-icon-codepen' />
      </div>
    </section>
  )
}

export default Contact
