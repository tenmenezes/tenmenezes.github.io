import { projects } from '../data/projects'
import { ProjectCard } from '../components/ui/ProjectCard'

export function ProjectsPage() {
  return (
    <main className="border-b border-border/60 bg-background">
      {/* Hero */}
      <section className="border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            Trabalhos selecionados
          </p>
          <h1 className="mb-4 text-2xl font-medium uppercase tracking-[0.2em] text-foreground">
            Projetos
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Um conjunto de trabalhos focado em design de produto, desenvolvimento de interface
            e sistemas de motion — cada projeto guiado pela crença de que contenção
            e precisão geram os resultados mais duráveis.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-0 lg:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
