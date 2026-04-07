import { ref, onMounted } from 'vue';

const isDark = ref(true); // Default to dark mode

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateThemeClass();
  };

  const updateThemeClass = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      // Check system preference if no saved theme
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    updateThemeClass();
  });

  return {
    isDark,
    toggleTheme
  };
}
