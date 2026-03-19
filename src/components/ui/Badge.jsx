export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-border/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground ${className}`}
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
