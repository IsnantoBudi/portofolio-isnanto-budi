import { a as useRouter } from './server.mjs';

function useNavigation() {
  const router = useRouter();
  const navigateTo = (view, projectId = null) => {
    if (view === "home") {
      router.push("/");
    } else {
      router.push(`/${view}`);
    }
  };
  return {
    navigateTo
  };
}

export { useNavigation as u };
//# sourceMappingURL=useNavigation-JK2rjkhW.mjs.map
