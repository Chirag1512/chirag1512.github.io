import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { personal } from '../data/portfolioData'

const roles = [
  'Cloud Developer',
  'Full Stack Developer',
  'DevOps Enthusiast',
  'AWS Engineer',
  'Problem Solver',
]

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(blinkTimer)
  }, [])

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1200)
      return
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const timeout = setTimeout(
      () => setSubIndex((s) => s + (reverse ? -1 : 1)),
      reverse ? 60 : 100
    )
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  return (
    <span className="gradient-text">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-accent`}>|</span>
    </span>
  )
}

const floatingOrbs = [
  { size: 400, x: '-10%', y: '-10%', color: 'from-primary/20 to-transparent', delay: 0 },
  { size: 300, x: '70%', y: '60%', color: 'from-accent/15 to-transparent', delay: 2 },
  { size: 200, x: '40%', y: '20%', color: 'from-purple/10 to-transparent', delay: 4 },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Orbs */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-radial pointer-events-none ${orb.color} blur-3xl animate-float`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            animationDelay: `${orb.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white leading-tight mb-3"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personal.name.split(' ')[0]}</span>
              <br />
              {personal.name.split(' ')[1]}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 font-medium mb-6 h-8"
            >
              <TypeWriter words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 leading-relaxed mb-8 max-w-lg text-base"
            >
              {personal.objective}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a href="#contact" className="btn-primary">
                <FiMail size={18} />
                Get In Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                <HiOutlineLocationMarker size={16} className="text-accent" />
                {personal.location}
              </span>
            </motion.div>
          </div>

          {/* Right — Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 80 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 animate-spin-slow absolute inset-0 m-auto" style={{ animation: 'spin 12s linear infinite' }} />
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-accent/20 animate-spin-slow absolute inset-0 m-auto" style={{ animation: 'spin 8s linear infinite reverse' }} />

              {/* Avatar container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white/10 shadow-glow-blue flex items-center justify-center animate-float overflow-hidden">
                {/* Initials Avatar */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-7xl md:text-8xl font-black gradient-text select-none">CS</span>
                  <span className="text-slate-500 text-xs font-mono mt-1 tracking-widest">CLOUD DEV</span>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 glass-card px-4 py-2 text-sm"
              >
                <div className="text-accent font-bold text-lg">1+</div>
                <div className="text-slate-400 text-xs">Years Exp</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-1/4 glass-card px-4 py-2 text-sm"
              >
                <div className="text-primary font-bold text-lg">9.2</div>
                <div className="text-slate-400 text-xs">CGPA</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 top-4 glass-card px-3 py-1.5 text-xs"
              >
                <span className="text-green-400 font-mono">☁️ AWS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-slate-600 text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
