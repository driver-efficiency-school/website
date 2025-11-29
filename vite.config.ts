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
