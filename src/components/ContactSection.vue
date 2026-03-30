<script setup lang="ts">
import { portfolioData } from '../data/portfolio';
import { Mail, Linkedin, Github } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="py-20 relative overflow-hidden bg-[var(--color-surface-trans)]/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Hubungi Saya</h2>
        <div class="w-20 h-1 bg-[var(--color-accent-primary)] mx-auto rounded-full mb-8"></div>
        
        <p class="text-xl text-[var(--color-text-muted)] mb-12">
          Saya saat ini mencari peluang baru. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk membalas Anda!
        </p>

        <a 
          :href="`mailto:${portfolioData.socials.email}`"
          class="inline-flex items-center px-8 py-3 bg-[var(--color-accent-primary)] text-white font-medium rounded-full hover:bg-[var(--color-accent-primary)]/90 transition-colors shadow-lg shadow-[var(--color-accent-primary)]/20"
        >
          <Mail class="w-5 h-5 mr-2" />
          Kirim Pesan
        </a>

        <div class="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-[var(--color-text-muted)] text-sm">
            © {{ new Date().getFullYear() }} {{ portfolioData.name }}. Hak Cipta Dilindungi.
          </p>
          
          <div class="flex items-center gap-6">
            <a :href="portfolioData.socials.linkedin" target="_blank" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              <Linkedin class="w-5 h-5" />
            </a>
            <a v-if="portfolioData.socials.github" :href="portfolioData.socials.github" target="_blank" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              <Github class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
