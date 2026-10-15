import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt'
import en from './locales/en'

export const LANGUAGES = ['pt', 'en']
const STORAGE_KEY = 'lang'
const HTML_LANG = { pt: 'pt-BR', en: 'en' }

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.includes(stored) ? stored : 'pt'
  } catch {
    return 'pt'
  }
}

function syncDocument(lng) {
  document.documentElement.lang = HTML_LANG[lng] ?? 'pt-BR'
  document.title = i18n.t('meta.title')
}

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // armazenamento indisponível (ex.: navegação privada)
  }
  syncDocument(lng)
})

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: getStoredLanguage(),
  fallbackLng: 'pt',
  supportedLngs: LANGUAGES,
  interpolation: { escapeValue: false },
})

syncDocument(i18n.language)

export default i18n
