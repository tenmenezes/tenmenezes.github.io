import { posts } from '../data/blog'
import { BlogCard } from '../components/ui/BlogCard'
import { motion } from 'framer-motion'
import { baseTransition, fadeUp, staggerContainer } from '../motionConfig'

export function BlogPage() {
  return (
    <main className="border-b border-border/60 bg-background">

      {/* Hero */}
      <motion.section
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
        className="border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30"
      >
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <motion.p
            variants={fadeUp}
            transition={baseTransition}
            className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Aprendizados
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={baseTransition}
            className="mb-4 text-2xl font-medium uppercase tracking-[0.2em] text-foreground"
          >
            Anotações
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={baseTransition}
            className="max-w-xl text-sm leading-relaxed text-muted-foreground text-justify"
          >
            Anotações e aprendizados sobre meu desenvolvimento pessoal
            como profissinal, a cada dia me qualificando
            e me refinando mais para a área, me especializando
            com foco em aplicações reais e boas práticas.
          </motion.p>
        </div>
      </motion.section>

      {/* List */}
      <motion.section
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="border-b border-border/60 bg-background"
      >
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-0 lg:py-14">
          <motion.div className="grid gap-4">
            {posts.map((post) => (
              <motion.div
                key={post.slug}
                variants={fadeUp}
                transition={baseTransition}
              >
                <BlogCard post={post} showCategory />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
