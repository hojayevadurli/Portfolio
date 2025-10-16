import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//to publish this through github pages
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})