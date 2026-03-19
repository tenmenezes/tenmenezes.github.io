import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHash(hash) {
  if (!hash) return false
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  if (!id) return false

  const el = document.getElementById(id)
  if (!el) return false

  const headerOffset = 80 // navbar sticky + breathing room
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset

  window.scrollTo({
    top: Math.max(0, y),
    behavior: 'smooth',
  })

  return true
}

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    let tries = 0
    const maxTries = 12

    const attempt = () => {
      tries += 1
      const ok = scrollToHash(location.hash)
      if (!ok && tries < maxTries) {
        requestAnimationFrame(attempt)
      }
    }

    // Wait one frame so the route content mounts
    requestAnimationFrame(attempt)
  }, [location.pathname, location.hash])

  return null
}

