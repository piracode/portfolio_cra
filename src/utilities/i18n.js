import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// load JSON data from a file
const loadJSON = async (filename) => {
  const response = await fetch(`/json/${filename}.json`)
  const data = await response.json()
  console.log(`filename: ${filename}`, data)
  return data
}

// load translations for different languages
const loadTranslations = async () => {
  const files = {
    hero: 'hero',
    navigation: 'navigation',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    contact: 'contact',
    gallery: 'gallery',
  }

  const languages = ['en', 'fr', 'es']

  const translations = {
    en: [],
    fr: [],
    es: [],
  }

  // Iterate over each file and load the JSON data
  for (const [filename] of Object.entries(files)) {
    const jsonData = await loadJSON(filename)
    debugger
    // Merge the translation data into the corresponding language object
    for (const language in jsonData) {
      translations[language] = {
        ...translations[language],
        ...jsonData[language],
      }
    }
  }

  return translations
}

const initializeI18n = async () => {
  const translations = await loadTranslations()

  const resources = {}

  // Populate the resources object with the translation data
  for (const [language, translation] of Object.entries(translations)) {
    resources[language] = { translation: {} }

    for (const [file, data] of Object.entries(translation)) {
      resources[language].translation[file] = data
    }
  }

  // Initialize the i18n library with the loaded resources
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Set the default language to English
    interpolation: {
      escapeValue: false,
    },
  })
  console.log('------------------------Translations:', translations)
}

initializeI18n()

export default i18n
