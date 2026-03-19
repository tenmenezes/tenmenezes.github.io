import { projects } from '../../data/projects'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import { motion } from 'framer-motion'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

export function ProjectsPreview() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-14">
        <SectionHeader
          eyebrow="Trabalhos selecionados"
          title="Projetos"
          linkTo="/projects"
          linkLabel="Ver todos"
        />
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              transition={{
                ...baseTransition,
                delay: index * 0.02,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
