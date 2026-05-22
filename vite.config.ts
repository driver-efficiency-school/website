import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    allowedHosts: ['www.efficiver.com', 'efficiver.com'],
    hmr: {
      protocol: 'wss',
      host: 'www.efficiver.com',
      clientPort: 443
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Vite 7+ (rolldown bundler) requires manualChunks as a
        // function. Object form is no longer accepted. Same chunk
        // mapping as before, expressed via id-prefix matching.
        manualChunks: (id: string) => {
          if (id.includes('/node_modules/vue/') || id.includes('/node_modules/@vueuse/core/')) {
            return 'vue-vendor'
          }
          if (
            id.includes('/node_modules/lucide-vue-next/') ||
            id.includes('/node_modules/class-variance-authority/') ||
            id.includes('/node_modules/clsx/') ||
            id.includes('/node_modules/tailwind-merge/')
          ) {
            return 'ui-vendor'
          }
        }
      }
    }
  }
})
