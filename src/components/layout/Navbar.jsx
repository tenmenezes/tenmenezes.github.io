import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { Button } from '../ui/Button'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'
import { AnimatedNavLink } from '../ui/AnimatedNavLink'
import profileImg from '../../assets/perfil.jpeg'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/projects', label: 'Projetos' },
  { to: '/blog', label: 'Blog' },
  { to: '/#contact', label: 'Contato' },
]

export function Navbar() {
  const { isDark, toggle } = useTheme()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl"
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.06)}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-0">
        {/* Logo */}
        <motion.div variants={fadeUp} transition={baseTransition}>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-muted">
              <img
                src={profileImg}
                alt="Foto de perfil"
                className="h-full w-full object-cover scale-125"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex flex-col text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="leading-none">Ten Menezes</span>
              <span className="leading-none text-foreground">Portfólio</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ to, label }, index) => (
            <motion.div
              key={to}
              variants={fadeUp}
              transition={{ ...baseTransition, delay: 0.04 * (index + 1) }}
            >
              <AnimatedNavLink to={to} isActive={pathname === to}>
                {label}
              </AnimatedNavLink>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <motion.div
          className="flex items-center gap-2"
          variants={fadeUp}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            <motion.span
              key={isDark ? 'sun' : 'moon'}
              initial={{ opacity: 0, rotate: -90, y: -4 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {isDark ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </motion.span>
          </Button>

          <Link
            to="/#contact"
            className="hidden rounded-xl border border-border/70 bg-background/60 px-3 py-3 text-[0.65rem] font-medium uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            Vamos conversar
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              key={mobileOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: -90, y: -4 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4">
              {navLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-xs uppercase tracking-[0.25em] transition-colors hover:text-foreground ${pathname === to ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
