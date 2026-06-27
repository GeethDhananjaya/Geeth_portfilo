import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineYears = [
  {
    year: '2023',
    side: 'left',
    color: 'from-slate-600 to-slate-500',
    dotColor: 'bg-slate-500',
    title: 'The Beginning',
    skills: ['Computer Science Fundamentals', 'Java OOP', 'Basic Algorithms', 'Data Structures', 'SLIIT Enrolment'],
  },
  {
    year: '2024',
    side: 'right',
    color: 'from-blue-600 to-cyan-500',
    dotColor: 'bg-blue-500',
    title: 'Data Foundations',
    skills: ['Python', 'SQL', 'PostgreSQL', 'Java (Advanced)', 'Database Design', 'First Projects'],
  },
  {
    year: '2025',
    side: 'left',
    color: 'from-purple-600 to-indigo-500',
    dotColor: 'bg-accent-indigo',
    title: 'Engineering Skills',
    skills: ['ETL Pipelines', 'REST APIs', 'FastAPI', 'React', 'Pandas & NumPy', 'Scikit-learn', 'Git & GitHub'],
  },
  {
    year: '2026',
    side: 'right',
    color: 'from-accent-sky to-cyan-400',
    dotColor: 'bg-accent-sky',
    title: '🚀 Current Focus',
    skills: ['Data Warehouse Design', 'Star Schema', 'Big Data', 'Cloud Data Engineering', 'Apache Spark', 'Apache Airflow', 'Docker'],
    current: true,
  },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: item.side === 'left' ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row items-start gap-4 md:gap-0`}
    >
      {/* Card - takes half width on desktop */}
      <div className={`md:w-[calc(50%-2.5rem)] w-full ${item.side === 'left' ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
        <div
          className={`glass-card p-6 ${item.current ? 'ring-1 ring-accent-sky/30' : ''}`}
          style={item.current ? { boxShadow: '0 0 30px rgba(56,189,248,0.12)' } : {}}
        >
          <div className={`inline-flex items-center gap-2 mb-3 ${item.side === 'right' ? '' : 'md:flex-row-reverse'} flex-row`}>
            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
              {item.year}
            </span>
            {item.current && (
              <span className="text-xs text-accent-sky flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky animate-pulse" /> Active
              </span>
            )}
          </div>

          <h3 className={`font-bold text-white mb-3 ${item.current ? 'text-accent-sky' : ''}`}>
            {item.title}
          </h3>

          <div className={`flex flex-wrap gap-2 ${item.side === 'left' ? 'md:justify-end' : 'justify-start'}`}>
            {item.skills.map((skill) => (
              <span
                key={skill}
                className={`text-xs px-2 py-1 rounded-md ${
                  item.current
                    ? 'bg-accent-sky/10 text-accent-sky border border-accent-sky/20'
                    : 'bg-white/5 text-slate-400 border border-white/10'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
        <div className={`w-5 h-5 rounded-full ${item.dotColor} border-4 border-navy-900 z-10 ${item.current ? 'animate-pulse' : ''}`} />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
    </motion.div>
  )
}

export default function Journey() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="journey" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Learning Journey</h2>
          <p className="section-subheading mx-auto">
            From computer science fundamentals to data engineering — a timeline of skills
            I've acquired and am currently mastering.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-sky/30 to-transparent" />

          <div className="space-y-12">
            {timelineYears.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>

          {/* Future node */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="glass-card px-8 py-4 text-center border-accent-sky/20 ring-1 ring-accent-sky/10">
              <p className="text-slate-400 text-sm">
                AWS / GCP Certified • Senior Data Engineer • Building at Scale
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
