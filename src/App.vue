<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ThreeBackground from './components/ThreeBackground.vue';
import TenantMasterDetail from './components/project-details/TenantMasterDetail.vue';
import InsuranceWebDetail from './components/project-details/InsuranceWebDetail.vue';
import InsuranceMobileDetail from './components/project-details/InsuranceMobileDetail.vue';
import { useNavigation } from './composables/useNavigation';

const { currentView } = useNavigation();
</script>

<template>
  <div class="min-h-screen text-[var(--color-text)] selection:bg-primary selection:text-white transition-colors duration-500">
    <ThreeBackground />
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
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
