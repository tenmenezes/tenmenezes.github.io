import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { LoaderPinwheelIcon } from 'lucide-react';
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

export function ContactSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage

  const [form, setForm] = useState({
     name: '',
     email: '',
     project: '',
     company: '' // honeypot 
    })

  const [sent, setSent] = useState(false)
  const [captcha, setCaptcha] = useState(null)
  const recaptchaRef = useRef(null)

  // o widget remonta ao trocar de idioma, então o token anterior deixa de valer
  useEffect(() => setCaptcha(null), [lang])

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const lastSent = localStorage.getItem('lastSent')

  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const captchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

  // sem essas variáveis (ex.: rodando local sem .env) o envio não tem como funcionar
  const missingEnv = Object.entries({
    VITE_SERVICE_ID: serviceId,
    VITE_TEMPLATE_ID: templateId,
    VITE_PUBLIC_KEY: publicKey,
    VITE_RECAPTCHA_SITE_KEY: captchaSiteKey,
  })
    .filter(([, value]) => !value)
    .map(([name]) => name)

  const resetCaptcha = () => {
    recaptchaRef.current?.reset()
    setCaptcha(null)
  }

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))


  const handleSubmit = async (e) => {
    e.preventDefault()
        
    // honeypot
    if(form.company) return

    // validação básica
    if(!form.name || !form.email || !form.project) {
      toast.info(t('contact.toast.fillAll'))
      return
    }

    // email válido
    if(!emailRegex.test(form.email)) {
      toast.error(t('contact.toast.invalidEmail'))
      return
    }

    // validando mensagem
    if(form.project.length < 10) {
      toast.error(t('contact.toast.minLength'))
      return
    }

    // configuração do EmailJS / reCAPTCHA
    if(missingEnv.length) {
      console.error(`[Contato] Variáveis de ambiente ausentes: ${missingEnv.join(', ')}`)
      toast.error(t('contact.toast.notConfigured'))
      return
    }

    // Verificação de Captcha
    if(!captcha) {
      toast.warning(t('contact.toast.captcha'))
      return
    }

    const sendPromisse = emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.project,
          // token validado pelo EmailJS quando a verificação de reCAPTCHA está ativa no template
          'g-recaptcha-response': captcha,
        },
        publicKey
      )

      toast.promise(sendPromisse, {
        loading: t('contact.toast.loading'),
        success: () => {
          localStorage.setItem('lastsent', Date.now().toString())
          setSent(true)
          return t('contact.toast.success')
        },
        error: (err) => {
          // o EmailJS devolve { status, text } com o motivo real da falha
          console.error('[EmailJS]', err?.status, err?.text ?? err)
          // o token do reCAPTCHA é de uso único, então precisa ser renovado para tentar de novo
          resetCaptcha()
          return import.meta.env.DEV && err?.status
            ? `${t('contact.toast.error')} (${err.status}: ${err.text})`
            : t('contact.toast.error')
        }
      })
  }

  return (
    <section id="contact" className="border-b border-border/60 bg-muted/20">
      <motion.div
        className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.12)}
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <motion.div
            className="space-y-2"
            variants={fadeUp}
            transition={baseTransition}
          >
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              {t('contact.eyebrow')}
            </p>
            <h2 className="text-lg font-medium uppercase tracking-[0.2em] text-foreground">
              {t('contact.title')}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t('contact.description')}
            </p>
          </motion.div>
          <motion.div
            className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
            variants={fadeUp}
            transition={{ ...baseTransition, delay: 0.08 }}
          >
            {t('contact.directEmail')}
            <div className="text-foreground">
              <a
                href="mailto:yago.ten.menezes@outlook.com"
                className="transition-opacity hover:opacity-70"
              >
                yago.ten.menezes@outlook.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="rounded-xl border border-border/70 bg-background/70 p-5 shadow-2xl"
          variants={fadeUp}
          transition={{ ...baseTransition, delay: 0.15 }}
        >
          {sent ? (
            <div className="py-10 text-center">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                {t('contact.sentEyebrow')}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
                {t('contact.sentTitle')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">

              {/* Honeypot invisível pra prevenção de bots */}
              
              <input 
                type="text"
                id='company'
                value={form.company}
                onChange={handleChange}
                style={{ display: 'none' }}
               />

              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {t('contact.nameLabel')}
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact.namePlaceholder')}
                  required
                  className="h-9 w-full rounded-md border border-border/70 bg-background/80 px-3 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {t('contact.emailLabel')}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  className="h-9 w-full rounded-md border border-border/70 bg-background/80 px-3 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label
                  htmlFor="project"
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {t('contact.projectLabel')}
                </label>
                <textarea
                  id="project"
                  rows={4}
                  value={form.project}
                  onChange={handleChange}
                  placeholder={t('contact.projectPlaceholder')}
                  required
                  className="w-full rounded-md border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>

            {/* CAPTCHA */}

            <div className='sm:col-span-2'>
              {/* sem sitekey o grecaptcha lança erro a cada re-render e derruba a página inteira */}
              {captchaSiteKey ? (
                // key força remontar o widget no idioma escolhido
                <ReCAPTCHA
                  ref={recaptchaRef}
                  key={lang}
                  hl={lang === 'en' ? 'en' : 'pt-BR'}
                  sitekey={captchaSiteKey}
                  onChange={(value) => setCaptcha(value)}
                  onExpired={() => setCaptcha(null)}
                />
              ) : (
                import.meta.env.DEV && (
                  <p className="rounded-md border border-dashed border-border/70 px-3 py-2 text-[0.7rem] text-muted-foreground">
                    {t('contact.notConfigured', { vars: missingEnv.join(', ') })}
                  </p>
                )
              )}
            </div>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[0.7rem] leading-relaxed text-muted-foreground">
                  {t('contact.consent')}
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-foreground px-6 py-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-background shadow-sm transition-all hover:bg-background hover:text-foreground hover:shadow-xl"
                >                    
                    {t('contact.submit')}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
