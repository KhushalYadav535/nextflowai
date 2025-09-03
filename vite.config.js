import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    hmr: {
      port: 3001
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    force: true
  },
  define: {
    global: 'globalThis'
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  assetsInclude: ['**/*.js', '**/*.css', '**/*.html']
})
