<script setup lang="ts">
import { portfolioData } from '../data/portfolio';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <!-- Animated Background Shapes -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[var(--color-accent-primary)]/20 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute top-[20%] right-[-10%] w-96 h-96 bg-[var(--color-accent-secondary)]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="space-y-6">
        <h2 class="text-[var(--color-accent-primary)] font-medium tracking-wide text-lg animate-fade-in-up">
          Halo, Saya
        </h2>
        <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent tracking-tight animate-fade-in-up animation-delay-100 drop-shadow-sm p-2">
          {{ portfolioData.name }}
        </h1>
        <p class="text-2xl md:text-3xl text-[var(--color-text-muted)] font-light animate-fade-in-up animation-delay-200">
          {{ portfolioData.title }}
        </p>
        <p class="max-w-2xl mx-auto text-[var(--color-text-muted)] text-lg leading-relaxed animate-fade-in-up animation-delay-300">
          Membangun pengalaman digital dengan teknologi modern dan desain yang elegan.
        </p>
        
        <div class="flex justify-center gap-4 pt-8 animate-fade-in-up animation-delay-400">
          <a href="#projects" class="group px-8 py-3 bg-[var(--color-surface)] hover:bg-[var(--color-surface-trans)] text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)]/50 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
            Lihat Karya
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" class="px-8 py-3 bg-[var(--color-surface)]/10 hover:bg-[var(--color-surface)]/20 text-[var(--color-text)] border border-[var(--color-border)] rounded-full transition-all duration-300 backdrop-blur-sm">
            Hubungi Saya
          </a>
        </div>

        <div class="flex justify-center gap-6 pt-12 animate-fade-in-up animation-delay-500">
          <a :href="portfolioData.socials.linkedin" target="_blank" class="text-gray-400 hover:text-white transition-colors">
            <Linkedin class="w-6 h-6" />
          </a>
          <a v-if="portfolioData.socials.github" :href="portfolioData.socials.github" target="_blank" class="text-gray-400 hover:text-white transition-colors">
            <Github class="w-6 h-6" />
          </a>
          <a :href="`mailto:${portfolioData.socials.email}`" class="text-gray-400 hover:text-white transition-colors">
            <Mail class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
.animation-delay-100 {
  animation-delay: 100ms;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
.animation-delay-400 {
  animation-delay: 400ms;
}
.animation-delay-500 {
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0; 
}
</style>
