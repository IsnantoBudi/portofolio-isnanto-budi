<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ThreeBackground from './components/ThreeBackground.vue';
</script>

<template>
  <div class="min-h-screen text-[var(--color-text)] selection:bg-primary selection:text-white transition-colors duration-500">
    <ThreeBackground />
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

<style>
html {
  scroll-behavior: smooth;
}
</style>
