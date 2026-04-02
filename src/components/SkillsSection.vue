<script setup lang="ts">
import { portfolioData } from '../data/portfolio';
import { ref, onMounted } from 'vue';

// IntersectionObserver to animate skill bar on scroll-into-view
const sectionRef = ref<HTMLElement | null>(null);
const barsVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        barsVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section id="skills" ref="sectionRef" class="py-20 relative overflow-hidden">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] mb-4 tracking-tight" style="letter-spacing: -0.02em;">
          Keahlian <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Teknis</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div
          v-for="(skill, index) in portfolioData.skills"
          :key="index"
          class="group relative bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-2xl hover:border-[var(--color-accent-primary)]/50 transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10"
        >
          <!-- Gradient bottom bar on hover -->
          <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left"></div>

          <div class="flex flex-col items-center gap-4">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-background)] group-hover:border-[var(--color-accent-primary)]/40 group-hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 overflow-hidden p-3">
              <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" class="w-full h-full object-contain" />
              <span v-else class="text-2xl font-black font-display text-[var(--color-text)]">{{ skill.name.charAt(0) }}</span>
            </div>

            <h3 class="font-semibold text-[var(--color-text)] text-base text-center group-hover:text-[var(--color-accent-primary)] transition-colors duration-300">
              {{ skill.name }}
            </h3>

            <!-- Scroll-triggered Skill Bar -->
            <div class="w-full bg-[var(--color-border)] h-1.5 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full transition-all duration-1000 ease-out"
                :style="{ width: barsVisible ? `${skill.level}%` : '0%' }"
              ></div>
            </div>
            <span class="text-xs text-[var(--color-text-muted)] tabular-nums">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
