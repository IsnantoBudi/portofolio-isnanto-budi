<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="min-h-screen text-[var(--color-text)] selection:bg-primary selection:text-white transition-colors duration-500 bg-[var(--color-bg)]">
    <!-- ThreeJS only on Desktop and Client-side -->
    <ClientOnly>
      <ThreeBackground v-if="!isMobile" />
    </ClientOnly>
    
    <NuxtPage />
    
    <!-- Speed Insights from Vercel (Auto-injected by Nuxt Vercel Preset usually, but we keep it if explicit) -->
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

:root {
  /* Ensuring custom properties are available globally */
}
</style>
