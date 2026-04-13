<script setup lang="ts">
import { portfolioData } from '~/data/portfolio';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';

// Mouse-tracking radial spotlight (desktop only — skip on touch/mobile)
const spotX = ref(50);
const spotY = ref(50);
const heroRef = ref<HTMLElement | null>(null);
const isDesktop = ref(false);

const handleMouseMove = (e: MouseEvent) => {
  if (!heroRef.value) return;
  const rect = heroRef.value.getBoundingClientRect();
  spotX.value = ((e.clientX - rect.left) / rect.width) * 100;
  spotY.value = ((e.clientY - rect.top) / rect.height) * 100;
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Only enable mouse spotlight on non-touch devices (desktop)
    isDesktop.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (isDesktop.value) {
      heroRef.value?.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined' && isDesktop.value) {
    heroRef.value?.removeEventListener('mousemove', handleMouseMove);
  }
});
</script>

<template>
  <section
    id="home"
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
  >
    <!-- Geometric dot-grid background -->
    <div class="absolute inset-0 -z-20 dot-grid text-[var(--color-border)] opacity-60"></div>

    <!-- Mouse-tracking radial spotlight (desktop only) -->
    <div
      v-if="isDesktop"
      class="absolute inset-0 -z-10 transition-[background] duration-300 ease-out pointer-events-none"
      :style="{
        background: `radial-gradient(600px circle at ${spotX}% ${spotY}%, var(--spotlight-color), transparent 70%)`
      }"
    ></div>
    <!-- Static spotlight fallback for mobile -->
    <div
      v-else
      class="absolute inset-0 -z-10 pointer-events-none"
      style="background: radial-gradient(60% 40% at 50% 30%, var(--spotlight-color), transparent 70%)"
    ></div>

    <!-- Static ambient glows — hidden on mobile to save GPU -->
    <div class="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] -z-10 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-radial from-[var(--color-accent-secondary)]/10 to-transparent rounded-full blur-3xl"></div>
    </div>
    <div class="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] -z-10 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-radial from-[var(--color-accent-primary)]/8 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="space-y-6">

        <!-- Eyebrow Badge -->
        <div class="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 backdrop-blur-sm text-sm text-[var(--color-text-muted)] font-medium tracking-wide">
          <span class="w-2 h-2 rounded-full bg-[var(--color-accent-primary)] shadow-[0_0_8px_var(--color-accent-primary)] animate-pulse"></span>
          Full-Stack &amp; Mobile Developer
        </div>

        <!-- Main Name — uses Outfit display font -->
        <h1
          class="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none animate-fade-in-up animation-delay-100"
          style="letter-spacing: -0.03em;"
        >
          <span class="block text-[var(--color-text)]">{{ portfolioData.name.split(' ')[0] }}</span>
          <span class="block bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] bg-[length:200%_auto] bg-clip-text shimmer-text">
            {{ portfolioData.name.split(' ').slice(1).join(' ') }}
          </span>
          <span class="sr-only">, Full-Stack Developer & Software Engineer Jakarta, Indonesia</span>
        </h1>

        <!-- Title -->
        <h2
          class="font-display text-xl md:text-2xl text-[var(--color-text-muted)] font-light tracking-wide animate-fade-in-up animation-delay-200"
        >
          {{ portfolioData.title }}
        </h2>

        <!-- Description -->
        <p class="max-w-2xl mx-auto text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed animate-fade-in-up animation-delay-300">
          Spesialis dalam membangun pengalaman digital berperforma tinggi yang cepat, estetik, dan berdampak. Berpengalaman dalam arsitektur SaaS enterprise, solusi finansial (Insurance Tech), hingga aplikasi mobile modern menggunakan ekosistem Vue.js, TypeScript, dan Node.js.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4 pt-6 animate-fade-in-up animation-delay-400">
          <a
            href="#projects"
            class="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-accent-primary)] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/40 hover:-translate-y-0.5"
          >
            <!-- Shimmer (hover-only via CSS, no continuous JS animation) -->
            <span class="absolute inset-0 shimmer-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative">Lihat Karya</span>
            <ArrowRight class="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/60 hover:bg-[var(--color-surface)] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Hubungi Saya
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-5 pt-8 animate-fade-in-up animation-delay-500">
          <a
            :href="portfolioData.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn"
            class="group p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin class="w-5 h-5" />
          </a>
          <a
            v-if="portfolioData.socials.github"
            :href="portfolioData.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
            class="group p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 hover:-translate-y-1"
          >
            <Github class="w-5 h-5" />
          </a>
          <a
            :href="`mailto:${portfolioData.socials.email}`"
            aria-label="Kirim Email"
            class="group p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail class="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>

    <!-- Bottom fade-out gradient -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none -z-5"></div>
  </section>
</template>
