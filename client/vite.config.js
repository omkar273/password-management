import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [react()],
  server: {
    cors: true,
    port: 3000,
    origin:'http://localhost:3000'
  }
})
