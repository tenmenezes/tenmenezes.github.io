import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { posts } from '../data/blog'
import { useLocalized } from '../hooks/useLocalized'
import { DotPattern } from '../components/ui/dot-pattern'
import { MarkdownContent } from '../components/ui/MarkdownContent'

export function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const { l, formatDate } = useLocalized()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const { title, date, category, readTime, content } = post

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
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            {t('blog.backToAll')}
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              <span>{formatDate(date)}</span>
              <span className="h-px w-4 bg-border/70" />
              <span>{l(category)}</span>
              <span className="h-px w-4 bg-border/70" />
              <span>{t('blog.readTime', { count: readTime })}</span>
            </div>
            <h1 className="max-w-xl text-2xl font-medium uppercase tracking-[0.2em] text-foreground">
              {l(title)}
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-0">
          <MarkdownContent content={l(content)} />
        </div>
      </section>
    </main>
  )
}
