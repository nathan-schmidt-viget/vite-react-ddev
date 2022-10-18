import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    // we need a strict port to match on PHP side
    strictPort: true,
    // Vite port is defined by https://github.com/torenware/ddev-viteserve
    port: 5173,
  },
})
