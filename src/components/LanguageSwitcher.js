import React from 'react'
import i18n from '../utilities/i18n'
import frFlag from '../assets/flags/france-flag.png'
import enFlag from '../assets/flags/uk-flag.png'
import esFlag from '../assets/flags/spain-flag.png'
const LanguageSwitcher = ({ isMobile }) => {
  const switchLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const containerClassName = isMobile
    ? 'navigation-language-container-mobile'
    : 'navigation-language-container-desktop'

  return (
    <div className={`navigation-language-container ${containerClassName}`}>
      <button onClick={() => switchLanguage('en')} title='English Flag'>
        <img src={enFlag} alt='English Flag' className='flag-box' />
      </button>
      <button onClick={() => switchLanguage('fr')} title='French Flag'>
        <img src={frFlag} alt='French Flag' className='flag-box' />
      </button>
      <button onClick={() => switchLanguage('es')} title='Spanish Flag'>
        <img src={esFlag} alt='Spanish Flag' className='flag-box' />
      </button>
    </div>
  )
}

export default LanguageSwitcher
