import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useEffect, useState, useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeContext } from '../App'

const About = () => {
  const { t, ready } = useTranslation()
  const [ref, inView] = useInView()
  const { isDarkMode } = useContext(ThemeContext);

  //retrieves the skills object from the translation file using the t function provided by the useTranslation hook.
  const skillsData = t('skills.skills', { returnObjects: true })

  // console.log('about inView:', inView)
  // console.log('t.name status' + t.name)

  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    if (inView) {
      setHasBeenInView(true)
    }
  }, [inView])

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      {ready ? (
        <div className='aboutAndSkills-box'>
          <section
            data-aos='fade-up'
            ref={ref}
            id='about'
            className={`about ${hasBeenInView ? 'fade-up fade-up-active' : ''}`}
          >
            <article className='about-container'>
              <h3 className='section-title'>
                <span className='parallax-link-number'> 01. </span>
                <span className='title-text'>
                  {t('about.titleSectionAbout')}
                </span>
              </h3>
              <div className='about-text-container'>
                <p className='about-paragraph-1'>{t('about.paragraph1')}</p>
                <p className='about-paragraph-2'>{t('about.paragraph2')}</p>
                <p className='about-paragraph-3'>{t('about.paragraph3')}</p>
                <p className='about-paragraph-4'>{t('about.paragraph4')}</p>
                <a
                  className='about-link'
                  href='https://www.youtube.com/watch?v=aMr2pchOeBA'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Link to Youtube'
                >
                  {t('about.youtubeLink')}
                </a>
                <p className='about-paragraph-4-continued'>
                  {t('about.paragraph4-continued1')}
                </p>
                <a
                  className='about-link'
                  href='https://www.facebook.com/quillerina.paperart'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Link to Quillerina Paper Art Site'
                >
                  {t('about.QuillerinaLink')}
                </a>
                <p className='about-paragraph-4-continued'>
                  {t('about.paragraph4-continued2')}
                </p>
                <a
                  className='about-link'
                  href='https://newsinteractives.cbc.ca/longform/25-years-of-flamenco-at-the-kino/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Link to CBC article'
                >
                  {t('about.flamencoCBCLink')}
                </a>
              </div>
              <Link to='/gallery' 
              className='button-link primary-button about-button'
              style={{ color: isDarkMode ? '#13385c' : '#202022'}}>
                  {t('about.seePhotosCTA')}
                </Link>
            </article>
          </section>
          <section
            data-aos='fade-up'
            ref={ref}
            id='skills'
            className={`skills-container ${
              inView ? 'fade-up fade-up-active' : ''
            }`}
          >
            <h3 className='section-title'>
              <span className='parallax-link-number'>02. </span>
              <span className='title-text'>{t('skills.titleSkills')}</span>
            </h3>
            {Array.isArray(skillsData) &&
              skillsData.map((section, index) => (
                <div key={index} className='skills-section-box'>
                  <h4 className='skills-section-subtitle'>{section.title}</h4>
                  <ul className='skills-section-list-items'>
                    {section.list.map((skill, skillIndex) => (
                      <li className='skills-section-list-item' key={skillIndex}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default About
