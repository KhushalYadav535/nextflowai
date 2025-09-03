import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified development configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true
  },
  optimizeDeps: {
    force: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
