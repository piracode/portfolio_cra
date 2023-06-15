import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
// import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'
// import { SiCodepen } from 'react-icons/si'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className='contact-section'>
      <section id='contact' className='contact'>
        <h3 className='section-title'>
          <span className='parallax-link-number'> 03. </span>
          <span className='title-text'>{t('titleSectionContact')}</span>
          <span className='title-line'>&nbsp;</span>
        </h3>
        <p className='contact-text'> {t('contactParagraph-1')}</p>
        <p className='contact-text'> {t('contactParagraph-2')}</p>
        <button className='primary-button'>
          <a className='button-link' href='#projects'>
            {t('sendEmailCTA')}
          </a>
        </button>
        {/* <div className='contact-icons-box'>
          <a href='https://github.com/piracode'>
            <FaGithub className='contact-icon contact-icon-github' />
          </a>

          <a href='https://www.linkedin.com/in/marthavillamartin/'>
            <FaLinkedin className='contact-icon contact-icon-linkedin' />
          </a>

          <a href='https://codepen.io/piracode'>
            <SiCodepen className='contact-icon contact-icon-codepen' />
          </a>
        </div> */}
        <Footer />
      </section>
    </div>
  )
}

export default Contact
