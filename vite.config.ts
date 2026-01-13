import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue()],
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
        manualChunks: {
          // Core Vue runtime
          'vue-vendor': ['vue', '@vueuse/core'],
          // UI components library
          'ui-vendor': ['lucide-vue-next', 'class-variance-authority', 'clsx', 'tailwind-merge']
        }
      }
    }
  }
})
