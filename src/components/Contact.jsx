import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { personal } from '../data/portfolioData'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Let's Connect</p>
          <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            I'm actively looking for new opportunities. Whether you have a question, a project idea,
            or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Email card */}
            <div
              className="glass-card p-6 flex items-center gap-5 cursor-pointer hover:border-primary/30 border border-transparent transition-all duration-300 group"
              onClick={copyEmail}
              title="Click to copy email"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:animate-glow">
                <FiMail size={20} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-slate-500 text-xs font-mono mb-1 uppercase tracking-wider">Email</p>
                <p className="text-white text-sm font-medium truncate">{personal.email}</p>
                <p className="text-slate-600 text-xs mt-0.5">{copied ? '✓ Copied!' : 'Click to copy'}</p>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${personal.phone}`}
              className="glass-card p-6 flex items-center gap-5 hover:border-accent/30 border border-transparent transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FiPhone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono mb-1 uppercase tracking-wider">Phone</p>
                <p className="text-white text-sm font-medium">{personal.phone}</p>
              </div>
            </a>

            {/* Location */}
            <div className="glass-card p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                <FiMapPin size={20} className="text-purple" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono mb-1 uppercase tracking-wider">Location</p>
                <p className="text-white text-sm font-medium">{personal.location}</p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-dark-600/60 border border-white/5 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
                >
                  <FiGithub size={16} />
                  GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-dark-600/60 border border-white/5 text-slate-300 hover:text-accent hover:border-accent/30 transition-all duration-200 text-sm"
                >
                  <FiLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/8 to-transparent rounded-tr-full" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-glow-blue">
                <FiSend size={24} className="text-white" />
              </div>

              <h3 className="text-white font-bold text-2xl mb-3">
                Open to Opportunities
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                I'm actively seeking roles in Cloud Development, DevOps, and Full Stack Engineering.
                If you're looking for a dedicated developer who can build and ship reliable systems — let's talk!
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  'Cloud / DevOps Engineer roles',
                  'Full Stack Developer positions',
                  'Freelance & Contract work',
                  'Open Source collaborations',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="btn-primary justify-center relative"
            >
              <FiMail size={18} />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
