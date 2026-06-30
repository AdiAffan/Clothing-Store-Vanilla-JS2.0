import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  root: new URL('./src', import.meta.url).pathname,
  base: '/Clothing-Store-Vanilla-JS2.0/',
  build: {
    outDir: '../dist', // Changes the output folder from 'dist' to 'build'
  },
})