import { professionalTimeline, learningTimeline } from '../../data/site'
import { SectionHeader } from '../ui/SectionHeader'
import { motion } from 'framer-motion'
import { fadeUpSlow, baseTransition, staggerContainer } from '../../motionConfig'

// timeline genérica para utilizar duas

function Timeline({ data }) {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.16)}
    >
      {/* linha vertical */}
      <motion.div
        className="absolute left-2 top-0 bottom-0 hidden w-px bg-border/60 md:block"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <div className="space-y-6">
        {data.map(({ number, title, description }) => (
          <motion.div
            key={number}
            className="relative flex gap-4 md:pl-8"
            variants={fadeUpSlow}
            transition={{ ...baseTransition, duration: 0.45 }}
          >
            {/* Dot */}
            <div className="mt-1 flex-shrink-0 md:absolute md:left-0 md:mt-0">
              <motion.div
                className="flex h-4 w-4 items-center justify-center rounded-full border border-border/70 bg-background"
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
              </motion.div>
            </div>

            <div className="space-y-1">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
                {number}. {title}
              </p>
              <p className="max-w-xl text-[0.7rem] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function ProcessTimeline() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
        
        <SectionHeader
          eyebrow="Trajetória"
          title="Minha jornada"
          description="Uma visão da minha experiência prática e evolução no desenvolvimento de software."
        />

        <div className="grid gap-12 md:grid-cols-2">

          {/* EXPERIÊNCIA */}
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Experiência
            </p>
            <Timeline data={professionalTimeline} />
          </div>

          {/* APRENDIZADO */}
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Aprendizado
            </p>
            <Timeline data={learningTimeline} />
          </div>

        </div>
      </div>
    </section>
  )
}
