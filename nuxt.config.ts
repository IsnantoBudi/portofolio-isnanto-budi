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
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portal portofolio Isnanto Budi Nurrahman — Full-Stack & Mobile Developer berpengalaman dalam arsitektur SaaS, solusi asuransi, dan aplikasi mobile modern menggunakan Vue.js dan TypeScript.' },
        { name: 'keywords', content: 'Isnanto Budi Nurrahman, Isnanto Budi, isnanto budi portofolio, Software Engineer Indonesia, Full-Stack Developer, Mobile Developer, Web Developer Vue.js, Developer Jakarta, SaaS Architecture, TypeScript Developer, Nuxt.js' },
        { name: 'author', content: 'Isnanto Budi Nurrahman' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Isnanto Budi Nurrahman — Full-Stack & Mobile Developer' },
        { property: 'og:description', content: 'Portal portofolio Isnanto Budi Nurrahman. Spesialis arsitektur SaaS dan aplikasi mobile modern dengan Vue.js & TypeScript.' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/ib-logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap' }
      ]
    }
  }
})
