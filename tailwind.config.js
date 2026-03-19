/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: '#3b82f6',
        accent: '#06b6d4',
        purple: '#8b5cf6',
        dark: {
          900: '#020817',
          800: '#0a0f1e',
          700: '#0f172a',
          600: '#1e293b',
          500: '#334155',
        },
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, #020817 0%, #0a0f1e 60%, #0f172a 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #3b82f6' },
          to: { boxShadow: '0 0 30px #06b6d4, 0 0 60px #3b82f640' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59,130,246,0.35)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.35)',
        card: '0 4px 32px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
