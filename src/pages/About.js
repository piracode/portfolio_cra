import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const About = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView()

  //retrieves the skills object from the translation file using the t function provided by the useTranslation hook.
  const skillsData = t('skills', { returnObjects: true })
  // console.log('about inView:', inView)
  return (
    <div className='aboutAndSkills-box'>
      <section
        ref={ref}
        id='about'
        className={`about ${inView ? 'fade-up fade-up-active' : ''}`}
      >
        <article className='about-container'>
          <h3 className='section-title'>
            <span className='parallax-link-number'> 01. </span>
            <span className='title-text'>{t('titleSectionAbout')}</span>
            <span className='title-line'>&nbsp;</span>
          </h3>
          <div className='about-text-container'>
            <p className='about-paragraph-1'>{t('paragraph1')}</p>
            <p className='about-paragraph-2'>{t('paragraph2')}</p>
            <p className='about-paragraph-3'>{t('paragraph3')}</p>
            <p className='about-paragraph-4'>{t('paragraph4')}</p>
            <a
              className='about-link'
              href='https://www.youtube.com/watch?v=aMr2pchOeBA'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('youtubeLink')}
            </a>
            <p className='about-paragraph-4-continued'>
              {t('paragraph4-continued1')}
            </p>
            <a
              className='about-link'
              href='https://www.facebook.com/quillerina.paperart'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('QuillerinaLink')}
            </a>
            <p className='about-paragraph-4-continued'>
              {t('paragraph4-continued2')}
            </p>
            <a
              className='about-link'
              href='https://newsinteractives.cbc.ca/longform/25-years-of-flamenco-at-the-kino/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('flamencoCBCLink')}
            </a>
          </div>
          <button className='primary-button about-button'>
            <Link to='/gallery' className='button-link'>
              {t('seePhotosCTA')}
            </Link>
          </button>
        </article>
      </section>
      {/* <article className='tech-stack-container'> */}
      <section className='skills-container' id='skills'>
        <h3 className='section-title'>
          <span className='parallax-link-number'>02. </span>
          <span className='title-text'>{t('titleSkills')}</span>
          <span className='title-line'>&nbsp;</span>
        </h3>
        {skillsData &&
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
  )
}

export default About
