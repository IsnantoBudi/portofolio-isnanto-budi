<script setup lang="ts">
import { ArrowLeft, CheckCircle2, Shield, FileText, Activity, Code2, Database } from 'lucide-vue-next';
import { useNavigation } from '../../composables/useNavigation';
import { onMounted } from 'vue';
import projectWebImg from '../../assets/project menejemen web.webp';

const { navigateTo } = useNavigation();

onMounted(() => {
  window.scrollTo(0, 0);
});

const modules = [
  {
    title: 'Manajemen Polis',
    description: 'Pembuatan, pembaruan, dan pelacakan status polis asuransi nasabah secara end-to-end.',
    icon: FileText
  },
  {
    title: 'Administrasi & Klaim',
    description: 'Modul underwriting dan workflow persetujuan klaim bertingkat untuk efisiensi.',
    icon: Activity
  },
  {
    title: 'Keamanan & RBAC',
    description: 'Pengaturan otorisasi ketat untuk Super Admin, Manajer Cabang, Agen, dan Data Entry.',
    icon: Shield
  }
];

const techStack = [
  { name: 'Angular', icon: Code2, desc: 'Frontend Framework (Admin SPA)' },
  { name: 'REST API', icon: Activity, desc: 'Backend Integration' },
  { name: 'SQL Database', icon: Database, desc: 'Penyimpanan Data Relasional' },
];

</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] pt-24 pb-20 selection:bg-primary selection:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Button -->
      <button 
        @click="navigateTo('home')" 
        class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-12 transition-colors group"
      >
        <div class="p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/10 transition-colors">
          <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span class="font-medium">Kembali ke Portofolio</span>
      </button>

      <!-- Hero Section -->
      <div class="mb-20 text-center space-y-6">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold font-mono tracking-widest uppercase">
          Web Admin · Enterprise · Angular
        </div>
        <h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="letter-spacing: -0.03em;">
          Core System<br class="hidden md:block"/>
          <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Manajemen Asuransi.</span>
        </h1>
        <p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          Platform back-office komprehensif yang dirancang untuk mengelola seluruh siklus hidup polis asuransi, proses klaim, dan administrasi operasional dengan sistem hak akses yang terkontrol ketat (RBAC).
        </p>
      </div>

      <!-- Detail Architecture & Image block -->
      <div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div>
        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div class="w-full lg:w-1/2 space-y-6">
            <h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Admin Dashboard Terpusat</h3>
            <p class="text-[var(--color-text-muted)] leading-relaxed">
              Mendigitalisasi pengelolaan dokumen asuransi manual menjadi alur kerja web yang efisien. Memudahkan tim internal untuk melakukan validasi tanpa memilah tumpukan kertas fisik.
            </p>
            <ul class="space-y-4 pt-4">
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Tracking Polis Real-time:</strong> Panel khusus untuk melacak polis aktif, tertunda, dan kedaluwarsa.</span>
              </li>
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Manajemen Hak Akses:</strong> Pemisahan peran memastikan hanya pengguna dengan otoritas yang dapat mengakses data finansial klaim.</span>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2">
             <div class="w-full aspect-video bg-[var(--color-surface-trans)] backdrop-blur-md rounded-2xl border border-[var(--color-border)] shadow-2xl flex items-center justify-center p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                <img :src="projectWebImg" alt="Insurance Web Dashboard Preview" class="w-full h-full object-cover object-top rounded-xl shadow-lg group-hover:scale-[1.03] transition-transform duration-700 opacity-90 hover:opacity-100" />
             </div>
          </div>
        </div>
      </div>

      <!-- Feature Highlight / Modules -->
      <div class="mb-24">
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Fitur &amp; Modul Inti</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(mod, index) in modules" :key="index" class="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-colors hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10 group">
            <div class="w-14 h-14 bg-[var(--color-accent-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-primary)] group-hover:text-white text-[var(--color-accent-primary)] transition-colors">
              <component :is="mod.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-text)] mb-3">{{ mod.title }}</h3>
            <p class="text-[var(--color-text-muted)] leading-relaxed">
              {{ mod.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div>
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Spesifikasi Teknologi</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(stack, index) in techStack" :key="index" class="flex items-center gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
            <div class="p-3 bg-[var(--color-accent-primary)]/10 rounded-xl text-[var(--color-accent-primary)]">
               <component :is="stack.icon" class="w-8 h-8" />
            </div>
            <div>
              <h4 class="font-semibold text-[var(--color-text)] text-lg">{{ stack.name }}</h4>
              <p class="text-sm text-[var(--color-text-muted)]">{{ stack.desc }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


