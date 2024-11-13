import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/VR-WebXR/', // Change this to your GitHub repository name
  plugins: [react()],
})
