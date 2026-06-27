import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'
import './App.css'

/* ─── Back-to-top ────────────────────────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 13V3M3 8l5-5 5 5" />
      </svg>
    </button>
  )
}

/* ─── Scroll-reveal observer ─────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  useScrollReveal()

  return (
    /* noise overlay adds subtle texture to the deep-navy background */
    <div className="min-h-screen bg-deep noise">
      <Navbar />

      <main>
        <Hero />

        {/* Subtle visual break between hero and content */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)',
            margin: '0 2rem',
          }}
        />

        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
