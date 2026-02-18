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
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Tinybatch - Precision Batch Tools',
      titleTemplate: '%s | Tinybatch',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tinybatch is a collection of high-performance, precision-focused batch processing tools with a retro aesthetic.' },
        { name: 'keywords', content: 'batch processing, tools, image optimizer, csv to json, retro design, developer tools' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Tinybatch' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Tinybatch - Precision Batch Tools' },
        { name: 'twitter:description', content: 'High-performance batch processing tools with a retro aesthetic.' },
        { property: 'og:title', content: 'Tinybatch - Precision Batch Tools' },
        { property: 'og:description', content: 'High-performance batch processing tools with a retro aesthetic.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://tinybatch.dev' },
        { property: 'og:site_name', content: 'Tinybatch' },
        { property: 'og:locale', content: 'en_US' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://tinybatch.dev' },
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
  },
  nitro: {
    prerender: {
      failOnError: false,
      ignore: ['/account/settings', '/contact', '/terms', '/products/**']
    }
  }
})
