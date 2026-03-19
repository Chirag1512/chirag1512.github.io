import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/portfolioData'
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Work History</p>
          <h2 className="section-heading">Professional <span className="gradient-text">Experience</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="relative pl-16 md:pl-0 mb-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow-blue border-2 border-dark-900" />

              <div className="md:w-5/12 md:ml-auto glass-card p-8 relative">
                {/* Role badge */}
                <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiBriefcase size={16} className="text-accent flex-shrink-0" />
                      <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                    </div>
                    <p className="text-primary font-semibold text-base">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-dark-600/50 px-3 py-1 rounded-full border border-white/5">
                      <FiCalendar size={11} />
                      {exp.duration}
                    </span>
                    <span className="text-xs text-green-400 font-medium">{exp.type}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <FiCheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
