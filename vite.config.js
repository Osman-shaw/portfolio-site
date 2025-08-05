import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
    // eslint-disable-next-line no-undef
    base: process.env.VITE_BASE_PATH || '/', // Set base path for deployment
  server: {
    // eslint-disable-next-line no-undef
    port: process.env.PORT || 3000, // Use PORT from .env or default to 3000
   
  }
})
