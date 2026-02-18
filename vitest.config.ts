import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '#app': '@nuxt/test-utils/dist/runtime/app.mjs',
      '~': new URL('./app', import.meta.url).pathname,
      '@': new URL('./app', import.meta.url).pathname,
    }
  }
})
