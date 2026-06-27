import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

const projects = [
  {
    id: 'healthcare',
    featured: true,
    status: 'completed',
    statusLabel: '⭐ Featured',
    statusColor: 'bg-accent-sky/20 text-accent-sky border-accent-sky/30',
    title: 'Healthcare Analytics Platform',
    subtitle: 'Full-Stack Data Engineering Dashboard',
    description:
      'A comprehensive healthcare analytics platform with a full ETL pipeline, real-time dashboards, and REST API. Ingests patient data from CSV sources, cleans and transforms using Python, stores in PostgreSQL, and visualizes through a React dashboard with FastAPI backend.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Pandas', 'REST API', 'ETL'],
    github: 'https://github.com/GeethDhananjaya/healthcare-analytics',
    demo: '#',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-accent-sky/20',
    pipeline: ['CSV Files', 'Python', 'Pandas', 'Cleaning', 'PostgreSQL', 'FastAPI', 'React'],
    highlights: [
      'ETL pipeline processing 10K+ patient records',
      'Real-time analytics dashboard',
      'RESTful API with FastAPI',
      'PostgreSQL data warehouse schema',
    ],
  },
  {
    id: 'serandibx',
    featured: false,
    status: 'completed',
    statusLabel: '✅ Completed',
    statusColor: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    title: 'SerandibX Event Booking Platform',
    subtitle: 'Full-Stack Event Management System',
    description:
      'A complete event booking platform with organizer dashboards, ticket booking flows, authentication, and database-driven event management. Built with a robust system architecture and normalized database design.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'REST API', 'Python'],
    github: 'https://github.com/GeethDhananjaya/serandibx',
    demo: '#',
    gradient: 'from-purple-600/20 to-pink-600/20',
    border: 'border-accent-indigo/20',
    pipeline: null,
    highlights: [
      'Organizer & attendee dashboards',
      'JWT authentication system',
      'Ticket booking & QR codes',
      'ER diagram driven database design',
    ],
  },
  {
    id: 'etl-pipeline',
    featured: false,
    status: 'completed',
    statusLabel: '✅ Completed',
    statusColor: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    title: 'ETL Data Pipeline',
    subtitle: 'Python-Based Extract, Transform, Load',
    description:
      'A standalone ETL pipeline that extracts raw data from multiple CSV sources, applies data cleaning and transformation with Pandas, and loads the processed data into PostgreSQL for SQL analysis and reporting.',
    tech: ['Python', 'Pandas', 'PostgreSQL', 'NumPy', 'SQL'],
    github: 'https://github.com/GeethDhananjaya/etl-pipeline',
    demo: null,
    gradient: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-400/20',
    pipeline: ['CSV Files', 'Python', 'Pandas', 'Transform', 'PostgreSQL', 'SQL Analysis'],
    highlights: [
      'Modular ETL architecture',
      'Data quality validation',
      'Automated cleaning steps',
      'Reproducible pipeline runs',
    ],
  },
  {
    id: 'event-booking-warehouse',
    featured: false,
    status: 'in-progress',
    statusLabel: '🚧 In Progress',
    statusColor: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    title: 'Event Booking Platform Warehouse',
    subtitle: 'Star Schema • OLAP • Ticketing Analytics',
    description:
      'Building an OLAP data warehouse for ticketing and event booking analytics. Implements a Star Schema database design with fact and dimension tables (sales, attendees, organizers, events), ETL pipeline processing booking transactions, and soon to feature a BI dashboard.',
    tech: ['PostgreSQL', 'Python', 'Star Schema', 'ETL', 'Pandas', 'Data Modeling'],
    github: 'https://github.com/GeethDhananjaya/event-booking-data-warehouse',
    demo: null,
    gradient: 'from-amber-600/20 to-orange-600/20',
    border: 'border-amber-400/20',
    pipeline: null,
    progress: [
      { label: 'Data Generation', done: true },
      { label: 'PostgreSQL Setup', done: true },
      { label: 'ETL Pipeline', done: true },
      { label: 'Star Schema Design', done: true },
      { label: 'Dashboard', done: false },
      { label: 'Cloud Deployment', done: false },
    ],
    highlights: [],
  },
]

function PipelineFlow({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-1 mt-4 py-3 px-4 bg-navy-950/60 rounded-lg overflow-x-auto">
      {steps.map((step, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-navy-700/80 text-accent-sky whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && <span className="text-accent-sky/30 text-xs">→</span>}
        </span>
      ))}
    </div>
  )
}

function ProgressChecklist({ items }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm">
          <span className={item.done ? 'text-emerald-400' : 'text-slate-600'}>
            {item.done ? '✔' : '⬜'}
          </span>
          <span className={item.done ? 'text-slate-300' : 'text-slate-500'}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass-card p-6 hover:scale-[1.01] transition-all duration-300 bg-gradient-to-br ${project.gradient} ${project.border} ${
        project.featured ? 'ring-2 ring-accent-sky/20' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${project.statusColor}`}>
              {project.statusLabel}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-accent-sky mt-0.5">{project.subtitle}</p>
        </div>
        <div className="flex gap-2 shrink-0 ml-4">
          {project.github && (
            <a
              href={project.github}
              id={`${project.id}-github`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              id={`${project.id}-demo`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Pipeline or Progress */}
      {project.pipeline && <PipelineFlow steps={project.pipeline} />}
      {project.progress && <ProgressChecklist items={project.progress} />}

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <ul className="mt-4 space-y-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sky shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="projects" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-800" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            Real projects that demonstrate my journey from data extraction to analytics dashboards,
            with a focus on data engineering best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/GeethDhananjaya"
            id="view-all-github"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
