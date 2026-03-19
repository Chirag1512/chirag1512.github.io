import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/portfolioData'
import {
  SiPython, SiGo, SiReact, SiNextdotjs, SiNodedotjs, SiLaravel,
  SiMysql, SiMongodb, SiDocker, SiKubernetes,
  SiGit, SiLinux,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FiServer, FiMonitor } from 'react-icons/fi'

const techIcons = {
  Python: SiPython,
  'Go (Golang)': SiGo,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  'AWS (EC2, S3)': FaAws,
  'Git & GitHub': SiGit,
  Linux: SiLinux,
  Windows: FiMonitor,
  'CI/CD Pipelines': FiServer,
  'Linux Server Admin': SiLinux,
  'RESTful APIs': FiServer,
}

function SkillBar({ name, level, delay = 0, inView }) {
  const Icon = techIcons[name] || FiServer
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-accent flex-shrink-0" />
          <span className="text-slate-300 text-sm font-medium">{name}</span>
        </div>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-24 bg-dark-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">What I Know</p>
          <h2 className="section-heading">Technical <span className="gradient-text">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Technical Skills */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Languages & Frameworks
            </h3>
            {skills.technical.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={0.1 * i} inView={inView} />
            ))}
          </motion.div>

          {/* DevOps Skills */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              Cloud & DevOps
            </h3>
            {skills.devops.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={0.1 * i} inView={inView} />
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8"
        >
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple" />
            Soft Skills & OS
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((s) => (
              <span key={s} className="skill-badge border-purple/20 hover:border-purple/50 hover:text-purple">
                {s}
              </span>
            ))}
            <span className="w-px bg-white/10 mx-2" />
            {skills.os.map((s) => {
              const Icon = techIcons[s] || FiServer
              return (
                <span key={s} className="skill-badge flex items-center gap-1.5">
                  <Icon size={13} className="text-accent" />
                  {s}
                </span>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
