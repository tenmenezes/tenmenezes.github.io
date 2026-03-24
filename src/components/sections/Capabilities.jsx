import { capabilities } from '../../data/site'
import { motion } from 'framer-motion'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

export function Capabilities() {
  return (
    <section
      className="border-b border-border/60 "
      aria-labelledby="capabilities-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-14">
        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
        >
          <motion.div
            className="space-y-4 lg:pr-8"
            variants={fadeUp}
            transition={baseTransition}
          >
            <div className="space-y-6">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Capacidades
              </p>

              <div className="space-y-3">
                <h2
                  id="capabilities-title"
                  className="text-lg font-medium uppercase tracking-[0.2em] text-foreground"
                >
                  Como posso contribuir
                </h2>
                <p className="max-w-sm text-[0.7rem] leading-relaxed text-muted-foreground text-justify">
                  Construo sistemas web, desde interfaces até APIs e banco de dados, sempre buscando código limpo e aplicações bem estruturadas.
                </p>
              </div>

              <div className="space-y-3 border-t border-border/60 pt-4">
                <h2
                  className="text-lg font-medium uppercase tracking-[0.2em] text-foreground"
                >
                  O que priorizo
                </h2>

                <ul className="space-y-2.5 text-[0.68rem] leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/60 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                    <span className="mt-[0.38rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 animate-pulse" />
                    <span>Clareza na interface e na experiência do usuário</span>
                  </li>

                  <li className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/60 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                    <span className="mt-[0.38rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 animate-pulse" />
                    <span>Organização de código e manutenção a longo prazo</span>
                  </li>
                  <li className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/60 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                    <span className="mt-[0.38rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600 animate-pulse" />
                    <span>Integração consistente entre as camadas da aplicação</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-border/60 pt-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            variants={fadeUp}
            transition={baseTransition}
          >
            <motion.div
              className="divide-y divide-border/60"
              variants={staggerContainer(0.12)}
            >
              {capabilities.map(({ title, description, items }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  transition={{
                    ...baseTransition,
                    delay: index * 0.02,
                  }}
                  className="grid gap-4 py-6 first:pt-4 first:lg:pt-0 last:pb-0 sm:grid-cols-[auto_1fr]"
                >
                  <p className="pt-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80">
                    0{index + 1}
                  </p>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-foreground">
                        {title}
                      </h3>
                      <p className="max-w-xl text-[0.7rem] leading-relaxed text-muted-foreground text-justify">
                        {description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-px w-3 bg-border/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
