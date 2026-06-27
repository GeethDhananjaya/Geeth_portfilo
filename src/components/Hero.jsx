import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiMail, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-scroll'
import avatar from '../assets/avatar.png'

const ROLES = [
  'Data Engineering Student',
  'ETL Pipeline Builder',
  'Data Warehouse Learner',
  'Cloud Data Enthusiast',
]

function useTypewriter(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    }

    setText(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.radius = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle())

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(56,189,248,${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      drawLines()
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0 w-full h-full" />
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-12, 0, -12],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-90" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-sky/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl" />

      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-700/60 border border-accent-sky/20 text-accent-sky text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-sky animate-pulse" />
            Open to Internships 2025–2026
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Geeth Isuru</span>
          </h1>

          <p className="text-xl text-slate-400 mb-2">Data Science Undergraduate</p>
          <div className="text-2xl font-bold text-white mb-6 h-8">
            <span className="text-accent-sky">{role}</span>
            <span className="text-accent-sky animate-pulse">|</span>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            Building{' '}
            <span className="text-accent-sky font-semibold">ETL Pipelines</span> •{' '}
            <span className="text-accent-indigo font-semibold">Data Warehouses</span> •{' '}
            <span className="text-cyan-400 font-semibold">Cloud Data Solutions</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/cv.pdf" id="hero-download-cv" className="btn-primary">
              <FiDownload /> Download CV
            </a>
            <a
              href="https://github.com/GeethDhananjaya"
              id="hero-github"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiGithub /> GitHub
            </a>
            <Link to="contact" smooth duration={500} id="hero-contact">
              <button className="btn-outline">
                <FiMail /> Contact Me
              </button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/5">
            {[
              { value: '4+', label: 'Projects Built' },
              { value: '10+', label: 'Technologies' },
              { value: '3rd', label: 'Year SLIIT' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-sky via-accent-indigo to-cyan-400 opacity-20 blur-2xl scale-110" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-sky/30 shadow-2xl glow-blue">
              <img src={avatar} alt="Geeth Isuru" className="w-full h-full object-cover" />
            </div>
            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 text-sm font-medium"
            >
              <span className="text-accent-sky">⚡</span> Aspiring Data Engineer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-medium"
            >
              <span className="text-accent-indigo">🎓</span> SLIIT
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link to="about" smooth duration={500} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted hover:text-accent-sky transition-colors"
        >
          <span className="text-xs">Scroll</span>
          <FiArrowDown size={18} />
        </motion.div>
      </Link>
    </section>
  )
}
