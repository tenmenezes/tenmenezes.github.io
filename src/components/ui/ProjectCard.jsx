import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SmallBadge } from '../ui/Badge'

export function ProjectCard({ project }) {
  const { slug, title, role, year, tags } = project

  return (
    <Link to={`/projects/${slug}`} className="group block">
      <div className="flex h-full flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_60px_rgba(0,0,0,0.33)]">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            <span>{role}</span>
            <span className="text-muted-foreground/70">{year}</span>
          </div>
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            {title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <SmallBadge key={tag}>{tag}</SmallBadge>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Visualizar projeto</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border/60 bg-background/80 transition-colors group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
