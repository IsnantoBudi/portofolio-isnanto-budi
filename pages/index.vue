<script setup lang="ts">
// Nuxt 3 auto-imports components, no need to import them manually.
// Home page layout as seen in App.vue previously.

useHead({
  title: 'Isnanto Budi Nurrahman — Portofolio'
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>
