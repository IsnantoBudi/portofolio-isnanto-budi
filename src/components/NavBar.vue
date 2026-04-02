<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X, Sun, Moon } from 'lucide-vue-next';
import { useTheme } from '../composables/useTheme';

const { isDark, toggleTheme } = useTheme();

const isOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('');

const navItems = [
  { name: 'Tentang', href: '#about', id: 'about' },
  { name: 'Pengalaman', href: '#experience', id: 'experience' },
  { name: 'Keahlian', href: '#skills', id: 'skills' },
  { name: 'Proyek', href: '#projects', id: 'projects' },
  { name: 'Kontak', href: '#contact', id: 'contact' },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // Simple Scroll Spy
  const sections = navItems.map(item => item.id);
  let current = '';

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      // Check if the top of the section is within the viewport (with some offset)
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section;
      }
    }
  }
  
  // Special case for top of page
  if (window.scrollY < 100) {
      current = '';
  }

  activeSection.value = current;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-500 ease-in-out"
    :class="[
      isScrolled 
        ? 'bg-[var(--color-surface-trans)] backdrop-blur-md border-b border-[var(--color-border)] shadow-sm py-2' 
        : 'bg-transparent border-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <a href="#" aria-label="Beranda" class="flex items-center gap-1 group">
            <div class="relative flex items-center justify-center w-10 h-10 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-sm group-hover:shadow-[var(--color-accent-primary)]/20 group-hover:border-[var(--color-accent-primary)]/50 transition-all duration-300 overflow-hidden">
               <span class="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
               <span class="font-bold text-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">IB</span>
            </div>
            <span class="w-2 h-2 rounded-full bg-[var(--color-accent-secondary)] animate-pulse shadow-[0_0_10px_var(--color-accent-secondary)]"></span>
          </a>
        </div>
        <div class="hidden md:flex items-center gap-6">
          <div class="ml-10 flex items-baseline space-x-1">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="relative px-4 py-2 text-sm font-medium transition-colors duration-300 group"
              :class="[
                activeSection === item.id 
                  ? 'text-[var(--color-accent-primary)]' 
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              ]"
            >
              {{ item.name }}
              
              <!-- Hover/Active Underline Animation -->
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full transform transition-transform duration-300 origin-left"
                :class="[ activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100' ]"
              ></span>
            </a>
          </div>

          <!-- Theme Toggle -->
          <button @click="toggleTheme" aria-label="Toggle tema gelap/terang" class="p-2 rounded-full hover:bg-[var(--color-surface)] transition-all duration-300 text-[var(--color-text)] hover:shadow-md hover:rotate-12 border border-transparent hover:border-[var(--color-border)]">
            <Sun v-if="isDark" class="w-5 h-5 text-yellow-400 fill-current" />
            <Moon v-else class="w-5 h-5 text-indigo-600 fill-current" />
          </button>
        </div>
        
        <div class="-mr-2 flex md:hidden items-center gap-4">
           <!-- Mobile Theme Toggle -->
          <button @click="toggleTheme" aria-label="Toggle tema gelap/terang" class="p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text)]">
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <button
            @click="toggleMenu"
            aria-label="Toggle menu navigasi"
            class="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] focus:outline-none transition-colors"
          >
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-xl">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="isOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            :class="[
               activeSection === item.id 
                 ? 'text-[var(--color-accent-primary)] bg-[var(--color-surface-trans)] border-l-4 border-[var(--color-accent-primary)] pl-2' 
                 : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-trans)]'
            ]"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
