import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/portfolioData'
import { FiBook, FiCalendar, FiAward } from 'react-icons/fi'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Academic Background</p>
          <h2 className="section-heading">My <span className="gradient-text">Education</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />

              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FiBook size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-0.5">
                      {i === 0 ? 'Post Graduate' : 'Under Graduate'}
                    </p>
                    <h3 className="text-white font-bold text-lg leading-tight">{edu.degree}</h3>
                  </div>
                </div>
                {/* CGPA Badge */}
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
                  <span className="text-xl font-black gradient-text leading-none">{edu.cgpa}</span>
                  <span className="text-slate-500 text-xs mt-0.5">CGPA</span>
                </div>
              </div>

              <p className="text-accent font-semibold text-base mb-2">{edu.institution}</p>

              <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-6">
                <FiCalendar size={13} />
                {edu.duration}
              </div>

              {/* Key subjects */}
              <div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">Key Subjects</p>
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subj) => (
                    <span
                      key={subj}
                      className="skill-badge text-xs"
                    >
                      {subj}
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
