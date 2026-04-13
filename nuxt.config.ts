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

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/vc2olalw4/'
    }
  },

  googleFonts: {
    families: {
      Outfit: [300, 400, 500, 600, 700, 800, 900],
      'Plus Jakarta Sans': {
        wght: [300, 400, 500, 600, 700, 800],
        ital: [400]
      }
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true, // Download font files to serve locally (best for LCP)
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
        { name: 'description', content: 'Portfolio of Isnanto Budi Nurrahman, a Software Engineer and Full-Stack Developer in Jakarta, Indonesia. Specializing in Vue.js, Angular, Flutter, Go, and high-performance SaaS applications.' },
        { name: 'keywords', content: 'Isnanto Budi Nurrahman, Software Engineer Jakarta, Full-Stack Developer Indonesia, Vue.js Developer, Flutter Developer Jakarta, SaaS Architecture, Web Development, Mobile Development, Web Developer Indonesia' },
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
        { rel: 'icon', type: 'image/svg+xml', href: '/ib-logo.svg' }
      ]
    }
  }
})
