import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/*export default {
  server: {
    port: 5500,
    host: true
  }
};*/

export default defineConfig({
  plugins: [react()],
})
