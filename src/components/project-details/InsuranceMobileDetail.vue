<script setup lang="ts">
import { ArrowLeft, CheckCircle2, Smartphone, FileCheck, Send, Bell, Activity } from 'lucide-vue-next';
import { useNavigation } from '../../composables/useNavigation';
import { onMounted } from 'vue';
import projectAndroidImg from '../../assets/project menejemen android.webp';

const { navigateTo } = useNavigation();

onMounted(() => {
  window.scrollTo(0, 0);
});

const modules = [
  {
    title: 'E-Polis Digital',
    description: 'Akses instan ke dokumen polis, jatuh tempo premi, dan e-card asuransi di mana saja.',
    icon: FileCheck
  },
  {
    title: 'Pengajuan & Lacak Klaim',
    description: 'Kirim foto dokumen insiden, laporkan kecelakaan, dan pantau status persetujuan klaim secara real-time.',
    icon: Send
  },
  {
    title: 'Notifikasi & Portal Agen',
    description: 'Pengingat otomatis untuk nasabah, serta modul khusus (dashboard) untuk agen lapangan melacak downline.',
    icon: Bell
  }
];

const techStack = [
  { name: 'Flutter & Dart', icon: Smartphone, desc: 'Cross-platform Mobile UI' },
  { name: 'REST API', icon: Activity, desc: 'Sinkronisasi Data Real-time' },
  { name: 'Android OS', icon: Smartphone, desc: 'Target Platform Eksekusi' },
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
          Mobile App · B2C/B2B2C · Flutter
        </div>
        <h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="letter-spacing: -0.03em;">
          Aplikasi Mobile Asuransi:<br class="hidden md:block"/>
          <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Di Genggaman Anda.</span>
        </h1>
        <p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          Platform interaktif klien untuk memberikan kontrol penuh terhadap polis, sekaligus memberdayakan produktivitas telemarketing/agen dan mempercepat proses pelaporan klaim.
        </p>
      </div>

      <!-- Detail Architecture & Image block -->
      <div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div>
        <div class="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
          
          <div class="w-full lg:w-1/2 flex justify-center">
             <div class="relative aspect-[9/16] w-full max-w-xs bg-[var(--color-surface-trans)] backdrop-blur-md rounded-[2.5rem] border-[8px] border-[var(--color-surface)] shadow-2xl flex items-center justify-center overflow-hidden mix-blend-normal">
                <!-- Phone Notch Mockup -->
                <!-- <div class="absolute top-0 inset-x-0 h-6 bg-[var(--color-surface)] z-20 rounded-b-xl w-1/2 mx-auto"></div> -->
                
                <img :src="projectAndroidImg" alt="Insurance Mobile Dashboard Preview" class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 p-4" />
             </div>
          </div>

          <div class="w-full lg:w-1/2 space-y-6">
            <h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">User Experience Kelas Enterprise</h3>
            <p class="text-[var(--color-text-muted)] leading-relaxed">
              Didesain mengutamakan mobilitas dan responsivitas, memastikan agen dan pemegang polis mendapat informasi relevan kapan pun dibutuhkan.
            </p>
            <ul class="space-y-4 pt-4">
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Akses Cepat Klaim:</strong> Proses pelaporan terpandu (Guided Form) untuk mereduksi kesalahan input pengguna.</span>
              </li>
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Mode Offline/Cache:</strong> Ringkasan polis masih dapat dilihat meskipun jaringan tidak stabil berkat mekanisme sinkronisasi database lokal.</span>
              </li>
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Push Notification:</strong> Intervensi aktif untuk menginformasikan jatuh tempo atau promosi perpanjangan.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Feature Highlight / Modules -->
      <div class="mb-24">
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Fitur &amp; Layanan Aplikasi</h2>
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


