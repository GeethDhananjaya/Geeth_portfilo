import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiDownload, FiMapPin, FiPhone } from 'react-icons/fi'

const socials = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'sampathgeeth34@gmail.com',
    href: 'mailto:sampathgeeth34@gmail.com',
    id: 'contact-email',
    color: 'hover:text-red-400',
  },
  {
    icon: FiPhone,
    label: 'WhatsApp / Phone',
    value: '0766008897',
    href: 'https://wa.me/94766008897',
    id: 'contact-whatsapp',
    color: 'hover:text-green-400',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/GeethDhananjaya',
    href: 'https://github.com/GeethDhananjaya',
    id: 'contact-github',
    color: 'hover:text-white',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/geeth-dhananjaya',
    href: 'https://www.linkedin.com/in/geeth-dhananjaya-518560413/',
    id: 'contact-linkedin',
    color: 'hover:text-blue-400',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Sri Lanka',
    href: null,
    id: null,
    color: 'text-slate-500',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const handleChange = (e) => setFormState((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to a form backend (Formspree, EmailJS, etc.)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-800" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent-sky/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading mx-auto">
            Interested in collaborating, offering an internship, or just want to talk data?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-muted mb-8 leading-relaxed">
              Whether you're a recruiter looking for a Data Engineering intern, a developer wanting
              to collaborate, or someone curious about my projects — feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {socials.map((social) => (
                <div key={social.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-700/60 border border-white/10 flex items-center justify-center">
                    <social.icon className="text-accent-sky text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{social.label}</p>
                    {social.href ? (
                      <a
                        id={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-sm font-medium text-slate-300 ${social.color} transition-colors`}
                      >
                        {social.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-300">{social.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href="/cv.pdf" id="contact-download-cv" className="btn-primary inline-flex">
              <FiDownload /> Download My CV
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-muted mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-navy-700/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-sky/50 focus:ring-1 focus:ring-accent-sky/20 transition-colors placeholder-slate-600"
                />
              </div>
              <div>
                <label htmlFor="contact-email-input" className="block text-sm text-muted mb-2">
                  Email Address
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-navy-700/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-sky/50 focus:ring-1 focus:ring-accent-sky/20 transition-colors placeholder-slate-600"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-navy-700/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-sky/50 focus:ring-1 focus:ring-accent-sky/20 transition-colors placeholder-slate-600 resize-none"
                />
              </div>
              <motion.button
                id="contact-submit"
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full justify-center"
              >
                {sent ? '✅ Message Sent!' : <><FiSend /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
