import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '../data/portfolioData'
import { FiMail, FiPhone, FiMapPin, FiMusic, FiActivity, FiNavigation } from 'react-icons/fi'

const interestIcons = {
  'Gym & Sports': FiActivity,
  Travel: FiNavigation,
  Guitar: FiMusic,
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Who I Am</p>
          <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-4">
                Full Stack → ☁️ Cloud Developer
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {personal.objective}
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                I bridge the gap between development and operations — writing clean,
                production-ready code and deploying it on robust cloud infrastructure.
                Currently pursuing my MCA while applying my skills in real-world cloud projects.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: FiMail, label: personal.email, href: `mailto:${personal.email}` },
                  { icon: FiPhone, label: personal.phone, href: `tel:${personal.phone}` },
                  { icon: FiMapPin, label: personal.location, href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={15} className="text-primary" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-400 hover:text-accent transition-colors text-sm">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-slate-400 text-sm">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Interests */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: '1+', label: 'Year Experience' },
                { value: '9.2', label: 'Avg CGPA' },
                { value: '5+', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* What I bring */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                What I Bring
              </h4>
              <ul className="space-y-3">
                {[
                  'Cloud-native deployments on AWS with Docker & Kubernetes',
                  'Full stack web apps with React, Node.js, Laravel',
                  'CI/CD pipeline setup & automation scripting',
                  'Linux server administration & monitoring',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-accent mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h4 className="text-white font-semibold mb-4">Beyond Code</h4>
              <div className="flex gap-4">
                {personal.interests.map((interest) => {
                  const Icon = interestIcons[interest] || FiActivity
                  return (
                    <div
                      key={interest}
                      className="flex flex-col items-center gap-2 flex-1 p-3 rounded-xl bg-dark-600/50 border border-white/5 hover:border-accent/30 transition-colors duration-200"
                    >
                      <Icon size={20} className="text-accent" />
                      <span className="text-slate-400 text-xs text-center">{interest}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
