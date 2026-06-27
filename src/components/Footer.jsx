import { FiGithub, FiLinkedin, FiMail, FiDatabase } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-sky to-accent-indigo flex items-center justify-center">
                <FiDatabase className="text-white text-sm" />
              </div>
              <span className="font-bold text-lg gradient-text">Geeth.dev</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Data Science undergraduate at SLIIT. Aspiring Data Engineer building ETL pipelines,
              data warehouses, and cloud data solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'skills', 'projects', 'journey', 'contact'].map((s) => (
                <li key={s}>
                  <Link
                    to={s}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-muted hover:text-accent-sky text-sm cursor-pointer transition-colors capitalize"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: 'https://github.com/GeethDhananjaya', id: 'footer-github' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/geeth-dhananjaya-518560413/', id: 'footer-linkedin' },
                { icon: FiMail, href: 'mailto:sampathgeeth34@gmail.com', id: 'footer-email' },
              ].map(({ icon: Icon, href, id }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-navy-700/60 border border-white/10 flex items-center justify-center text-muted hover:text-accent-sky hover:border-accent-sky/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-muted text-xs mt-4">
              📍 Sri Lanka &nbsp;•&nbsp; Open to Remote Internships
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {currentYear} Geeth Isuru. Built with React + Tailwind + Framer Motion.
          </p>
          <p className="text-muted text-xs">
            <span className="text-accent-sky">Aspiring Data Engineer</span> • SLIIT
          </p>
        </div>
      </div>
    </footer>
  )
}
