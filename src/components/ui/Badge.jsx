const badgeVariants = {
  default: 'border-border/70 text-foreground',
  highlight: 'border-foreground bg-foreground text-background',
}

export function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export function SmallBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-border/60 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-foreground ${className}`}
    >
      {children}
    </span>
  )
}
