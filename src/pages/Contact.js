import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const { t } = useTranslation()

  const [ref, inView] = useInView()

  console.log('contact inView:', inView)

  return (
    <div className='contact-section'>
      <section
        ref={ref}
        id='contact'
        className={`contact ${inView ? 'fade-up fade-up-active' : ''}`}
      >
        <div className='contact-connect-section'>
          <h3 className='section-title'>
            <span className='parallax-link-number'> 04. </span>
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
        </div>
        <Footer />
      </section>
    </div>
  )
}

export default Contact
