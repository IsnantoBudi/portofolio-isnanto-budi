<script setup lang="ts">
import { ArrowLeft, CheckCircle2, Bot, Image as ImageIcon, Printer, Database, Globe, Server, Sparkles } from 'lucide-vue-next';
import { onMounted } from 'vue';
const ajarVisualDashboardImg = '/assets/AjarVisual_dashbord.png';
const ajarVisualSoalImg = '/assets/AjarVisual_soal.png';

const { navigateTo } = useNavigation();

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
});

const modules = [
  {
    title: 'Generate Soal Otomatis',
    description: 'Menghasilkan 5-10 soal edukasional lengkap dengan pilihan ganda dan jawaban benar secara instan berdasarkan input topik dari pengguna, ditenagai oleh Gemini 1.5 Flash.',
    icon: Sparkles
  },
  {
    title: 'Auto-Illustration',
    description: 'Setiap soal yang di-generate mendapatkan ilustrasi visual yang unik dan relevan bergaya kartun edukatif, menggunakan Pollinations.ai untuk meningkatkan antusiasme belajar siswa.',
    icon: ImageIcon
  },
  {
    title: 'Mode Cetak (Print Ready)',
    description: 'Frontend dioptimalkan dengan CSS media print untuk menghasilkan layout yang bersih dan rapi saat guru atau orang tua langsung mencetaknya ke ukuran kertas A4.',
    icon: Printer
  },
  {
    title: 'Penyimpanan Database Cloud',
    description: 'Semua draf soal yang digenerate tersimpan secara terstruktur ke dalam database TiDB Cloud, memungkinkan pengelolaan riwayat pembelajaran kedepannya.',
    icon: Database
  }
];

const techStack = [
  { name: 'Next.js 14+ (App Router)', icon: Globe, desc: 'Frontend Framework & App Routing' },
  { name: 'Golang', icon: Server, desc: 'Backend Services & API Manager' },
  { name: 'TiDB Cloud', icon: Database, desc: 'Cloud SQL Database' },
  { name: 'Gemini 1.5 Flash', icon: Bot, desc: 'Generative AI (Text/Question)' },
  { name: 'Pollinations.ai', icon: ImageIcon, desc: 'Generative AI (Image Illustration)' },
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
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold font-mono tracking-widest uppercase gap-2">
          <span>AI-Powered</span>
          <span class="w-1 h-1 rounded-full bg-[var(--color-accent-primary)]"></span>
          <span>Education</span>
        </div>
        <h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="letter-spacing: -0.03em;">
          AjarVisual<br class="hidden md:block"/>
          <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Worksheet Generator.</span>
        </h1>
        <p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          Platform web cerdas yang membantu guru dan orang tua membuat lembar soal latihan anak secara otomatis. Menghasilkan soal teks yang dikurasi oleh Gemini AI dengan pelengkap ilustrasi menarik dari Pollinations.ai.
        </p>
        
        <div class="pt-6">
          <a href="https://ajar-visual.vercel.app/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white rounded-full font-bold shadow-lg shadow-[var(--color-accent-primary)]/20 hover:shadow-[var(--color-accent-primary)]/40 hover:-translate-y-1 transition-all">
            <Globe class="w-5 h-5" />
            Buka Live Demo
          </a>
        </div>
      </div>

      <!-- Detail Architecture & Image block 1 -->
      <div class="mb-12 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div>
        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div class="w-full lg:w-1/2 space-y-6">
            <h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Kombinasi Multi-AI Generative</h3>
            <p class="text-[var(--color-text-muted)] leading-relaxed">
              Arsitektur AjarVisual mendemonstrasikan integrasi beberapa layanan AI secara bersamaan untuk menghasilkan output pembelajaran yang kaya secara visual dan kontekstual.
            </p>
            <ul class="space-y-4 pt-4">
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Konten dengan Gemini:</strong> Input pengguna diolah oleh Backend Golang yang memanggil Gemini API, mengembalikan format JSON terstruktur untuk ragam dan tingkat kesulitan soal.</span>
              </li>
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Visualisasi dengan Pollinations:</strong> Setiap soal diberikan Image Prompt unik yang langsung diubah menjadi gambar bergaya kartun anak, di-render secara instan di sisi Frontend Next.js.</span>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2">
             <div class="w-full bg-[var(--color-surface-trans)] backdrop-blur-md rounded-2xl border border-[var(--color-border)] shadow-2xl flex items-center justify-center overflow-hidden transform relative group hover:scale-[1.02] transition-transform duration-500">
                <NuxtImg :src="ajarVisualDashboardImg" alt="AjarVisual Dashboard Overview" class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
        </div>
      </div>

      <!-- Detail Image Block 2 -->
      <div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative flex flex-col-reverse lg:flex-row items-center gap-12">
        <div class="absolute inset-0 bg-grid-pattern text-[var(--color-border)] opacity-10 rounded-3xl"></div>
        <div class="w-full lg:w-1/2 relative z-10">
            <div class="w-full bg-[var(--color-surface-trans)] backdrop-blur-md rounded-2xl border border-[var(--color-border)] shadow-2xl flex items-center justify-center overflow-hidden transform relative group hover:scale-[1.02] transition-transform duration-500">
              <NuxtImg :src="ajarVisualSoalImg" alt="AjarVisual Worksheet View" class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
        <div class="w-full lg:w-1/2 space-y-6 relative z-10">
          <h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Antarmuka Siap Cetak (Print-Ready)</h3>
          <p class="text-[var(--color-text-muted)] leading-relaxed">
            Menyadari kebutuhan target pengguna (guru dan orang tua) yang membutuhkan materi fisik.
          </p>
          <ul class="space-y-4 pt-4">
            <li class="flex items-start gap-3 text-[var(--color-text)]">
              <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
              <span><strong>Layout Bersih:</strong> UI disesuaikan secara khusus dengan CSS <code>@media print</code> agar bagian tombol dan navigasi dihilangkan saat print dialog terbuka.</span>
            </li>
            <li class="flex items-start gap-3 text-[var(--color-text)]">
              <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
              <span><strong>A4 Optimized:</strong> Tata letak grid soal dan gambar asimetris yang dirancang agar presisi ketika dicetak pada kertas A4 tanpa terpotong.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Feature Highlight / Modules -->
      <div class="mb-24">
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Fitur &amp; Kemampuan</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(mod, index) in modules" :key="index" class="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-colors hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10 group">
            <div class="w-14 h-14 bg-[var(--color-accent-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-primary)] group-hover:text-white text-[var(--color-accent-primary)] transition-colors">
              <component :is="mod.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-text)] mb-3">{{ mod.title }}</h3>
            <p class="text-[var(--color-text-muted)] text-sm leading-relaxed">
              {{ mod.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div>
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Teknologi yang Digunakan</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
