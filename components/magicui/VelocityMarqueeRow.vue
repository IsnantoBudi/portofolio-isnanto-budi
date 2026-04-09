<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { X } from 'lucide-vue-next'

const selectedImage = ref<string | null>(null);

const openLightbox = (image: string) => {
  selectedImage.value = image;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  selectedImage.value = null;
  document.body.style.overflow = 'auto';
};

const props = defineProps<{
  items: string[];
  baseVelocity?: number;
  direction?: number; // 1 for left, -1 for right
}>();

const baseVelocity = props.baseVelocity ?? 2;
const direction = props.direction ?? 1;

const scrollerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const xPosition = ref(0);
let scrollVelocity = 0;
let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
let animationFrameId: number;

let cachedWidth = 0;

const updateWidth = () => {
  const firstContent = Array.isArray(contentRef.value) ? contentRef.value[0] : contentRef.value;
  cachedWidth = firstContent?.offsetWidth || 0;
};

const update = () => {
  if (!contentRef.value || !scrollerRef.value) return;

  const currentScrollY = window.scrollY;
  const scrollDelta = currentScrollY - lastScrollY;
  
  // Calculate velocity from scroll
  scrollVelocity += scrollDelta * 0.15;
  scrollVelocity *= 0.85; // Faster decay
  
  let totalVelocity = baseVelocity + Math.abs(scrollVelocity);
  totalVelocity = Math.min(totalVelocity, 40); // clamp
  
  if (direction === 1) {
    xPosition.value -= totalVelocity;
  } else {
    xPosition.value += totalVelocity;
  }
  
  const contentWidth = cachedWidth;
  
  if (contentWidth > 0) {
    if (direction === 1 && -xPosition.value >= contentWidth) {
      xPosition.value = (xPosition.value + contentWidth) % contentWidth;
    } else if (direction === -1 && xPosition.value >= 0) {
      xPosition.value = (xPosition.value - contentWidth) % contentWidth;
    }
  }

  scrollerRef.value.style.transform = `translateX(${xPosition.value}px)`;
  lastScrollY = currentScrollY;

  animationFrameId = requestAnimationFrame(update);
}

onMounted(() => {
  lastScrollY = window.scrollY;
  updateWidth();
  window.addEventListener('resize', updateWidth, { passive: true });
  window.addEventListener('scroll', () => {}, { passive: true });
  animationFrameId = requestAnimationFrame(update);
});

onBeforeUnmount(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <div class="overflow-hidden flex flex-nowrap w-full relative py-4">
    <div ref="scrollerRef" class="flex whitespace-nowrap items-center w-max will-change-transform">
      <!-- 4 clones to ensure seamless looping on large screens -->
      <div 
        v-for="clone in 6" 
        :key="clone"
        ref="contentRef"
        class="flex items-center shrink-0"
      >
        <NuxtImg
          v-for="(src, idx) in items"
          :key="idx"
          :src="src"
          @click="openLightbox(src)"
          class="mx-4 inline-block h-40 w-60 rounded-2xl object-cover shadow-xl border border-[var(--color-border)]/50 hover:border-[var(--color-accent-primary)]/50 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.02] cursor-crosshair cursor-zoom-in"
          alt="TenantMaster screenshot"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedImage" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        
        <!-- Blurred Backdrop -->
        <div @click="closeLightbox" class="absolute inset-0 bg-[var(--color-surface)]/80 backdrop-blur-2xl transition-all duration-500"></div>

        <!-- Close Button -->
        <button @click="closeLightbox" class="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:rotate-90 z-[110] hover:scale-110 shadow-lg border border-white/10 flex items-center justify-center shrink-0">
          <X class="w-6 h-6" />
        </button>
        
        <!-- Image Container with Zoom Animation -->
        <Transition
          appear
          enter-active-class="transition duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enter-from-class="opacity-0 translate-y-8 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div class="relative z-[105] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform-gpu flex items-center justify-center" @click.stop>
              <NuxtImg 
                :src="selectedImage" 
                class="w-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" 
              />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
