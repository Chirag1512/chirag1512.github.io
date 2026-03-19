import { personal } from '../data/portfolioData'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 bg-dark-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-mono text-lg font-bold gradient-text tracking-tight">
            &lt;chirag /&gt;
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="text-slate-500 hover:text-white transition-colors duration-200">
              <FiGithub size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="text-slate-500 hover:text-accent transition-colors duration-200">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email"
              className="text-slate-500 hover:text-primary transition-colors duration-200">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className="h-px bg-white/5 my-6" />

        <div className="text-center text-slate-600 text-xs">
          <p>
            &copy; {year} {personal.name}.
          </p>
        </div>
      </div>
    </footer>
  )
}
