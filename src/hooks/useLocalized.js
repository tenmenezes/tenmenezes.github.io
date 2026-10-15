import { useTranslation } from 'react-i18next'

const DATE_LOCALES = { pt: 'pt-BR', en: 'en-US' }

function isLocalized(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && 'pt' in value
}

// Resolve campos { pt, en } dos arquivos de dados conforme o idioma atual
export function useLocalized() {
  const { i18n } = useTranslation()
  const lang = i18n.resolvedLanguage ?? 'pt'

  const l = (value) => (isLocalized(value) ? value[lang] ?? value.pt : value)

  const formatDate = (iso) =>
    new Intl.DateTimeFormat(DATE_LOCALES[lang], {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(iso))

  return { lang, l, formatDate }
}
