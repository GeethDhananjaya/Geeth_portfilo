import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX, FiDatabase } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Journey', to: 'journey' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-lg border-b border-accent-sky/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-sky to-accent-indigo flex items-center justify-center">
            <FiDatabase className="text-white text-sm" />
          </div>
          <span className="font-bold text-lg gradient-text">Geeth.dev</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="text-slate-400 hover:text-accent-sky cursor-pointer transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-sky transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="/cv.pdf"
          className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
        >
          Download CV
        </a>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800/95 backdrop-blur-lg border-t border-accent-sky/10"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-300 hover:text-accent-sky cursor-pointer transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/cv.pdf" className="btn-primary text-sm w-full justify-center">
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
