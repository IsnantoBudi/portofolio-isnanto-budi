export function useNavigation() {
  const router = useRouter();

  const navigateTo = (view: string, projectId: string | null = null) => {
    if (view === 'home') {
      router.push('/');
    } else {
      // view here matches the folder structure we'll create in pages/
      router.push(`/${view}`);
    }
  };

  return {
    navigateTo
  };
}
