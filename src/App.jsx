import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ScrollToTop } from './components/utils/ScrollToTop'
import { ScrollToHash } from './components/utils/ScrollToHash'
import { Toaster } from 'sonner'
import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", redirect);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </div>
        <Footer />
      </div>

      <Toaster
        position='top-center'
        theme='system'
        richColors
        closeButton
      />
    </BrowserRouter>
  )
}
