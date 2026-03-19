import { Hero } from '../components/sections/Hero'
import { ClientsStrip } from '../components/sections/ClientsStrip'
import { Capabilities } from '../components/sections/Capabilities'
import { ProjectsPreview } from '../components/sections/ProjectsPreview'
import { BlogPreview } from '../components/sections/BlogPreview'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { ContactSection } from '../components/sections/ContactSection'

export function HomePage() {
  return (
    <main className="space-y-0">
      <Hero />
      <ClientsStrip />
      <Capabilities />
      <ProjectsPreview />
      <ProcessTimeline />
      <BlogPreview />
      <ContactSection />
    </main>
  )
}
