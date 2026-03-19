import { posts } from '../../data/blog'
import { SectionHeader } from '../ui/SectionHeader'
import { BlogCard } from '../ui/BlogCard'
import { motion } from 'framer-motion'
import { fadeUp, baseTransition, staggerContainer } from '../../motionConfig'

export function BlogPreview() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 lg:py-14">
        <SectionHeader
          eyebrow="Aprendizado"
          title="Anotações"
          linkTo="/blog"
          linkLabel="Ver todos"
        />
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              transition={{
                ...baseTransition,
                delay: index * 0.02,
              }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
