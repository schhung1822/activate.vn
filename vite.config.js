import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { adminApiPlugin } from './server/admin/vitePlugin.js'

// https://vite.dev/config/
export default defineConfig({
  // adminApiPlugin: API /api/admin cho trang /admin khi chạy `npm run dev`
  // (trên Vercel thì do api/admin.js đảm nhận)
  plugins: [react(), adminApiPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
