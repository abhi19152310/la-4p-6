import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', 
  publicDir: 'public',
  plugins: [react()],
  base: '/book-explorer/'   // 🔥 important for GitHub Pages
})
