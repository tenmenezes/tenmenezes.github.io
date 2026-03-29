import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function SectionHeader({ eyebrow, title, description, linkTo, linkLabel }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-2">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="text-lg font-medium uppercase tracking-[0.2em] text-foreground">
          {title}
        </h2>
      </div>
      <div className="flex items-end gap-6">
        {description && (
          <p className="max-w-sm text-[0.7rem] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {linkTo && (
          <Link
            to={linkTo}
            className="group inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground transition-all hover:bg-foreground hover:text-background hover:shadow-xl"
          >
            {linkLabel || 'Ver tudo'}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
          </Link>
        )}
      </div>
    </div>
  )
}
