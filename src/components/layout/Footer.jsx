import { useTranslation } from 'react-i18next'

export function Footer({ tagline }) {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:px-6 lg:px-0">
        <span>&copy; {new Date().getFullYear()} {t('footer.rights')}</span>
        <span>{tagline ?? t('footer.tagline')}</span>
      </div>
    </footer>
  )
}
