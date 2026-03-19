export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

  const variants = {
    default:
      'border border-border bg-foreground text-background hover:bg-background hover:text-foreground',
    outline:
      'border border-border/70 bg-background/60 text-foreground hover:bg-foreground hover:text-background',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  }

  const sizes = {
    default: 'h-9 px-5 py-2 rounded-md text-[0.7rem] uppercase tracking-[0.25em]',
    sm: 'h-7 px-3 rounded-md text-[0.65rem] uppercase tracking-[0.2em]',
    icon: 'h-9 w-9 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
