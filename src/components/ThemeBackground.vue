<script setup lang="ts">
import { useTheme } from '../composables/useTheme';

const { isDark } = useTheme();
</script>

<template>
  <div class="fixed inset-0 -z-50 overflow-hidden transition-colors duration-500 bg-[var(--color-background)]">

    <!-- Dot-grid pattern overlay (same for both modes, color changes via var) -->
    <div
      class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-70 pointer-events-none"
    ></div>

    <!-- Grain / noise texture overlay -->
    <div class="noise-overlay absolute inset-0 pointer-events-none"></div>

    <!-- Dark Mode: Deep navy ambient glows -->
    <template v-if="isDark">
      <div class="absolute inset-0 pointer-events-none">
        <!-- Top-left — primary teal radial -->
        <div
          class="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%);"
        ></div>
        <!-- Center-right — violet radial -->
        <div
          class="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%);"
        ></div>
        <!-- Bottom-left — subtle warmth -->
        <div
          class="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%);"
        ></div>
        <!-- Horizontal scan-line overlay (very subtle, dark-only) -->
        <div
          class="absolute inset-0 pointer-events-none opacity-[0.025]"
          style="background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 4px);"
        ></div>
      </div>
    </template>

    <!-- Light Mode: Clean warm directional glows -->
    <template v-else>
      <div class="absolute inset-0 pointer-events-none">
        <!-- Top-right warm glow -->
        <div
          class="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%);"
        ></div>
        <!-- Center-left sky blue -->
        <div
          class="absolute top-1/2 -left-32 w-[450px] h-[450px] rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(3,105,161,0.06) 0%, transparent 65%);"
        ></div>
        <!-- Bottom-right warm -->
        <div
          class="absolute -bottom-16 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(109,40,217,0.05) 0%, transparent 65%);"
        ></div>
      </div>
    </template>

  </div>
</template>
