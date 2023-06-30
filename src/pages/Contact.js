import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import { useInView } from 'react-intersection-observer'
import Loading from '../components/Loading'

const Contact = () => {
  const { t, ready } = useTranslation()

  const [ref, inView] = useInView()

  console.log('contact inView:', inView)
  console.log('title section proejct', t('titleSectionContact'))
  console.log('READY ------------', ready)

  // if (!ready) {
  //   return <p>Loading...</p>
  // }

  return (
    <>
      {ready ? (
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
                <a
                  className='button-link'
                  href='mailto:martha.villamartin@gmail.com'
                >
                  {t('sendEmailCTA')}
                </a>
              </button>
            </div>
            <Footer />
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Contact
