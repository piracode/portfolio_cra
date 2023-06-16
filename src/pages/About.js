import { useTranslation } from 'react-i18next'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiGit,
  SiPhp,
  SiTailwindcss,
  SiWordpress,
  SiShopify,
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiReact,
  SiCanva,
  // SiScrumalliance,
} from 'react-icons/si'
import { FaGit, FaSass } from 'react-icons/fa'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id='about' className='about'>
      <article className='about-text-container'>
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
          <a className='button-link' href='#'>
            {t('seePhotosCTA')}
          </a>
        </button>
      </article>

      {/* <article className='tech-stack-container'> */}
      <article className='skills-container'>
        <h3 className='section-title'>
          <span className='parallax-link-number'>02.</span>
          <span className='title-text'>{t('titleSkills')}</span>
          <span className='title-line'>&nbsp;</span>
        </h3>
      </article>
    </section>
  )
}

export default About
