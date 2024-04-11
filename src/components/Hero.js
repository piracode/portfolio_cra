import { useTranslation } from 'react-i18next'
import profilePic from '../assets/profile.webp'
import { useEffect, useState, useContext} from 'react'
import Loading from './Loading'
import { ThemeContext } from '../App'

const Hero = () => {
  const { t, ready } = useTranslation()
  const [showHero, setShowHero] = useState(false)
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    setShowHero(true)
  }, [])

  return (
    <>
      {ready ? (
        <section
          className={`hero ${showHero ? 'fade-up fade-up-active' : ''}`}
        >
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
              <a className=' primary-button hero-button button-link' 
                  // style={{ color: isDarkMode ? '#13385c' : '#202022'}}
                  href='#projects'>
                {t('hero.SeeProjectsCTA')}
              </a>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Hero
