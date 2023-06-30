import React from 'react'

import frFlag from '../assets/flags/france-flag.png'
import enFlag from '../assets/flags/uk-flag.png'
import esFlag from '../assets/flags/spain-flag.png'
import { useTranslation } from 'react-i18next'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const switchLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <button onClick={() => switchLanguage('en')} title='English Flag'>
        <img src={enFlag} alt='English Flag' className='flag-box' />
      </button>
      <button onClick={() => switchLanguage('fr')} title='French Flag'>
        <img src={frFlag} alt='French Flag' className='flag-box' />
      </button>
      <button onClick={() => switchLanguage('es')} title='Spanish Flag'>
        <img src={esFlag} alt='Spanish Flag' className='flag-box' />
      </button>
    </>
  )
}

export default LanguageSwitcher
