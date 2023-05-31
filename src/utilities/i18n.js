import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const loadNavigationJSON = async (language) => {
  const response = await fetch(`/json/navigation.json`)
  const data = await response.json()
  return data[language]
}

const loadNavigationTranslations = async () => {
  const enNavigation = await loadNavigationJSON('en')
  const frNavigation = await loadNavigationJSON('fr')
  const esNavigation = await loadNavigationJSON('es')

  return {
    en: enNavigation,
    fr: frNavigation,
    es: esNavigation,
  }
}

const resources = {}

loadNavigationTranslations().then((translations) => {
  resources.en = { translation: translations.en }
  resources.fr = { translation: translations.fr }
  resources.es = { translation: translations.es }

  i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Set the default language to English
    interpolation: {
      escapeValue: false,
    },
  })
})

export default i18n
