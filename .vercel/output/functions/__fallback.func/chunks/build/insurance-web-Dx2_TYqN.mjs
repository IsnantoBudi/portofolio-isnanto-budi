import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { ArrowLeft, CheckCircle2, FileText, Activity, Shield, Code2, Database } from 'lucide-vue-next';
import { p as projectWebImg } from './project menejemen web-CPlpqOev.mjs';
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
  __name: "InsuranceWebDetail",
  __ssrInlineRender: true,
  setup(__props) {
    useNavigation();
    const modules = [
      {
        title: "Manajemen Polis",
        description: "Pembuatan, pembaruan, dan pelacakan status polis asuransi nasabah secara end-to-end.",
        icon: FileText
      },
      {
        title: "Administrasi & Klaim",
        description: "Modul underwriting dan workflow persetujuan klaim bertingkat untuk efisiensi.",
        icon: Activity
      },
      {
        title: "Keamanan & RBAC",
        description: "Pengaturan otorisasi ketat untuk Super Admin, Manajer Cabang, Agen, dan Data Entry.",
        icon: Shield
      }
    ];
    const techStack = [
      { name: "Angular", icon: Code2, desc: "Frontend Framework (Admin SPA)" },
      { name: "REST API", icon: Activity, desc: "Backend Integration" },
      { name: "SQL Database", icon: Database, desc: "Penyimpanan Data Relasional" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[var(--color-bg)] pt-24 pb-20 selection:bg-primary selection:text-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><button class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-12 transition-colors group"><div class="p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/10 transition-colors">`);
      _push(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5 group-hover:-translate-x-1 transition-transform" }, null, _parent));
      _push(`</div><span class="font-medium">Kembali ke Portofolio</span></button><div class="mb-20 text-center space-y-6"><div class="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold font-mono tracking-widest uppercase"> Web Admin · Enterprise · Angular </div><h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="${ssrRenderStyle({ "letter-spacing": "-0.03em" })}"> Core System<br class="hidden md:block"><span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Manajemen Asuransi.</span></h1><p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed"> Platform back-office komprehensif yang dirancang untuk mengelola seluruh siklus hidup polis asuransi, proses klaim, dan administrasi operasional dengan sistem hak akses yang terkontrol ketat (RBAC). </p></div><div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative"><div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div><div class="relative z-10 flex flex-col lg:flex-row items-center gap-12"><div class="w-full lg:w-1/2 space-y-6"><h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Admin Dashboard Terpusat</h3><p class="text-[var(--color-text-muted)] leading-relaxed"> Mendigitalisasi pengelolaan dokumen asuransi manual menjadi alur kerja web yang efisien. Memudahkan tim internal untuk melakukan validasi tanpa memilah tumpukan kertas fisik. </p><ul class="space-y-4 pt-4"><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Tracking Polis Real-time:</strong> Panel khusus untuk melacak polis aktif, tertunda, dan kedaluwarsa.</span></li><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Manajemen Hak Akses:</strong> Pemisahan peran memastikan hanya pengguna dengan otoritas yang dapat mengakses data finansial klaim.</span></li></ul></div><div class="w-full lg:w-1/2"><div class="w-full aspect-video bg-[var(--color-surface-trans)] backdrop-blur-md rounded-2xl border border-[var(--color-border)] shadow-2xl flex items-center justify-center p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 group"><img${ssrRenderAttr("src", unref(projectWebImg))} alt="Insurance Web Dashboard Preview" class="w-full h-full object-cover object-top rounded-xl shadow-lg group-hover:scale-[1.03] transition-transform duration-700 opacity-90 hover:opacity-100"></div></div></div></div><div class="mb-24"><h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Fitur &amp; Modul Inti</h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-details/InsuranceWebDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ProjectDetailsInsuranceWebDetail" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "insurance-web",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Insurance Enterprise (Web) | Detail Proyek"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectDetailsInsuranceWebDetail = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ProjectDetailsInsuranceWebDetail, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insurance-web.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=insurance-web-Dx2_TYqN.mjs.map
