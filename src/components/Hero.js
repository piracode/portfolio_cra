import { useTranslation } from 'react-i18next'
import profilePic from '../assets/profile.webp'
import { useEffect, useState } from 'react'
import Loading from './Loading'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const Hero = () => {
  const { t, ready } = useTranslation()
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    setShowHero(true)
  }, [])

  // useEffect(() => {
  //   AOS.init()
  //   AOS.refresh()
  // }, [])

  return (
    <>
      {ready ? (
        <section
          // data-aos='fade-up'
          className={`hero ${showHero ? 'fade-up fade-up-active' : ''}`}
        >
          {/* <section className='hero'> */}
          <img
            className='hero-img'
            src={profilePic}
            alt="Martha Villa Martin's profile picture"
          />
          <div className='hero-text-container'>
            <div className='hero-intro-box'>
              <p className='hero-greeting'>{t('hero.greeting')}</p>
              <h1 className='hero-name'>{t('hero.name')}</h1>
              <h2 className='hero-role'>{t('hero.role')}</h2>
            </div>
            <div className='hero-description-box'>
              <p className='hero-description'> {t('hero.descriptionPart1')}</p>
              <strong className='hero-subdescription'>
                {t('hero.descriptionPart2')}
              </strong>
            </div>
            <button className='primary-button hero-button'>
              <a className='button-link' href='#projects'>
                {t('hero.SeeProjectsCTA')}
              </a>
            </button>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Hero
