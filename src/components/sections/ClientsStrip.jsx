import { clients } from '../../data/site'
import { motion } from 'framer-motion'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

export function ClientsStrip() {
  return (
    <section className="border-b border-border/60 bg-background">
      <motion.div
        className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.1)}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            className="space-y-1"
            variants={fadeUp}
            transition={baseTransition}
          >
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            Projetos selecionados
            </p>
            <p className="max-w-sm text-[0.7rem] leading-relaxed text-muted-foreground">
              Aplicações e sistemas desenvolvidos com foco em prática real,
              organização de código e evolução contínua como desenvolvedor.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80"
            variants={staggerContainer(0.08)}
          >
            {clients.map((client) => (
              <motion.span
                key={client}
                className="relative flex items-center gap-2"
                variants={fadeUp}
                transition={baseTransition}
              >
                <span className="h-px w-4 bg-border/70" />
                <span>{client}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
