import { Link } from 'react-router-dom'

export function AnimatedNavLink({
  to,
  children,
  isActive = false,
  className = '',
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`group relative inline-flex items-center text-xs font-medium uppercase tracking-[0.25em] transition-colors ${
        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      } ${className}`}
    >
      <span
        className={`pointer-events-none absolute left-0 top-[1.5em] h-[0.05em] w-full bg-current content-[''] origin-right transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive ? 'scale-x-100 origin-left' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'
        }`}
      />

      <span>{children}</span>

      <svg
        className={`ml-[0.3em] mt-[0em] size-[0.80em] transition-all duration-300 [motion-reduce:transition-none] ${
          isActive
            ? 'translate-y-0 opacity-100'
            : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
        }`}
        fill="none"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}
