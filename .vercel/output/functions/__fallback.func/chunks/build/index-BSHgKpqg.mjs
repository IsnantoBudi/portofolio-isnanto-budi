import { _ as __nuxt_component_0$2 } from './nuxt-link-D1BW2c5g.mjs';
import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, createTextVNode, toDisplayString, unref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { Sun, Moon, Menu, X, ArrowRight, Linkedin, Github, Mail, Briefcase, ZoomIn, ArrowUpRight } from 'lucide-vue-next';
import { u as useRoute, _ as __nuxt_component_0$3 } from './server.mjs';
import { p as projectAndroidImg } from './project menejemen android-Bxbrq6jn.mjs';
import { p as projectWebImg } from './project menejemen web-CPlpqOev.mjs';
import { t as tenantMasterHomeImg } from './home tenant master-BSEbPi6n.mjs';
import { s as syncBoardImg } from './SyncBoard-r_21bAyt.mjs';
import { a as ajarVisualHomeImg } from './AjarVisual_dashbord-Ddg-85Xo.mjs';
import { u as useNavigation } from './useNavigation-JK2rjkhW.mjs';
import { u as useHead } from './composables-CIjl6b6s.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const isDark = ref(true);
function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateThemeClass();
  };
  const updateThemeClass = () => {
    if (isDark.value) {
      (void 0).documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      (void 0).documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return {
    isDark,
    toggleTheme
  };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark: isDark2 } = useTheme();
    const isOpen = ref(false);
    const isScrolled = ref(false);
    const activeSection = ref("");
    const navItems = [
      { name: "Tentang", href: "#about", id: "about" },
      { name: "Pengalaman", href: "#experience", id: "experience" },
      { name: "Keahlian", href: "#skills", id: "skills" },
      { name: "Proyek", href: "#projects", id: "projects" },
      { name: "Kontak", href: "#contact", id: "contact" }
    ];
    const route = useRoute();
    const isHome = computed(() => route.path === "/");
    const getHref = (href) => {
      return isHome.value ? href : `/${href}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed w-full z-50 transition-all duration-500 ease-in-out", [
          isScrolled.value ? "bg-[var(--color-surface-trans)] backdrop-blur-md border-b border-[var(--color-border)] shadow-sm py-2" : "bg-transparent border-transparent py-4"
        ]]
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16"><div class="flex-shrink-0 transition-transform duration-300 hover:scale-105">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "aria-label": "Beranda",
        class: "flex items-center gap-1 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center justify-center w-10 h-10 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-sm group-hover:shadow-[var(--color-accent-primary)]/20 group-hover:border-[var(--color-accent-primary)]/50 transition-all duration-300 overflow-hidden"${_scopeId}><span class="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId}></span><span class="font-bold text-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent"${_scopeId}>IB</span></div><span class="w-2 h-2 rounded-full bg-[var(--color-accent-secondary)] animate-pulse shadow-[0_0_10px_var(--color-accent-secondary)]"${_scopeId}></span>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center justify-center w-10 h-10 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-sm group-hover:shadow-[var(--color-accent-primary)]/20 group-hover:border-[var(--color-accent-primary)]/50 transition-all duration-300 overflow-hidden" }, [
                createVNode("span", { class: "absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                createVNode("span", { class: "font-bold text-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent" }, "IB")
              ]),
              createVNode("span", { class: "w-2 h-2 rounded-full bg-[var(--color-accent-secondary)] animate-pulse shadow-[0_0_10px_var(--color-accent-secondary)]" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex items-center gap-6"><div class="ml-10 flex items-baseline space-x-1"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: getHref(item.href),
          class: ["relative px-4 py-2 text-sm font-medium transition-colors duration-300 group", [
            activeSection.value === item.id ? "text-[var(--color-accent-primary)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)} <span class="${ssrRenderClass([[activeSection.value === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"], "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full transform transition-transform duration-300 origin-left"])}"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name) + " ", 1),
                createVNode("span", {
                  class: ["absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full transform transition-transform duration-300 origin-left", [activeSection.value === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"]]
                }, null, 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><button aria-label="Toggle tema gelap/terang" class="p-2 rounded-full hover:bg-[var(--color-surface)] transition-all duration-300 text-[var(--color-text)] hover:shadow-md hover:rotate-12 border border-transparent hover:border-[var(--color-border)]">`);
      if (unref(isDark2)) {
        _push(ssrRenderComponent(unref(Sun), { class: "w-5 h-5 text-yellow-400 fill-current" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "w-5 h-5 text-indigo-600 fill-current" }, null, _parent));
      }
      _push(`</button></div><div class="-mr-2 flex md:hidden items-center gap-4"><button aria-label="Toggle tema gelap/terang" class="p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text)]">`);
      if (unref(isDark2)) {
        _push(ssrRenderComponent(unref(Sun), { class: "w-5 h-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button><button aria-label="Toggle menu navigasi" class="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] focus:outline-none transition-colors">`);
      if (!isOpen.value) {
        _push(ssrRenderComponent(unref(Menu), { class: "h-6 w-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(X), { class: "h-6 w-6" }, null, _parent));
      }
      _push(`</button></div></div></div>`);
      if (isOpen.value) {
        _push(`<div class="md:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-xl"><div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.name,
            to: getHref(item.href),
            onClick: ($event) => isOpen.value = false,
            class: ["block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300", [
              activeSection.value === item.id ? "text-[var(--color-accent-primary)] bg-[var(--color-surface-trans)] border-l-4 border-[var(--color-accent-primary)] pl-2" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-trans)]"
            ]]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$8, { __name: "NavBar" });
const profileDarkImg = "" + __buildAssetsURL("foto profil_dark.DXA8Ro4f.webp");
const projectSchoolImg = "" + __buildAssetsURL("project menejemen sekolah.C7217lIX.webp");
const portfolioData = {
  name: "Isnanto Budi Nurrahman",
  title: "Full-Stack Developer",
  profileImageDark: profileDarkImg,
  profileImageLight: profileDarkImg,
  about: [
    "Full-Stack Developer dengan pengalaman profesional lebih dari 2 tahun dalam pengembangan aplikasi web dan mobile.",
    "Berpengalaman menggunakan Angular dan Flutter untuk membangun sistem berbasis REST API dengan fokus pada maintainability dan kebutuhan bisnis.",
    "Terbiasa bekerja dalam tim dan menangani pengembangan fitur end-to-end."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/isnanto-budi/",
    email: "isnantobudi0@gmail.com"
    // github: "https://github.com/isnantobudi", // Assuming github from previous context or if available
  },
  experiences: [
    {
      company: "PT. Bakti Tekno Mandiri",
      role: "Full-Stack Developer",
      duration: "Maret 2023 – Sekarang",
      description: [
        "Mengembangkan dan melanjutkan pengembangan aplikasi web dan mobile pada proyek baru maupun yang sedang berjalan sebagai Full-Stack Developer.",
        "Mengembangkan panel admin berbasis Angular untuk mendukung manajemen data dan operasional internal.",
        "Mengembangkan aplikasi Android menggunakan Flutter untuk klien dan admin untuk memantau kemajuan proyek.",
        "Mengintegrasikan REST API pada aplikasi web dan mobile untuk memastikan pertukaran data yang konsisten.",
        "Melakukan pemeliharaan aplikasi, perbaikan bug, dan pengembangan fitur baru guna menjaga stabilitas dan fungsionalitas sistem."
      ]
    }
  ],
  skills: [
    { name: "Angular", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Flutter", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "JavaScript/TypeScript", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Dart", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "HTML/CSS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Go", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "REST API", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    // Using Postman as proxy for API dev
    { name: "SQL", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Vue.js", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "React", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
  ],
  projects: [
    {
      title: "TenantMaster Cloud",
      description: "Platform manajemen multi-tenant untuk aplikasi SaaS dengan arsitektur microservices B2B.",
      technologies: ["Next.js", "Tailwind CSS", "Go", "PostgreSQL"],
      detailId: "tenant-master",
      image: tenantMasterHomeImg
    },
    {
      title: "SyncBoard",
      description: "Real-time Collaborative Task Board dengan integrasi WebSockets dan database terdistribusi TiDB.",
      technologies: ["Next.js", "Go", "TiDB", "WebSockets"],
      detailId: "sync-board",
      image: syncBoardImg,
      link: "https://sync-board-frontend-mu.vercel.app/"
    },
    {
      title: "AjarVisual",
      description: "Platform pembuatan lembar kerja (worksheet) pendidikan secara otomatis berbasis AI. Menghasilkan soal dan ilustrasi unik untuk berbagai tipe pertanyaan.",
      technologies: ["Next.js", "Golang", "TiDB", "Gemini AI", "Pollinations AI"],
      detailId: "ajar-visual",
      image: ajarVisualHomeImg,
      link: "https://ajar-visual.vercel.app/"
    },
    {
      title: "Sistem Manajemen Asuransi (Web)",
      description: "Core system manajemen asuransi untuk administrasi polis, klaim, dan Role-Based Access Control (RBAC).",
      technologies: ["Angular", "REST API", "SQL", "TypeScript"],
      detailId: "insurance-web",
      image: projectWebImg
    },
    {
      title: "Aplikasi Asuransi (Mobile)",
      description: "Aplikasi mobile khusus klien asuransi untuk akses e-polis digital dan pengajuan klaim secara real-time.",
      technologies: ["Flutter", "Dart", "Android", "REST API"],
      detailId: "insurance-mobile",
      image: projectAndroidImg
    },
    {
      title: "Manajemen Sekolah",
      description: "Sistem manajemen sekolah yang komprehensif untuk administrasi dan siswa.",
      technologies: ["Web", "Database"],
      link: "#",
      image: projectSchoolImg
    }
  ]
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const spotX = ref(50);
    const spotY = ref(50);
    const heroRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        ref_key: "heroRef",
        ref: heroRef,
        class: "relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      }, _attrs))}><div class="absolute inset-0 -z-20 dot-grid text-[var(--color-border)] opacity-60"></div><div class="absolute inset-0 -z-10 transition-[background] duration-300 ease-out pointer-events-none" style="${ssrRenderStyle({
        background: `radial-gradient(600px circle at ${spotX.value}% ${spotY.value}%, var(--spotlight-color), transparent 70%)`
      })}"></div><div class="absolute top-0 right-0 w-[500px] h-[500px] -z-10 pointer-events-none"><div class="absolute inset-0 bg-gradient-radial from-[var(--color-accent-secondary)]/10 to-transparent rounded-full blur-3xl"></div></div><div class="absolute bottom-0 left-0 w-[400px] h-[400px] -z-10 pointer-events-none"><div class="absolute inset-0 bg-gradient-radial from-[var(--color-accent-primary)]/8 to-transparent rounded-full blur-3xl"></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"><div class="space-y-6"><div class="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 backdrop-blur-sm text-sm text-[var(--color-text-muted)] font-medium tracking-wide"><span class="w-2 h-2 rounded-full bg-[var(--color-accent-primary)] shadow-[0_0_8px_var(--color-accent-primary)] animate-pulse"></span> Full-Stack &amp; Mobile Developer </div><h1 class="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none animate-fade-in-up animation-delay-100" style="${ssrRenderStyle({ "letter-spacing": "-0.03em" })}"><span class="block text-[var(--color-text)]">${ssrInterpolate(unref(portfolioData).name.split(" ")[0])}</span><span class="block bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] bg-[length:200%_auto] bg-clip-text shimmer-btn text-transparent">${ssrInterpolate(unref(portfolioData).name.split(" ").slice(1).join(" "))}</span></h1><p class="font-display text-xl md:text-2xl text-[var(--color-text-muted)] font-light tracking-wide animate-fade-in-up animation-delay-200">${ssrInterpolate(unref(portfolioData).title)}</p><p class="max-w-2xl mx-auto text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed animate-fade-in-up animation-delay-300"> Spesialis dalam membangun pengalaman digital berperforma tinggi yang cepat, estetik, dan berdampak. Berpengalaman dalam arsitektur SaaS enterprise, solusi finansial (Insurance Tech), hingga aplikasi mobile modern menggunakan ekosistem Vue.js, TypeScript, dan Node.js. </p><div class="flex flex-wrap justify-center gap-4 pt-6 animate-fade-in-up animation-delay-400"><a href="#projects" class="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-accent-primary)] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/40 hover:-translate-y-0.5"><span class="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span><span class="relative">Lihat Karya</span>`);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" }, null, _parent));
      _push(`</a><a href="#contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/60 hover:bg-[var(--color-surface)] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"> Hubungi Saya </a></div><div class="flex justify-center gap-5 pt-8 animate-fade-in-up animation-delay-500"><a${ssrRenderAttr("href", unref(portfolioData).socials.linkedin)} target="_blank" aria-label="Profil LinkedIn" class="group p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 hover:-translate-y-1">`);
      _push(ssrRenderComponent(unref(Linkedin), { class: "w-5 h-5" }, null, _parent));
      _push(`</a>`);
      if (unref(portfolioData).socials.github) {
        _push(`<a${ssrRenderAttr("href", unref(portfolioData).socials.github)} target="_blank" aria-label="Profil GitHub" class="group p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 hover:-translate-y-1">`);
        _push(ssrRenderComponent(unref(Github), { class: "w-5 h-5" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", `mailto:${unref(portfolioData).socials.email}`)} aria-label="Kirim Email" class="group p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 hover:-translate-y-1">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5" }, null, _parent));
      _push(`</a></div></div></div><div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none -z-5"></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$7, { __name: "HeroSection" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark: isDark2 } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "py-20 relative overflow-hidden"
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="md:flex md:items-center md:gap-12"><div class="md:w-1/2 mb-10 md:mb-0"><div class="relative w-full max-w-sm mx-auto group"><div class="absolute bottom-0 w-full h-[85%] bg-gradient-to-tr from-[var(--color-accent-primary)]/20 to-[var(--color-accent-secondary)]/20 rounded-[2.5rem] transform group-hover:rotate-6 transition-transform duration-500 backdrop-blur-sm border border-[var(--color-border)]"></div><div class="absolute bottom-0 w-full h-[85%] bg-gradient-to-bl from-[var(--color-accent-secondary)]/10 to-[var(--color-accent-primary)]/10 rounded-[2.5rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div><div class="absolute bottom-0 left-4 right-4 h-[80%] bg-gradient-to-br from-[var(--color-accent-primary)] via-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] rounded-t-full rounded-b-[3rem] shadow-2xl opacity-90 group-hover:scale-105 transition-transform duration-500"></div><div class="relative z-10 flex items-end justify-center h-96">`);
      if (!unref(isDark2)) {
        _push(`<img${ssrRenderAttr("src", unref(portfolioData).profileImageLight)}${ssrRenderAttr("alt", unref(portfolioData).name)} class="h-full w-auto object-cover drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" style="${ssrRenderStyle({ "mask-image": "linear-gradient(to bottom, black 90%, transparent 100%)", "-webkit-mask-image": "linear-gradient(to bottom, black 90%, transparent 100%)" })}">`);
      } else {
        _push(`<img${ssrRenderAttr("src", unref(portfolioData).profileImageDark)}${ssrRenderAttr("alt", unref(portfolioData).name)} class="h-full w-auto object-cover drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" style="${ssrRenderStyle({ "mask-image": "linear-gradient(to bottom, black 90%, transparent 100%)", "-webkit-mask-image": "linear-gradient(to bottom, black 90%, transparent 100%)" })}">`);
      }
      _push(`</div></div></div><div class="md:w-1/2 space-y-6 relative z-10"><h2 class="text-3xl font-bold text-[var(--color-text)] tracking-tight flex items-center gap-3"><span class="w-12 h-1 bg-[var(--color-accent-primary)] rounded-full"></span> Tentang Saya </h2><div class="text-[var(--color-text-muted)] space-y-4 text-lg leading-relaxed"><!--[-->`);
      ssrRenderList(unref(portfolioData).about, (paragraph, index) => {
        _push(`<p>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></div><div class="pt-6"><div class="grid grid-cols-2 gap-6"><div class="p-4 bg-[var(--color-surface-trans)] rounded-lg border border-[var(--color-border)] backdrop-blur-sm shadow-sm"><h3 class="text-3xl font-bold text-[var(--color-text)] mb-1">${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear() - 2023)}+</h3><p class="text-sm text-[var(--color-text-muted)]">Tahun Pengalaman</p></div><div class="p-4 bg-[var(--color-surface-trans)] rounded-lg border border-[var(--color-border)] backdrop-blur-sm shadow-sm"><h3 class="text-3xl font-bold text-[var(--color-text)] mb-1">20+</h3><p class="text-sm text-[var(--color-text-muted)]">Proyek Selesai</p></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$6, { __name: "AboutSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PlanetBackground",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark: isDark2 } = useTheme();
    const containerRef = ref(null);
    watch(isDark2, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "w-full h-full pointer-events-none"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PlanetBackground.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "PlanetBackground" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PlanetBackground = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        class: "py-20 relative overflow-hidden bg-[var(--color-surface-trans)]/30 backdrop-blur-sm"
      }, _attrs))}><div class="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-50 md:opacity-100 mix-blend-multiply dark:mix-blend-normal pointer-events-none overflow-hidden">`);
      _push(ssrRenderComponent(_component_PlanetBackground, null, null, _parent));
      _push(`</div><div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-surface)]/10 to-transparent pointer-events-none"></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Pengalaman Profesional</h2><div class="w-20 h-1 bg-[var(--color-accent-primary)] mx-auto rounded-full"></div></div><div class="relative max-w-4xl mx-auto"><div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[var(--color-border)]"></div><!--[-->`);
      ssrRenderList(unref(portfolioData).experiences, (job, index) => {
        _push(`<div class="relative mb-12 last:mb-0 group"><div class="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-[var(--color-accent-primary)] rounded-full border-4 border-[var(--color-surface)] z-20 group-hover:scale-150 transition-transform duration-300"></div><div class="${ssrRenderClass([
          "relative md:w-1/2 pl-8 md:pl-0",
          index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:ml-auto md:pl-12"
        ])}"><div class="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-xl hover:border-[var(--color-accent-primary)]/50 transition-colors duration-300 shadow-sm hover:shadow-lg"><div class="${ssrRenderClass([[index % 2 === 0 ? "md:justify-end" : "md:justify-start"], "flex items-center gap-2 mb-2"])}">`);
        _push(ssrRenderComponent(unref(Briefcase), { class: "w-4 h-4 text-[var(--color-accent-primary)]" }, null, _parent));
        _push(`<span class="text-sm font-mono text-[var(--color-accent-primary)]">${ssrInterpolate(job.duration)}</span></div><h3 class="text-xl font-bold text-[var(--color-text)] mb-1">${ssrInterpolate(job.role)}</h3><h4 class="text-lg text-[var(--color-text-muted)] mb-4">${ssrInterpolate(job.company)}</h4><ul class="${ssrRenderClass([[index % 2 === 0 ? "md:text-right" : "md:text-left"], "space-y-2 text-sm text-[var(--color-text-muted)]"])}"><!--[-->`);
        ssrRenderList(job.description, (desc, i) => {
          _push(`<li>${ssrInterpolate(desc)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "ExperienceSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const barsVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "py-20 relative overflow-hidden"
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center mb-16"><h2 class="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] mb-4 tracking-tight" style="${ssrRenderStyle({ "letter-spacing": "-0.02em" })}"> Keahlian <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Teknis</span></h2><div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full"></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-5"><!--[-->`);
      ssrRenderList(unref(portfolioData).skills, (skill, index) => {
        _push(`<div class="group relative bg-[var(--color-surface)] border border-[var(--color-border)] p-6 rounded-2xl hover:border-[var(--color-accent-primary)]/50 transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10"><div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl origin-left"></div><div class="flex flex-col items-center gap-4"><div class="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-background)] group-hover:border-[var(--color-accent-primary)]/40 group-hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300 overflow-hidden p-3">`);
        if (skill.logo) {
          _push(`<img${ssrRenderAttr("src", skill.logo)}${ssrRenderAttr("alt", skill.name)} class="w-full h-full object-contain">`);
        } else {
          _push(`<span class="text-2xl font-black font-display text-[var(--color-text)]">${ssrInterpolate(skill.name.charAt(0))}</span>`);
        }
        _push(`</div><h3 class="font-semibold text-[var(--color-text)] text-base text-center group-hover:text-[var(--color-accent-primary)] transition-colors duration-300">${ssrInterpolate(skill.name)}</h3><div class="w-full bg-[var(--color-border)] h-1.5 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: barsVisible.value ? `${skill.level}%` : "0%" })}"></div></div><span class="text-xs text-[var(--color-text-muted)] tabular-nums">${ssrInterpolate(skill.level)}%</span></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "SkillsSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    useNavigation();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "py-20 relative overflow-hidden"
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center mb-16"><h2 class="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 tracking-tight"> Proyek <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">Unggulan</span></h2><div class="w-24 h-1.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full shadow-lg shadow-primary/50"></div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(portfolioData).projects, (project, index) => {
        _push(`<div class="group relative rounded-2xl overflow-hidden bg-[var(--color-surface-trans)] backdrop-blur-sm border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-accent-primary)]/20 cursor-zoom-in"><div class="h-56 overflow-hidden relative"><div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-500"></div><div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="bg-[var(--color-surface)]/80 backdrop-blur-md p-3 rounded-full border border-white/20 text-[var(--color-text)]">`);
        _push(ssrRenderComponent(unref(ZoomIn), { class: "w-6 h-6" }, null, _parent));
        _push(`</div></div>`);
        if (project.image) {
          _push(`<img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">`);
        } else {
          _push(`<div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"><span class="text-gray-500 font-medium">Tidak Ada Gambar</span></div>`);
        }
        _push(`</div><div class="p-6 relative z-20 flex flex-col h-[calc(100%-14rem)]"><h3 class="text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-primary)] group-hover:to-[var(--color-accent-secondary)] transition-all duration-300">${ssrInterpolate(project.title)}</h3><p class="text-[var(--color-text-muted)] mb-6 line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="px-3 py-1 text-xs font-semibold bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)]/20 rounded-full group-hover:bg-[var(--color-accent-primary)]/20 transition-colors">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div><div class="mt-auto pt-4 border-t border-[var(--color-border)]/50">`);
        if (project.detailId) {
          _push(`<button class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] transition-colors"> Lihat Detail `);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 group-hover:translate-x-1 transition-transform" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "ProjectsSection" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-24 relative overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 pointer-events-none"><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse, var(--spotlight-color), transparent 70%)" })}"></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="max-w-2xl mx-auto text-center"><h2 class="font-display text-4xl md:text-6xl font-black text-[var(--color-text)] mb-4 tracking-tight" style="${ssrRenderStyle({ "letter-spacing": "-0.03em" })}"> Mari Bekerja <span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Sama.</span></h2><div class="w-16 h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full mb-8"></div><p class="text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed"> Saya terbuka untuk peluang baru, kolaborasi proyek, maupun sekadar obrolan tentang teknologi. Pesan Anda pasti akan saya baca! </p><a${ssrRenderAttr("href", `mailto:${unref(portfolioData).socials.email}`)} class="group relative inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-accent-primary)] text-white font-bold font-display text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-accent-primary)]/40 hover:-translate-y-1"><span class="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>`);
      _push(ssrRenderComponent(unref(Mail), { class: "relative w-5 h-5" }, null, _parent));
      _push(`<span class="relative">Kirim Pesan</span>`);
      _push(ssrRenderComponent(unref(ArrowUpRight), { class: "relative w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" }, null, _parent));
      _push(`</a><div class="flex justify-center gap-4 mt-10"><a${ssrRenderAttr("href", unref(portfolioData).socials.linkedin)} target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5">`);
      _push(ssrRenderComponent(unref(Linkedin), { class: "w-4 h-4" }, null, _parent));
      _push(` LinkedIn </a>`);
      if (unref(portfolioData).socials.github) {
        _push(`<a${ssrRenderAttr("href", unref(portfolioData).socials.github)} target="_blank" class="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5">`);
        _push(ssrRenderComponent(unref(Github), { class: "w-4 h-4" }, null, _parent));
        _push(` GitHub </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[var(--color-text-muted)]"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(portfolioData).name)}.</p><p class="font-mono text-xs">Nuxt 3 · TypeScript · Tailwind CSS</p></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "ContactSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Isnanto Budi Nurrahman — Portofolio"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0$1;
      const _component_HeroSection = __nuxt_component_1;
      const _component_AboutSection = __nuxt_component_2;
      const _component_ExperienceSection = __nuxt_component_3;
      const _component_SkillsSection = __nuxt_component_4;
      const _component_ProjectsSection = __nuxt_component_5;
      const _component_ContactSection = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BSHgKpqg.mjs.map
