import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { certificates, achievements, volunteer } from '../data/portfolioData'
import { FiAward, FiCalendar, FiStar, FiHeart } from 'react-icons/fi'
import { SiCoursera, SiPython } from 'react-icons/si'
import { FaGitAlt, FaAws, FaJava } from 'react-icons/fa'
import { BsRobot, BsGear } from 'react-icons/bs'

const certIconMap = {
  python: SiPython,
  git: FaGitAlt,
  ai: BsRobot,
  devops: BsGear,
  java: FaJava,
}

const rankColors = {
  '1st': 'from-yellow-500 to-amber-400',
  '2nd': 'from-slate-400 to-slate-300',
}

const rankEmoji = {
  '1st': '🥇',
  '2nd': '🥈',
}

export default function Certificates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="certificates" className="py-24 bg-dark-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Learning & Recognition</p>
          <h2 className="section-heading">Certificates & <span className="gradient-text">Achievements</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Certificates — spans 3 cols */}
          <div className="lg:col-span-3">
            <motion.h3
              variants={variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-xl mb-6 flex items-center gap-2"
            >
              <FiAward className="text-accent" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certificates.map((cert, i) => {
                const Icon = certIconMap[cert.icon] || FiAward
                return (
                  <motion.div
                    key={i}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                    className="glass-card p-5 flex items-center gap-5 group hover:border-accent/20 border border-transparent transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-accent transition-colors duration-200">
                        {cert.title}
                      </h4>
                      <p className="text-slate-500 text-xs">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono flex-shrink-0">
                      <FiCalendar size={11} />
                      {cert.date}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Achievements + Volunteer — spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Achievements */}
            <div>
              <motion.h3
                variants={variants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white font-bold text-xl mb-5 flex items-center gap-2"
              >
                <FiStar className="text-yellow-400" />
                Achievements
              </motion.h3>

              <div className="space-y-4">
                {achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.15 * i }}
                    className="glass-card p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rankColors[ach.rank]} flex items-center justify-center text-xl flex-shrink-0`}>
                        {rankEmoji[ach.rank]}
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold mb-1 leading-snug">{ach.title}</h4>
                        <p className="text-accent text-xs mb-2 font-medium">{ach.event}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Volunteer */}
            <div>
              <motion.h3
                variants={variants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white font-bold text-xl mb-5 flex items-center gap-2"
              >
                <FiHeart className="text-red-400" />
                Volunteer
              </motion.h3>

              <div className="space-y-4">
                {volunteer.map((v, i) => (
                  <motion.div
                    key={i}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.35 + 0.1 * i }}
                    className="glass-card p-5"
                  >
                    <h4 className="text-white text-sm font-bold mb-1">{v.role}</h4>
                    <p className="text-accent text-xs mb-2 font-medium">{v.event}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
