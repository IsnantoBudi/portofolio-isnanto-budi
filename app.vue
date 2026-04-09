<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useStructuredData } from '~/composables/useStructuredData';

const isMobile = ref(false);

// Global SEO/GEO Structured Data
useStructuredData();

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
    <!-- ThreeJS only on Desktop, Client-side, and Lazy-loaded -->
    <ClientOnly>
      <LazyThreeBackground v-if="!isMobile" />
    </ClientOnly>
    
    <NuxtPage />
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
