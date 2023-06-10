import { useTranslation } from 'react-i18next'
import profilePic from '../assets/profile.png'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className='hero'>
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
        <button className='primary-button hero-button'>
          <a className='button-link' href='#projects'>
            {t('SeeProjectsCTA')}
          </a>
        </button>
      </div>
    </section>
  )
}

export default Hero
