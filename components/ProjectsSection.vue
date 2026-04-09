<script setup lang="ts">
import { ref } from 'vue';
import { portfolioData } from '~/data/portfolio';
import { X, ZoomIn, ArrowRight } from 'lucide-vue-next';
import { useNavigation } from '~/composables/useNavigation';

const { navigateTo } = useNavigation();

const selectedImage = ref<string | null>(null);

const openLightbox = (image: string | undefined) => {
  if (image) {
    selectedImage.value = image;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }
};

const closeLightbox = () => {
  selectedImage.value = null;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'auto';
  }
};
</script>

<template>
  <section id="projects" class="py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
          Proyek <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">Unggulan</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full shadow-lg shadow-primary/50"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in portfolioData.projects" :key="index" 
             @click="openLightbox(project.image)"
             class="group relative rounded-2xl overflow-hidden bg-[var(--color-surface-trans)] backdrop-blur-sm border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-accent-primary)]/20 cursor-zoom-in">
          
          <div class="h-56 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="bg-[var(--color-surface)]/80 backdrop-blur-md p-3 rounded-full border border-white/20 text-[var(--color-text)]">
                <ZoomIn class="w-6 h-6" />
              </div>
            </div>

            <img 
              v-if="project.image" 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              :loading="index === 0 ? 'eager' : 'lazy'"
              decoding="async"
              width="400"
              height="224"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <span class="text-gray-500 font-medium">Tidak Ada Gambar</span>
            </div>
          </div>

          <div class="p-6 relative z-20 flex flex-col h-[calc(100%-14rem)]">
            <h3 class="text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-primary)] group-hover:to-[var(--color-accent-secondary)] transition-all duration-300">
              {{ project.title }}
            </h3>
            <p class="text-[var(--color-text-muted)] mb-6 line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 text-xs font-semibold bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)]/20 rounded-full group-hover:bg-[var(--color-accent-primary)]/20 transition-colors">
                {{ tech }}
              </span>
            </div>
            
            <div class="mt-auto pt-4 border-t border-[var(--color-border)]/50">
              <button v-if="project.detailId" @click.stop="navigateTo(project.detailId)" class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] transition-colors">
                Lihat Detail
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <ClientOnly>
      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="selectedImage" class="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
            <div @click="closeLightbox" class="absolute inset-0 bg-black/60 backdrop-blur-2xl transition-all duration-500"></div>

            <button @click="closeLightbox" class="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:rotate-90 z-20 hover:scale-110 shadow-lg border border-white/10">
              <X class="w-6 h-6" />
            </button>
            
            <Transition
              appear
              enter-active-class="transition duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
              enter-from-class="opacity-0 translate-y-8 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition duration-300 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div class="relative z-10 w-auto h-auto max-w-[95vw] max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform-gpu flex items-center justify-center">
                  <img 
                    :src="selectedImage" 
                    class="block w-auto h-auto max-w-full max-h-[90vh] object-contain bg-black/5" 
                    @click.stop 
                  />
              </div>
            </Transition>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </section>
</template>
