import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Substitua pela sua lógica real de envio de formulário
    setSent(true)
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
              Contato
            </p>
            <h2 className="text-lg font-medium uppercase tracking-[0.2em] text-foreground">
              Bora construir algo juntos?
            </h2>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              Se você tem uma ideia, projeto ou precisa de alguém pra desenvolver, me chama!
              Gosto de trabalhar em soluções práticas e bem construídas. Respondo assim que possível.
            </p>
          </motion.div>
          <motion.div
            className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
            variants={fadeUp}
            transition={{ ...baseTransition, delay: 0.08 }}
          >
            Ou envie um e-mail direto
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
          className="rounded-xl border border-border/70 bg-background/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
          variants={fadeUp}
          transition={{ ...baseTransition, delay: 0.15 }}
        >
          {sent ? (
            <div className="py-10 text-center">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Mensagem enviada
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
                Até já.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Nome
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="h-9 w-full rounded-md border border-border/70 bg-background/80 px-3 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@exemplo.com"
                  required
                  className="h-9 w-full rounded-md border border-border/70 bg-background/80 px-3 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label
                  htmlFor="project"
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Detalhes do projeto
                </label>
                <textarea
                  id="project"
                  rows={4}
                  value={form.project}
                  onChange={handleChange}
                  placeholder="Compartilhe contexto, prazos e quaisquer links que possam ajudar."
                  required
                  className="w-full rounded-md border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[0.6rem] leading-relaxed text-muted-foreground">
                  Ao enviar este formulário você concorda em ser contatado sobre
                  sua solicitação. Sem newsletters, sem follow-ups automáticos.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-foreground px-6 py-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-background shadow-sm transition-all hover:bg-background hover:text-foreground hover:shadow-[0_18px_60px_rgba(0,0,0,0.33)]"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
