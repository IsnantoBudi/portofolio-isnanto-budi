<script setup lang="ts">
import { portfolioData } from '../data/portfolio';
import { Briefcase } from 'lucide-vue-next';
import PlanetBackground from './PlanetBackground.vue';
</script>

<template>
  <section id="experience" class="py-20 relative overflow-hidden bg-[var(--color-surface-trans)]/30 backdrop-blur-sm">
     <!-- Planet Background -->
    <div class="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-50 md:opacity-100 mix-blend-multiply dark:mix-blend-normal pointer-events-none overflow-hidden">
        <PlanetBackground />
    </div>

     <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-surface)]/10 to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Pengalaman Profesional</h2>
        <div class="w-20 h-1 bg-[var(--color-accent-primary)] mx-auto rounded-full"></div>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[var(--color-border)]"></div>

        <div v-for="(job, index) in portfolioData.experiences" :key="index" class="relative mb-12 last:mb-0 group">
           <!-- Timeline Dot -->
          <div class="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-[var(--color-accent-primary)] rounded-full border-4 border-[var(--color-surface)] z-20 group-hover:scale-150 transition-transform duration-300"></div>
          
          <div :class="[ 
              'relative md:w-1/2 pl-8 md:pl-0', 
              index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:ml-auto md:pl-12' 
            ]">
            
            <div class="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-xl hover:border-[var(--color-accent-primary)]/50 transition-colors duration-300 shadow-sm hover:shadow-lg">
              <div class="flex items-center gap-2 mb-2" :class="[ index % 2 === 0 ? 'md:justify-end' : 'md:justify-start' ]">
                <Briefcase class="w-4 h-4 text-[var(--color-accent-primary)]" />
                <span class="text-sm font-mono text-[var(--color-accent-primary)]">{{ job.duration }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-[var(--color-text)] mb-1">{{ job.role }}</h3>
              <h4 class="text-lg text-[var(--color-text-muted)] mb-4">{{ job.company }}</h4>
              
              <ul class="space-y-2 text-sm text-[var(--color-text-muted)]" :class="[ index % 2 === 0 ? 'md:text-right' : 'md:text-left' ]">
                <li v-for="(desc, i) in job.description" :key="i">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
