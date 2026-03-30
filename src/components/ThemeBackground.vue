<script setup lang="ts">
import { useTheme } from '../composables/useTheme';

const { isDark } = useTheme();
</script>

<template>
  <div class="fixed inset-0 -z-50 overflow-hidden transition-colors duration-500 bg-[var(--color-background)]">
    
    <!-- Dark Mode: Abstract Lava Lamp & Gradient Mesh -->
    <template v-if="isDark">
      <div class="absolute top-0 left-0 w-full h-full">
         <div class="absolute top-[-10%] left-[20%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-blob"></div>
         <div class="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
         <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>
    </template>

    <!-- Light Mode: Cheerful Dynamic Shapes -->
    <template v-else>
      <div class="absolute top-0 left-0 w-full h-full">
        <!-- Sun-like glow -->
        <div class="absolute -top-20 -right-20 w-[600px] h-[600px] bg-yellow-300/20 rounded-full blur-[80px] animate-pulse"></div>
        
        <!-- Floating Circles -->
        <div class="absolute top-[20%] left-[10%] w-32 h-32 bg-sky-200/40 rounded-full blur-xl animate-float"></div>
        <div class="absolute bottom-[30%] right-[15%] w-48 h-48 bg-violet-200/40 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        <div class="absolute top-[60%] left-[40%] w-24 h-24 bg-pink-200/40 rounded-full blur-lg animate-float animation-delay-4000"></div>
        
        <!-- Subtle Grid Pattern -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>
    </template>

  </div>
</template>
