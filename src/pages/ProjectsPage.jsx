import { projects } from '../data/projects'
import { ProjectCard } from '../components/ui/ProjectCard'
import { motion } from 'framer-motion'
import { baseTransition, fadeUp, staggerContainer } from '../motionConfig'
import { base } from 'framer-motion/client'
import { DotPattern } from '../components/ui/dot-pattern'

export function ProjectsPage() {
  return (
    <main className="border-b border-border/60 bg-background">
      {/* Hero */}
      <motion.section
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30"
      >
        <DotPattern
          cr={1.2}
          className="absolute inset-0 z-0 text-neutral-700/70 opacity-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] dark:text-neutral-400/35"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">

          <motion.p 
            variants={fadeUp}
            transition={baseTransition}
            className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Trabalhos selecionados
          </motion.p>

          <motion.h1
           variants={fadeUp} 
           transition={baseTransition} 
           className="mb-4 text-2xl font-medium uppercase tracking-[0.2em] text-foreground"
          >
            Projetos
          </motion.h1>

          <motion.p
           variants={fadeUp} 
           transition={baseTransition} 
           className="max-w-xl text-sm leading-relaxed text-muted-foreground text-justify"
          >
            Projetos desenvolvidos com foco em prática real,
            envolvendo construção de interfaces, APIs e integração
            com banco de dados, sempre buscando código organizado
            e aplicações bem estruturadas.
          </motion.p>

        </div>

      </motion.section>

      {/* Grid */}
      <motion.section
       variants={staggerContainer(0.06)}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, margin: "-80px" }}
       className="border-b border-border/60 bg-background"
      >
        
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-0 lg:py-14">
          
          <motion.div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                transition={baseTransition}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        
        </div>
      
      </motion.section>
    </main>
  )
}
