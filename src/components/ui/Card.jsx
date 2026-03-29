export function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`rounded-xl border border-border/70 bg-background/80 text-card-foreground ${
        hover
          ? 'transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
