<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue';

import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';

// Async components (Below the fold)
const ThreeBackground = defineAsyncComponent(() => import('./components/ThreeBackground.vue'));
const AboutSection = defineAsyncComponent(() => import('./components/AboutSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('./components/ExperienceSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('./components/SkillsSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('./components/ProjectsSection.vue'));
const ContactSection = defineAsyncComponent(() => import('./components/ContactSection.vue'));

// Detail pages (only loaded when clicked)
const TenantMasterDetail = defineAsyncComponent(() => import('./components/project-details/TenantMasterDetail.vue'));
const InsuranceWebDetail = defineAsyncComponent(() => import('./components/project-details/InsuranceWebDetail.vue'));
const InsuranceMobileDetail = defineAsyncComponent(() => import('./components/project-details/InsuranceMobileDetail.vue'));
const SyncBoardDetail = defineAsyncComponent(() => import('./components/project-details/SyncBoardDetail.vue'));
const AjarVisualDetail = defineAsyncComponent(() => import('./components/project-details/AjarVisualDetail.vue'));

import { useNavigation } from './composables/useNavigation';

const { currentView } = useNavigation();

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="min-h-screen text-[var(--color-text)] selection:bg-primary selection:text-white transition-colors duration-500">
    <ThreeBackground v-if="!isMobile" />
    <NavBar v-if="currentView === 'home'" />
    <main v-if="currentView === 'home'">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <main v-else-if="currentView === 'tenant-master'">
      <TenantMasterDetail />
    </main>
    <main v-else-if="currentView === 'insurance-web'">
      <InsuranceWebDetail />
    </main>
    <main v-else-if="currentView === 'insurance-mobile'">
      <InsuranceMobileDetail />
    </main>
    <main v-else-if="currentView === 'sync-board'">
      <SyncBoardDetail />
    </main>
    <main v-else-if="currentView === 'ajar-visual'">
      <AjarVisualDetail />
    </main>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
