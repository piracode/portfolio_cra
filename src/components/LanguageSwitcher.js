import React from 'react'
import i18n from '../utilities/i18n'

const LanguageSwitcher = () => {
  const switchLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fr')}>French</button>
      <button onClick={() => switchLanguage('es')}>Spanish</button>
    </div>
  )
}

export default LanguageSwitcher
