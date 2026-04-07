import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { ArrowLeft, CheckCircle2, FileCheck, Send, Bell, Smartphone, Activity } from 'lucide-vue-next';
import { p as projectAndroidImg } from './project menejemen android-Bxbrq6jn.mjs';
import { u as useNavigation } from './useNavigation-JK2rjkhW.mjs';
import { u as useHead } from './composables-CIjl6b6s.mjs';
import './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InsuranceMobileDetail",
  __ssrInlineRender: true,
  setup(__props) {
    useNavigation();
    const modules = [
      {
        title: "E-Polis Digital",
        description: "Akses instan ke dokumen polis, jatuh tempo premi, dan e-card asuransi di mana saja.",
        icon: FileCheck
      },
      {
        title: "Pengajuan & Lacak Klaim",
        description: "Kirim foto dokumen insiden, laporkan kecelakaan, dan pantau status persetujuan klaim secara real-time.",
        icon: Send
      },
      {
        title: "Notifikasi & Portal Agen",
        description: "Pengingat otomatis untuk nasabah, serta modul khusus (dashboard) untuk agen lapangan melacak downline.",
        icon: Bell
      }
    ];
    const techStack = [
      { name: "Flutter & Dart", icon: Smartphone, desc: "Cross-platform Mobile UI" },
      { name: "REST API", icon: Activity, desc: "Sinkronisasi Data Real-time" },
      { name: "Android OS", icon: Smartphone, desc: "Target Platform Eksekusi" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[var(--color-bg)] pt-24 pb-20 selection:bg-primary selection:text-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><button class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-12 transition-colors group"><div class="p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/10 transition-colors">`);
      _push(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5 group-hover:-translate-x-1 transition-transform" }, null, _parent));
      _push(`</div><span class="font-medium">Kembali ke Portofolio</span></button><div class="mb-20 text-center space-y-6"><div class="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold font-mono tracking-widest uppercase"> Mobile App · B2C/B2B2C · Flutter </div><h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="${ssrRenderStyle({ "letter-spacing": "-0.03em" })}"> Aplikasi Mobile Asuransi:<br class="hidden md:block"><span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Di Genggaman Anda.</span></h1><p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed"> Platform interaktif klien untuk memberikan kontrol penuh terhadap polis, sekaligus memberdayakan produktivitas telemarketing/agen dan mempercepat proses pelaporan klaim. </p></div><div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative"><div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div><div class="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12"><div class="w-full lg:w-1/2 flex justify-center"><div class="relative aspect-[9/16] w-full max-w-xs bg-[var(--color-surface-trans)] backdrop-blur-md rounded-[2.5rem] border-[8px] border-[var(--color-surface)] shadow-2xl flex items-center justify-center overflow-hidden mix-blend-normal"><img${ssrRenderAttr("src", unref(projectAndroidImg))} alt="Insurance Mobile Dashboard Preview" class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 p-4"></div></div><div class="w-full lg:w-1/2 space-y-6"><h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">User Experience Kelas Enterprise</h3><p class="text-[var(--color-text-muted)] leading-relaxed"> Didesain mengutamakan mobilitas dan responsivitas, memastikan agen dan pemegang polis mendapat informasi relevan kapan pun dibutuhkan. </p><ul class="space-y-4 pt-4"><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Akses Cepat Klaim:</strong> Proses pelaporan terpandu (Guided Form) untuk mereduksi kesalahan input pengguna.</span></li><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Mode Offline/Cache:</strong> Ringkasan polis masih dapat dilihat meskipun jaringan tidak stabil berkat mekanisme sinkronisasi database lokal.</span></li><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Push Notification:</strong> Intervensi aktif untuk menginformasikan jatuh tempo atau promosi perpanjangan.</span></li></ul></div></div></div><div class="mb-24"><h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Fitur &amp; Layanan Aplikasi</h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(modules, (mod, index) => {
        _push(`<div class="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-colors hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10 group"><div class="w-14 h-14 bg-[var(--color-accent-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-primary)] group-hover:text-white text-[var(--color-accent-primary)] transition-colors">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(mod.icon), { class: "w-7 h-7" }, null), _parent);
        _push(`</div><h3 class="text-xl font-semibold text-[var(--color-text)] mb-3">${ssrInterpolate(mod.title)}</h3><p class="text-[var(--color-text-muted)] leading-relaxed">${ssrInterpolate(mod.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div><h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Spesifikasi Teknologi</h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(techStack, (stack, index) => {
        _push(`<div class="flex items-center gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]"><div class="p-3 bg-[var(--color-accent-primary)]/10 rounded-xl text-[var(--color-accent-primary)]">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stack.icon), { class: "w-8 h-8" }, null), _parent);
        _push(`</div><div><h4 class="font-semibold text-[var(--color-text)] text-lg">${ssrInterpolate(stack.name)}</h4><p class="text-sm text-[var(--color-text-muted)]">${ssrInterpolate(stack.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-details/InsuranceMobileDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ProjectDetailsInsuranceMobileDetail" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "insurance-mobile",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Insurance Mobile App | Detail Proyek"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectDetailsInsuranceMobileDetail = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ProjectDetailsInsuranceMobileDetail, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insurance-mobile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=insurance-mobile-5Vm7y_dM.mjs.map
