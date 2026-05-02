import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { posts } from '../data/blog'
import { DotPattern } from '../components/ui/dot-pattern'
import { MarkdownContent } from '../components/ui/MarkdownContent'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const { title, date, category, readTime, content } = post

  // Simple markdown-like renderer for the content
  const renderContent = (text) => {
    return text.split(/\n\s*\n/).map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="mt-8 mb-3 text-sm font-medium uppercase tracking-[0.2em] text-foreground"
          >
            {block.replace('## ', '')}
          </h2>
        )
      }
      return (
        <p key={i} className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {block}
        </p>
      )
    })
  }

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
            Todos os textos
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              <span>{date}</span>
              <span className="h-px w-4 bg-border/70" />
              <span>{category}</span>
              <span className="h-px w-4 bg-border/70" />
              <span>{readTime}</span>
            </div>
            <h1 className="max-w-xl text-2xl font-medium uppercase tracking-[0.2em] text-foreground">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-0">
          <MarkdownContent content={content} />
        </div>
      </section>
    </main>
  )
}
