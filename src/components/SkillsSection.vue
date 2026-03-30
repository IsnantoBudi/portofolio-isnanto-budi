<script setup lang="ts">
import { portfolioData } from '../data/portfolio';
</script>

<template>
  <section id="skills" class="py-20 relative overflow-hidden">
     <!-- Background Decoration handled by ThemeBackground -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
          Keahlian <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">Teknis</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full shadow-lg shadow-primary/50"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(skill, index) in portfolioData.skills" :key="index" class="group relative bg-[var(--color-surface-trans)] backdrop-blur-sm border border-[var(--color-border)] p-6 rounded-2xl hover:border-[var(--color-accent-primary)]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10">
          <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
          
          <div class="flex flex-col items-center gap-4">
             <!-- Icon Circle -->
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-trans)] border border-[var(--color-border)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-[var(--color-accent-primary)]/20 group-hover:border-[var(--color-accent-primary)]/30 shadow-inner overflow-hidden p-3">
               <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" class="w-full h-full object-contain drop-shadow-md" />
               <span v-else class="text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-primary)] transition-colors">{{ skill.name.charAt(0) }}</span>
            </div>
            
            <h3 class="font-bold text-[var(--color-text)] text-lg group-hover:text-[var(--color-accent-primary)] transition-colors">{{ skill.name }}</h3>
            
            <!-- Skill Bar -->
            <div class="w-full bg-[var(--color-border)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
              <div class="h-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" :style="{ width: `${skill.level}%`, transform: 'scaleX(1)' }"></div>
            </div>
            <span class="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">{{ skill.level }}% Proficiency</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
