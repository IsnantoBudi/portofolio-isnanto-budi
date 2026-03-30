import { ref } from 'vue';

const currentView = ref('home');
const currentProject = ref<string | null>(null);

export function useNavigation() {
  const navigateTo = (view: string, projectId: string | null = null) => {
    currentView.value = view;
    currentProject.value = projectId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentView,
    currentProject,
    navigateTo
  };
}
