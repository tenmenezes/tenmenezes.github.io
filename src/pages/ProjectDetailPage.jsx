import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import { useLocalized } from '../hooks/useLocalized'
import { SmallBadge } from '../components/ui/Badge'
import { DotPattern } from '../components/ui/dot-pattern'
import { DeviceFrame } from '@/components/ui/DeviceFrame'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const { l } = useLocalized()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const { role, year, tags, details, preview, previewPosition, liveURL, githubURL } = project
  const title = l(project.title)
  const summary = l(project.summary)
  const description = l(project.description)
  const highlights = l(project.highlights)

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <DotPattern
          cr={1.2}
          className="absolute inset-0 z-0 text-neutral-700/70 opacity-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] dark:text-neutral-400/35"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            {t('projects.backToAll')}
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

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[0.65rem] uppercase tracking-[0.2em]">
              {details.map(({ label, value }) => (
                <div key={l(label)} className="space-y-1">
                  <div className="text-muted-foreground/70">{l(label)}</div>
                  <div className="text-foreground">{l(value)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content & Action Buttons */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="space-y-4">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {t('projects.overview')}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                  {description}
                </p>
              </div>

              {/* Botões de Ação Reposicionados para melhor UX */}
              <div className="flex flex-wrap gap-3 pt-4">
                {liveURL && (
                  <a
                    href={liveURL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-foreground px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-background transition hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t('projects.visit')}
                  </a>
                )}
                {githubURL && (
                  <a
                    href={githubURL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-foreground transition hover:bg-muted"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t('projects.sourceCode')}
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                {t('projects.highlights')}
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[0.7rem] leading-relaxed text-muted-foreground text-justify"
                  >
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-primary/50" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section - Simplificada para evitar bugs de scroll */}
      <section className="bg-muted/5 py-12 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-background shadow-2xl">
            <div className="aspect-video w-full overflow-hidden">
              {liveURL ? (
                <>
                  {/* Desktop Frame */}
                  <div className="hidden md:block h-full">
                    <DeviceFrame url={liveURL} title={title} />
                  </div>
                  {/* Mobile Static Image (Melhor para performance e scroll) */}
                  <div className="block md:hidden h-full">
                    <img
                      src={preview}
                      alt={title}
                      className={`h-full w-full object-cover ${previewPosition ?? "object-center"}`}
                    />
                  </div>
                </>
              ) : (
                <img
                  src={preview}
                  alt={title}
                  className={`h-full w-full object-cover ${previewPosition ?? "object-center"}`}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}