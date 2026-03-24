import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import { SmallBadge } from '../components/ui/Badge'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const {
    title,
    role,
    year,
    tags,
    summary,
    description,
    details,
    highlights,
    preview,
    previewPosition,
    liveURL,
    githubURL,
  } = project

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

              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-justify">
                {summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <SmallBadge key={tag}>{tag}</SmallBadge>
                ))}
              </div>
            </div>

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
            <div className="space-y-4 lg:col-span-2">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Visão geral
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                {description}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Destaques
              </p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-[0.7rem] leading-relaxed text-muted-foreground text-justify"
                  >
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-border/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0">
          <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-muted/20">
            <div className="aspect-video w-full">
              <img
                src={preview}
                alt={`Prévia do projeto ${title}`}
                className={`h-full w-full object-cover ${previewPosition ?? 'object-center'} transition-transform duration-500 group-hover:scale-[1.02]`}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />

            {/* overlay desktop */}
            <div className="absolute inset-0 hidden items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
              {liveURL && (
                <a
                  href={liveURL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition hover:bg-foreground hover:text-background"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo
                </a>
              )}

              {githubURL && (
                <a
                  href={githubURL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm transition hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
            </div>

            {/* indicação mobile */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-border/50 bg-background/80 px-4 py-3 backdrop-blur-sm md:hidden">
              <div className="min-w-0">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Prévia interativa
                </p>
                <p className="truncate text-xs text-foreground">
                  Toque para abrir o projeto ou repositório
                </p>
              </div>

              <div className="flex items-center gap-2">
                {liveURL && (
                  <a
                    href={liveURL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir projeto ${title}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-foreground hover:text-background"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {githubURL && (
                  <a
                    href={githubURL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir repositório do projeto ${title}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-foreground hover:text-background"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}