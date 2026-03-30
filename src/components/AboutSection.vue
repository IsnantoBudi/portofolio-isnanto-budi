<script setup lang="ts">
import { portfolioData } from '../data/portfolio';
</script>

<template>
  <section id="about" class="py-20 relative overflow-hidden">
    <!-- Background handled by ThemeBackground, keeping z-index structure -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="md:flex md:items-center md:gap-12">
        <div class="md:w-1/2 mb-10 md:mb-0">
            <!-- Profile Image Container -->
           <div class="relative w-full max-w-sm mx-auto group">
             <!-- Background Blob/Shape -->
             <div class="absolute bottom-0 w-full h-[85%] bg-gradient-to-tr from-[var(--color-accent-primary)]/20 to-[var(--color-accent-secondary)]/20 rounded-[2.5rem] transform group-hover:rotate-6 transition-transform duration-500 backdrop-blur-sm border border-[var(--color-border)]"></div>
             <div class="absolute bottom-0 w-full h-[85%] bg-gradient-to-bl from-[var(--color-accent-secondary)]/10 to-[var(--color-accent-primary)]/10 rounded-[2.5rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>

             <!-- Main Shape -->
             <div class="absolute bottom-0 left-4 right-4 h-[80%] bg-gradient-to-br from-[var(--color-accent-primary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] rounded-t-full rounded-b-[3rem] shadow-2xl opacity-90 group-hover:scale-105 transition-transform duration-500"></div>

             <!-- Image -->
             <div class="relative z-10 flex items-end justify-center h-96">
               <img 
                 :src="portfolioData.profileImage" 
                 :alt="portfolioData.name"
                 class="h-full w-auto object-cover drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                 style="mask-image: linear-gradient(to bottom, black 90%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);" 
               />
             </div>
             
             <!-- Floating Badge -->
            
           </div>
        </div>
        
        <div class="md:w-1/2 space-y-6 relative z-10">
          <h2 class="text-3xl font-bold text-[var(--color-text)] tracking-tight flex items-center gap-3">
            <span class="w-12 h-1 bg-[var(--color-accent-primary)] rounded-full"></span>
            Tentang Saya
          </h2>
          <div class="text-[var(--color-text-muted)] space-y-4 text-lg leading-relaxed">
            <p v-for="(paragraph, index) in portfolioData.about" :key="index">
              {{ paragraph }}
            </p>
          </div>
          
          <div class="pt-6">
            <div class="grid grid-cols-2 gap-6">
              <div class="p-4 bg-[var(--color-surface-trans)] rounded-lg border border-[var(--color-border)] backdrop-blur-sm shadow-sm">
                <h3 class="text-3xl font-bold text-[var(--color-text)] mb-1">{{ new Date().getFullYear() - 2023 }}+</h3>
                <p class="text-sm text-[var(--color-text-muted)]">Tahun Pengalaman</p>
              </div>
              <div class="p-4 bg-[var(--color-surface-trans)] rounded-lg border border-[var(--color-border)] backdrop-blur-sm shadow-sm">
                <h3 class="text-3xl font-bold text-[var(--color-text)] mb-1">20+</h3>
                <p class="text-sm text-[var(--color-text-muted)]">Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
