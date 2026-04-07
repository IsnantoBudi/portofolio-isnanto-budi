<script setup lang="ts">
import { portfolioData } from '~/data/portfolio';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="py-24 relative overflow-hidden">

    <!-- Ambient glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
           style="background: radial-gradient(ellipse, var(--spotlight-color), transparent 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-2xl mx-auto text-center">

        <h2 class="font-display text-4xl md:text-6xl font-black text-[var(--color-text)] mb-4 tracking-tight" style="letter-spacing: -0.03em;">
          Mari Bekerja <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Sama.</span>
        </h2>

        <div class="w-16 h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full mb-8"></div>

        <p class="text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed">
          Saya terbuka untuk peluang baru, kolaborasi proyek, maupun sekadar obrolan tentang teknologi.
          Pesan Anda pasti akan saya baca!
        </p>

        <!-- CTA Email -->
        <a
          :href="`mailto:${portfolioData.socials.email}`"
          class="group relative inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-accent-primary)] text-white font-bold font-display text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-accent-primary)]/40 hover:-translate-y-1"
        >
          <span class="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Mail class="relative w-5 h-5" />
          <span class="relative">Kirim Pesan</span>
          <ArrowUpRight class="relative w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 mt-10">
          <a
            :href="portfolioData.socials.linkedin"
            target="_blank"
            class="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5"
          >
            <Linkedin class="w-4 h-4" /> LinkedIn
          </a>
          <a
            v-if="portfolioData.socials.github"
            :href="portfolioData.socials.github"
            target="_blank"
            class="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5"
          >
            <Github class="w-4 h-4" /> GitHub
          </a>
        </div>

        <!-- Footer -->
        <div class="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[var(--color-text-muted)]">
          <p>© {{ new Date().getFullYear() }} {{ portfolioData.name }}.</p>
          <p class="font-mono text-xs">Nuxt 3 · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </div>
  </section>
</template>
