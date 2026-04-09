// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/style.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: 'vercel'
  },

  app: {
    head: {
      title: 'Isnanto Budi Nurrahman — Full-Stack & Mobile Developer',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio Isnanto Budi Nurrahman — Full-Stack Developer berpengalaman dalam Angular, Flutter, Go, dan arsitektur SaaS.' },
        { name: 'keywords', content: 'Isnanto Budi Nurrahman, Software Engineer Jakarta, Full-Stack Developer Indonesia, Vue.js Developer, Flutter Developer Jakarta, SaaS Architecture' },
        { name: 'author', content: 'Isnanto Budi Nurrahman' },
        { name: 'geo.region', content: 'ID-JK' },
        { name: 'geo.placename', content: 'Jakarta' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.isnantobudi.online' },
        { property: 'og:title', content: 'Isnanto Budi Nurrahman — Portfolio' },
        { property: 'og:description', content: 'Explore the portfolio of Isnanto Budi Nurrahman, showcasing expertise in Full-Stack and Mobile development.' },
        { property: 'og:image', content: 'https://www.isnantobudi.online/ib-logo.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@isnantobudi' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/ib-logo.svg' },
        // DNS prefetch for external resource CDNs
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
        // Preconnect for fonts (critical path)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Google Fonts with font-display=swap to prevent render-blocking
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap' }
      ]
    }
  }
})
