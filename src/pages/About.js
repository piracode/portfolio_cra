import React, { useContext } from 'react'
import { ThemeContext } from '../App'
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
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  const sectionClassName = isDarkMode ? 'about dark-theme' : 'about light-theme'
  const buttonClassName = isDarkMode
    ? 'primary-button about-button dark-theme'
    : 'primary-button about-button light-theme'

  return (
    <section id='about' className={sectionClassName}>
      <h3 className='section-title'>
        <span className='parallax-link-number'> 01. </span>
        <span className='title-text'>{t('titleSection')}</span>
        <span className='title-line'>&nbsp;</span>
      </h3>
      <div className='about-text-container'>
        <p className='about-paragraph-1'>{t('paragraph1')}</p>
        <p className='about-paragraph-2'>{t('paragraph2')}</p>
        <p className='about-paragraph-3'>{t('paragraph3')}</p>
        <p className='about-paragraph-4'>{t('paragraph4')}</p>
        <a
          className='about-youtubeLink'
          href='https://www.youtube.com/watch?v=aMr2pchOeBA'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('youtubeLink')}
        </a>
        <a
          className='about-facebookLink'
          href='https://www.facebook.com/quillerina.paperart'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('QuillerinaLink')}
        </a>
        <p className='about-paragraph-4-continued'>
          {t('paragraph4-continued')}
        </p>
      </div>
      <button className={buttonClassName}>
        <a className='button-link' href='#'>
          {t('seePhotosCTA')}
        </a>
      </button>

      <h4 className='about-stack-title'>{t('techStack')}</h4>
      <div className='about-stack-icons-container'>
        <SiHtml5 title='HTML5' className='about-stack-icon' />
        <SiCss3 title='CSS3' className='about-stack-icon' />
        <FaGit title='Git' className='about-stack-icon' />
        <SiJavascript title='JavaScript' className='about-stack-icon' />
        <SiGithub title='GitHub' className='about-stack-icon' />
        <SiGit title='Git' className='about-stack-icon' />
        <SiPhp title='PHP' className='about-stack-icon' />
        <FaSass title='Sass' className='about-stack-icon' />
        <SiTailwindcss title='Tailwind CSS' className='about-stack-icon' />
        <SiWordpress title='WordPress' className='about-stack-icon' />
        <SiShopify title='Shopify' className='about-stack-icon' />
        <SiFigma title='Figma' className='about-stack-icon' />
        <SiAdobephotoshop
          title='Adobe Photoshop'
          className='about-stack-icon'
        />
        <SiAdobexd title='Adobe XD' className='about-stack-icon' />
        <SiReact title='React' className='about-stack-icon' />
        <SiCanva title='Canva' className='about-stack-icon' />
        {/* <SiScrumalliance title='Scrum Alliance' className='about-stack-icon' /> */}
      </div>
    </section>
  )
}

export default About
