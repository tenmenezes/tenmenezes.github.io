import { posts } from '../data/blog'
import { BlogCard } from '../components/ui/BlogCard'

export function BlogPage() {
  return (
    <main className="border-b border-border/60 bg-background">
      {/* Hero */}
      <section className="border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
          <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            Aprendizados
          </p>
          <h1 className="mb-4 text-2xl font-medium uppercase tracking-[0.2em] text-foreground">
            Anotações
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Anotações e aprendizados sobre desenvolvimento web,
            arquitetura de sistemas e construção de APIs, com foco
            em aplicações reais e boas práticas.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-0 lg:py-14">
          <div className="grid gap-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} showCategory />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
