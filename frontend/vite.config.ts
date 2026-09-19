import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The three.js WebGL background is deliberately isolated in its own
    // lazy-loaded chunk (~500 kB), fetched only when the layout mounts.
    chunkSizeWarningLimit: 600,
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
