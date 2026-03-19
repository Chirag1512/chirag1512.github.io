import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

const homepage = pkg.homepage ?? ''

let base = '/'
if (homepage && !homepage.includes('<')) {
  try {
    base = new URL(homepage).pathname
  } catch {
    base = '/'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
