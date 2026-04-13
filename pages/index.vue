<script setup lang="ts">
// Nuxt 3 auto-imports components, no need to import them manually.
// Home page layout as seen in App.vue previously.

useHead({
  title: 'Isnanto Budi Nurrahman — Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Isnanto Budi Nurrahman, a Software Engineer and Full-Stack Developer in Jakarta, Indonesia. Discover my frontend, backend, and mobile projects.' },
    { property: 'og:title', content: 'Isnanto Budi Nurrahman — Portfolio' },
    { property: 'og:description', content: 'Discover the portfolio of Isnanto Budi Nurrahman, a Software Engineer and Full-Stack Developer originating from Jakarta.' },
    { property: 'og:url', content: 'https://www.isnantobudi.online/' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.isnantobudi.online/' }
  ]
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <main>
      <HeroSection />
      <LazyAboutSection />
      <LazyExperienceSection />
      <LazySkillsSection />
      <LazyProjectsSection />
      <LazyContactSection />
    </main>
  </div>
</template>
