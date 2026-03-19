import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import { SmallBadge } from '../components/ui/Badge'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const { title, role, year, tags, summary, description, details, highlights } = project

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            Todos os projetos
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-4">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                {role} — {year}
              </div>
              <h1 className="text-2xl font-medium uppercase tracking-[0.2em] text-foreground">
                {title}
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <SmallBadge key={tag}>{tag}</SmallBadge>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 text-[0.65rem] uppercase tracking-[0.2em]">
              {details.map(({ label, value }) => (
                <div key={label} className="space-y-1">
                  <div className="text-muted-foreground/70">{label}</div>
                  <div className="text-foreground">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Visão geral
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>

            <div className="space-y-4">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Destaques
              </p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[0.7rem] leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-border/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder visual */}
      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0">
          <div className="aspect-video w-full rounded-xl border border-border/60 bg-muted/30 flex items-center justify-center">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/50">
              Prévia do projeto
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
