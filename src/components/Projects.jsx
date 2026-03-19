import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '../data/portfolioData'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'

const techColors = {
  'HTML': 'text-orange-400 border-orange-400/20 bg-orange-400/5',
  'CSS': 'text-blue-400 border-blue-400/20 bg-blue-400/5',
  'JavaScript': 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
  'PHP': 'text-purple-400 border-purple-400/20 bg-purple-400/5',
  'MySQL': 'text-teal-400 border-teal-400/20 bg-teal-400/5',
  'ASP.Net': 'text-blue-500 border-blue-500/20 bg-blue-500/5',
  'C#': 'text-green-400 border-green-400/20 bg-green-400/5',
  'VB.Net': 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
  'SQL Server': 'text-red-400 border-red-400/20 bg-red-400/5',
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-24 bg-dark-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">My Work</p>
          <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="glass-card p-6 flex flex-col group cursor-default relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity duration-500 ${
                  hovered === i ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Category badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent mb-4 self-start">
                <FiCode size={12} />
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-slate-500 text-xs">
                    <span className="text-primary mt-0.5">◆</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 rounded text-xs font-mono border ${
                      techColors[t] || 'text-slate-400 border-white/10 bg-white/5'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
