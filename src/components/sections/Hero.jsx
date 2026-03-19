import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'
import profileImg from '../../assets/perfil.jpeg'
import { ScrambleText } from '../ui/TextScrambleEffect'

const skills = ['Interfaces Web', 'React.js', 'Next.js', 'Tailwind CSS', 'Backend', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Git']

const stats = [
  { label: 'Experiência Pessoal', value: '+3 anos' },
  { label: 'Projetos Feitos', value: '+5' },
  { label: 'Foco', value: 'Web · Backend' },
]

export function Hero() {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-0 lg:py-20">
        {/* Left: Copy */}
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1)}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur"
            variants={fadeUp}
            transition={{ ...baseTransition, delay: 0 }}
          >
            <span className="h-1 w-1 rounded-full bg-green-500" />
            Disponível para novos projetos
          </motion.div>

          <motion.div
            className="space-y-3"
            variants={fadeUp}
            transition={{ ...baseTransition, delay: 0.05 }}
          >
            <h1 className="text-3xl font-medium uppercase tracking-[0.15em] text-foreground sm:text-4xl">
              <span className="font-mono">
                <ScrambleText text="Desenvolvedor Web & Backend" />
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-foreground">
              Sou desenvolvedor focado na criação de sistemas web e aplicações backend,
              transformando ideias em aplicações funcionais, escaláveis e bem estruturadas.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.2em]"
            variants={staggerContainer(0.08)}
          >
            {skills.map((s) => (
              <motion.span key={s} variants={fadeUp} transition={baseTransition}>
                <Badge>{s}</Badge>
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={fadeUp}
            transition={{ ...baseTransition, delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl border bg-foreground px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-background shadow-sm transition-all hover:bg-background hover:text-foreground hover:shadow-[0_18px_60px_rgba(0,0,0,0.33)]"
            >
              Ver projetos
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
            </Link>

            <div className="flex items-center gap-2 text-muted-foreground">
              <a
                href="https://github.com/tenmenezes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-background/70 transition hover:-translate-y-[1px] hover:bg-foreground hover:text-background"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://linkedin.com/in/ten-menezes"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-background/70 transition hover:-translate-y-[1px] hover:bg-foreground hover:text-background"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Profile Card */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...baseTransition, delay: 0.25 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-border/70 bg-background/80 p-6 shadow-[0_0_120px_rgba(0,0,0,0.14)] hover:-translate-y-2 transition-all duration-300">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.45),_transparent_60%)]" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-col items-center gap-3 sm:items-start">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-muted/40">
                  <img
                    src={profileImg}
                    alt="Foto de perfil"
                    className="h-full w-full object-cover scale-125"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground sm:text-left">
                  <div className="font-medium text-foreground">Yago Menezes</div>
                  <div>Rio de Janeiro - RJ</div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <p className="max-w-xl text-sm leading-relaxed text-gray-500">
                  Gosto de transformar ideias em sistemas reais,
                  cuidando tanto da lógica quanto da interface para
                  entregar algo que funcione bem de verdade.
                </p>
                <div className="grid grid-cols-3 gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {stats.map(({ label, value }) => (
                    <div key={label} className="space-y-1">
                      <div className="text-[0.6rem] text-muted-foreground/80">{label}</div>
                      <div className="text-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
