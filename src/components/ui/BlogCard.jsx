import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function BlogCard({ post, showCategory = false }) {
  const { slug, title, date, category, excerpt } = post

  return (
    <Link to={`/blog/${slug}`} className="group block">
      <div className="flex h-full flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            <span>{date}</span>
            {showCategory && (
              <span className="text-muted-foreground/70">{category}</span>
            )}
          </div>
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground text-justify">{excerpt}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Ler anotação</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border/60 bg-background/80 transition-colors group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
