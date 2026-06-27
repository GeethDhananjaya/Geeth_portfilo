import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDatabase, FiAward, FiBook, FiTrendingUp } from 'react-icons/fi'

const stats = [
  { icon: FiDatabase, value: '4+', label: 'Projects Completed', color: 'text-accent-sky' },
  { icon: FiTrendingUp, value: '3+', label: 'Years Coding', color: 'text-accent-indigo' },
  { icon: FiBook, value: '10+', label: 'Technologies', color: 'text-cyan-400' },
  { icon: FiAward, value: 'SLIIT', label: 'University', color: 'text-emerald-400' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
              <p>
                I am a{' '}
                <span className="text-white font-semibold">Data Science undergraduate at SLIIT</span>{' '}
                with a strong passion for{' '}
                <span className="text-accent-sky font-semibold">Data Engineering</span> and{' '}
                <span className="text-accent-indigo font-semibold">Cloud Data Platforms</span>.
              </p>
              <p>
                I enjoy designing <strong className="text-white">ETL pipelines</strong>, building{' '}
                <strong className="text-white">data warehouses</strong>, and transforming raw data into
                meaningful insights that drive real-world decisions.
              </p>
              <p>
                Currently, I am expanding my skills in{' '}
                <span className="text-cyan-400 font-semibold">Data Warehousing</span>,{' '}
                <span className="text-cyan-400 font-semibold">Big Data</span>, and{' '}
                <span className="text-cyan-400 font-semibold">Cloud Technologies</span>{' '}
                while building practical projects that reflect my growth journey.
              </p>
              <p>
                My path:{' '}
                <span className="font-mono text-sm bg-navy-700/80 px-2 py-1 rounded text-accent-sky">
                  Python → SQL → ETL → Data Warehouse → Big Data → Cloud → Data Engineer
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['#DataEngineering', '#ETL', '#PostgreSQL', '#Python', '#BigData', '#DataWarehouse'].map((tag) => (
                <span key={tag} className="text-xs font-mono text-accent-sky/70 bg-accent-sky/5 border border-accent-sky/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className={`mx-auto text-3xl mb-3 ${stat.color}`} />
                <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Mini pipeline visual */}
            <div className="col-span-2 glass-card p-5">
              <div className="flex items-center justify-between gap-1 text-xs font-mono overflow-x-auto">
                {['Raw Data', '→', 'ETL', '→', 'PostgreSQL', '→', 'Analysis', '→', 'Insights'].map((step, i) => (
                  <span
                    key={i}
                    className={
                      step === '→'
                        ? 'text-accent-sky/40'
                        : 'px-2 py-1 rounded bg-navy-700/60 text-accent-sky whitespace-nowrap'
                    }
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
