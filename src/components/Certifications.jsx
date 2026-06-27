import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiBook, FiExternalLink } from 'react-icons/fi'

const certifications = [
  // Earned certs - add real ones here when available
  // {
  //   title: 'Google Data Analytics Professional Certificate',
  //   issuer: 'Google / Coursera',
  //   date: '2024',
  //   link: '#',
  //   badge: '🎓',
  // },
]

const currentlyStudying = [
  {
    title: 'Data Warehouse Fundamentals',
    platform: 'Coursera / Udemy',
    progress: 65,
    color: 'bg-accent-sky',
  },
  {
    title: 'Big Data Fundamentals with Spark',
    platform: 'DataCamp / edX',
    progress: 30,
    color: 'bg-accent-indigo',
  },
  {
    title: 'Cloud Data Engineering (AWS/GCP)',
    platform: 'AWS Training',
    progress: 15,
    color: 'bg-cyan-400',
  },
  {
    title: 'Apache Airflow for Data Pipelines',
    platform: 'Udemy',
    progress: 20,
    color: 'bg-emerald-400',
  },
]

const pinned = [
  { name: 'healthcare-analytics-platform', desc: 'ETL + FastAPI + React + PostgreSQL', lang: 'Python', color: 'bg-blue-500' },
  { name: 'serandibx-booking', desc: 'Event platform with JWT auth', lang: 'Python', color: 'bg-purple-500' },
  { name: 'etl-pipeline', desc: 'CSV → Pandas → PostgreSQL pipeline', lang: 'Python', color: 'bg-emerald-500' },
  { name: 'event-booking-data-warehouse', desc: 'Event booking platform data warehouse (WIP)', lang: 'SQL', color: 'bg-amber-500' },
  { name: 'data-cleaning-toolkit', desc: 'Reusable Pandas cleaning utilities', lang: 'Python', color: 'bg-pink-500' },
  { name: 'hidden-location-detector', desc: 'ML-based location detection', lang: 'Python', color: 'bg-cyan-500' },
]

function ProgressBar({ label, platform, progress, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-1">
        <div>
          <p className="text-sm font-semibold text-white">{label}</p>
          <p className="text-xs text-muted">{platform}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-accent-sky animate-pulse" />
          <span className="text-xs text-accent-sky">Active</span>
        </div>
      </div>
      <div className="mt-3 h-1.5 bg-navy-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${progress}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        />
      </div>
      <p className="text-right text-xs text-muted mt-1">{progress}%</p>
    </motion.div>
  )
}

export default function Certifications() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="certifications" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Currently Studying */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FiBook className="text-accent-sky" />
              Currently Studying
            </h3>
            <div className="space-y-4">
              {currentlyStudying.map((item, i) => (
                <ProgressBar
                  key={item.title}
                  label={item.title}
                  platform={item.platform}
                  progress={item.progress}
                  color={item.color}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* GitHub Repos */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FiAward className="text-accent-sky" />
              Pinned GitHub Repositories
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {pinned.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={`https://github.com/GeethDhananjaya/${repo.name}`}
                  id={`repo-${repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-4 flex items-center gap-3 hover:scale-[1.02] hover:border-accent-sky/30 transition-all duration-300 group"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-navy-700/80 flex items-center justify-center text-lg">
                      📁
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-mono font-semibold text-accent-sky group-hover:text-white transition-colors truncate">
                      {repo.name}
                    </p>
                    <p className="text-xs text-muted truncate">{repo.desc}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <span className={`w-2 h-2 rounded-full ${repo.color}`} />
                      {repo.lang}
                    </span>
                    <FiExternalLink className="text-muted group-hover:text-accent-sky transition-colors" size={13} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* GitHub stats embed */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 glass-card p-4"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=GeethDhananjaya&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1B2A&title_color=38BDF8&icon_color=818CF8&text_color=94A3B8"
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
