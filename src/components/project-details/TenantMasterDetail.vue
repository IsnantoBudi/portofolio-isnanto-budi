<script setup lang="ts">
import { ArrowLeft, CheckCircle2, Server, Database, Code2, LayoutDashboard, Layers, ShieldCheck } from 'lucide-vue-next';
import { useNavigation } from '../../composables/useNavigation';
import { onMounted } from 'vue';
import tenantMasterHomeImg from '../../assets/tenant_master/home tenant master.png';
import demoImg from '../../assets/tenant_master/demo tenant master.png';
import userAplikasiImg from '../../assets/tenant_master/tenant master managemen user and aplikasi.png';
import adminDashboardImg from '../../assets/tenant_master/admin dashboard.png';
import adminPanelImg from '../../assets/tenant_master/admin panel managemen.png';
import VelocityMarqueeRow from '../magicui/VelocityMarqueeRow.vue';

const imagesRowA = [demoImg, tenantMasterHomeImg, userAplikasiImg];
const imagesRowB = [adminDashboardImg, adminPanelImg];

const { navigateTo } = useNavigation();

onMounted(() => {
  window.scrollTo(0, 0);
});

const modules = [
  {
    title: 'Manajemen Tenant',
    description: 'Registrasi mandiri, multi-tenant B2B, dan manajemen kuota pengguna.',
    icon: LayoutDashboard
  },
  {
    title: 'Sistem Billing & Langganan',
    description: 'Integrasi payment gateway (Midtrans), Virtual Account generate, dan invoice otomatis.',
    icon: Layers
  },
  {
    title: 'Keamanan Tingkat Lanjut',
    description: 'Data isolation per tenant, autentikasi berbasis JWT, dan otorisasi akses (RBAC).',
    icon: ShieldCheck
  }
];

const techStack = [
  { name: 'Next.js', icon: Code2, desc: 'Frontend Multi-aplikasi' },
  { name: 'Golang', icon: Server, desc: 'Backend Microservices' },
  { name: 'PostgreSQL', icon: Database, desc: 'Relational Database with Row-Level Security' },
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
          SaaS · Microservices · Go
        </div>
        <h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="letter-spacing: -0.03em;">
          Kelola Bisnis SaaS<br class="hidden md:block"/>
          <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Lebih Cerdas.</span>
        </h1>
        <p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          TenantMaster Cloud adalah platform multi-tenant enterprise-grade yang memfasilitasi bisnis B2B untuk mengelola klien, billing, dan layanan aplikasi dalam satu ekosistem yang kohesif.
        </p>
      </div>

      <!-- Feature Highlight / Modules -->
      <div class="mb-24">
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Modul &amp; Ekosistem Aplikasi</h2>
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

      <!-- Architecture/Image Block (Placeholder/Mockup look) -->
      <div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <!-- Dot grid overlay -->
        <div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div>
        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div class="w-full lg:w-1/2 space-y-6">
            <h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Arsitektur Multi-Tenant Modern</h3>
            <p class="text-[var(--color-text-muted)] leading-relaxed">
              Arsitektur aplikasi dirancang untuk menangani ribuan tenant dengan privasi dan performa tinggi menggunakan pendekatan database isolation (Row-Level Security/Schemas) dan microservices.
            </p>
            <ul class="space-y-4 pt-4">
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Isolasi Data:</strong> Setiap tenant hanya mengakses datanya sendiri, menjamin keamanan.</span>
              </li>
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>Scalabilitas:</strong> Siap untuk horizontal scaling di cloud infrastructure.</span>
              </li>
              <li class="flex items-start gap-3 text-[var(--color-text)]">
                <CheckCircle2 class="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <span><strong>API-First:</strong> Backend dapat dihubungkan ke berbagai platform frontend.</span>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2">
             <!-- MagicUI Scroll-Based Velocity Marquee -->
             <div class="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-surface)]/40 backdrop-blur-md rounded-3xl border border-[var(--color-border)] shadow-2xl py-8 transform hover:-translate-y-1 transition-transform duration-500">
               <VelocityMarqueeRow :items="imagesRowA" :base-velocity="1" :direction="1" />
               <VelocityMarqueeRow :items="imagesRowB" :base-velocity="1" :direction="-1" />
               
               <div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 md:w-1/3 bg-gradient-to-r from-[var(--color-bg)] to-transparent"></div>
               <div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 md:w-1/3 bg-gradient-to-l from-[var(--color-bg)] to-transparent"></div>
             </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div>
        <h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Spesifikasi Teknologi Utama</h2>
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


