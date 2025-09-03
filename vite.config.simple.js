import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Completely simplified configuration for production
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
