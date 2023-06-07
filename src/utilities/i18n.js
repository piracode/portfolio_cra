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
  }

  const languages = ['en', 'fr', 'es']

  const translations = {}

  // Iterate over each language
  for (const language of languages) {
    translations[language] = {}

    // Iterate over each file and load the JSON data
    for (const [filename] of Object.entries(files)) {
      const jsonData = await loadJSON(filename)
      // Merge the translation data into the corresponding language object
      translations[language] = {
        ...translations[language],
        ...jsonData[language],
      }
    }
  }

  return translations
}

const resources = {}

// Load the translations and initialize the i18n library
loadTranslations().then((translations) => {
  for (const [language, translation] of Object.entries(translations)) {
    resources[language] = { translation: {} }

    // Populate the resources object with the translation data
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
})

export default i18n
