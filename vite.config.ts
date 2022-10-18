import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  root: 'src',
  base: command === 'serve' ? '' : '/dist/',
  build: {
    // output dir for production build
    outDir: '../dist',
    emptyOutDir: true,
    // emit manifest so PHP can find the hashed files
    manifest: true,
    // our entry
    rollupOptions: {
      input: './src/main.tsx',
    }
  },

  server: {
    host: "0.0.0.0",
    origin: 'http://vite-project.ddev.site:5273',
    // we need a strict port to match on PHP side
    strictPort: true,
    // Vite port is defined by https://github.com/torenware/ddev-viteserve
    port: parseInt(process.env.VITE_PRIMARY_PORT ?? '5173'),
  },
}))