import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiDatabase, FiBarChart2, FiGlobe, FiGitBranch, FiStar } from 'react-icons/fi'

const skillCategories = [
  {
    icon: FiCode,
    title: 'Programming',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(56,189,248,0.15)',
    skills: ['Python', 'SQL', 'Java', 'JavaScript'],
  },
  {
    icon: FiDatabase,
    title: 'Data Engineering',
    color: 'from-purple-500 to-indigo-500',
    glow: 'rgba(129,140,248,0.15)',
    skills: ['ETL Pipelines', 'PostgreSQL', 'Data Warehousing', 'Data Modeling', 'Data Cleaning', 'Star Schema'],
  },
  {
    icon: FiBarChart2,
    title: 'Data Analysis',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(52,211,153,0.15)',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Data Visualization'],
  },
  {
    icon: FiGlobe,
    title: 'Web Development',
    color: 'from-orange-500 to-amber-500',
    glow: 'rgba(251,146,60,0.15)',
    skills: ['React', 'FastAPI', 'REST APIs', 'Node.js'],
  },
  {
    icon: FiGitBranch,
    title: 'Version Control',
    color: 'from-rose-500 to-pink-500',
    glow: 'rgba(244,63,94,0.15)',
    skills: ['Git', 'GitHub', 'CI/CD', 'Code Review'],
  },
  {
    icon: FiStar,
    title: 'Currently Learning ⭐',
    color: 'from-accent-sky to-accent-indigo',
    glow: 'rgba(56,189,248,0.25)',
    highlight: true,
    skills: [
      'Data Warehouse Design',
      'Star & Snowflake Schema',
      'Big Data',
      'Apache Spark',
      'Apache Airflow',
      'Docker',
      'Cloud Data Engineering',
      'AWS / GCP',
    ],
  },
]

function SkillCard({ category, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card p-6 hover:scale-[1.02] transition-transform duration-300 ${
        category.highlight ? 'border-accent-sky/30 ring-1 ring-accent-sky/20' : ''
      }`}
      style={{ boxShadow: `0 0 40px ${category.glow}` }}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
        <category.icon className="text-white text-xl" />
      </div>

      <h3 className={`text-lg font-bold mb-4 ${category.highlight ? 'gradient-text' : 'text-white'}`}>
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              category.highlight
                ? 'bg-accent-sky/10 text-accent-sky border border-accent-sky/20 hover:bg-accent-sky/20'
                : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="skills" className="py-24 bg-navy-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading mx-auto">
            A curated set of tools and technologies I use to build data pipelines,
            analyze datasets, and create full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
