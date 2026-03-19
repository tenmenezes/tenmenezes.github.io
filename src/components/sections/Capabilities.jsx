import { capabilities } from '../../data/site'
import { SectionHeader } from '../ui/SectionHeader'
import { motion } from 'framer-motion'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

export function Capabilities() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-14">
        <SectionHeader
          eyebrow="Capacidades"
          title="Como posso contribuir"
          description="Construo sistemas web, desde interfaces até APIs e banco de dados, sempre buscando código limpo e aplicações bem estruturadas."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
        >
          {capabilities.map(({ title, description, items }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{
                ...baseTransition,
                delay: index * 0.02,
              }}
              className="rounded-xl border border-border/70 bg-background/80 p-4 text-xs leading-relaxed shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground">
                {title}
              </div>
              <p className="mb-3 text-[0.7rem] text-muted-foreground">{description}</p>
              <ul className="space-y-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-px w-3 bg-border/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
