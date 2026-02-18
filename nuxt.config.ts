// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'es', name: 'Español' },
      { code: 'zh', name: '简体中文' },
      { code: 'ja', name: '日本語' },
      { code: 'ko', name: '한국어' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },
  app: {
    head: {
      title: 'Tinybatch - Precision Batch Tools',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tinybatch is a collection of high-performance, precision-focused batch processing tools with a retro aesthetic.' },
        { name: 'keywords', content: 'batch processing, tools, image optimizer, csv to json, retro design, developer tools' },
        { property: 'og:title', content: 'Tinybatch - Precision Batch Tools' },
        { property: 'og:description', content: 'High-performance batch processing tools with a retro aesthetic.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://tinybatch.dev' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
    }
  },
  devServer: {
    port: 3333
  }
})
