import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
import { ArrowLeft, LayoutDashboard, Layers, ShieldCheck, CheckCircle2, Code2, Server, Database, X } from 'lucide-vue-next';
import { t as tenantMasterHomeImg } from './home tenant master-BSEbPi6n.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VelocityMarqueeRow",
  __ssrInlineRender: true,
  props: {
    items: {},
    baseVelocity: {},
    direction: {}
  },
  setup(__props) {
    const selectedImage = ref(null);
    const props = __props;
    props.baseVelocity ?? 2;
    props.direction ?? 1;
    ref(null);
    ref(null);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="overflow-hidden flex flex-nowrap w-full relative py-4"><div class="flex whitespace-nowrap items-center w-max will-change-transform"><!--[-->`);
      ssrRenderList(6, (clone) => {
        _push(`<div class="flex items-center shrink-0"><!--[-->`);
        ssrRenderList(__props.items, (src, idx) => {
          _push(`<img${ssrRenderAttr("src", src)} class="mx-4 inline-block h-40 w-60 rounded-2xl object-cover shadow-xl border border-[var(--color-border)]/50 hover:border-[var(--color-accent-primary)]/50 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.02] cursor-crosshair cursor-zoom-in" alt="TenantMaster screenshot" loading="lazy">`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (selectedImage.value) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"><div class="absolute inset-0 bg-[var(--color-surface)]/80 backdrop-blur-2xl transition-all duration-500"></div><button class="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:rotate-90 z-[110] hover:scale-110 shadow-lg border border-white/10 flex items-center justify-center shrink-0">`);
          _push2(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
          _push2(`</button><template><div class="relative z-[105] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform-gpu flex items-center justify-center"><img${ssrRenderAttr("src", selectedImage.value)} class="w-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"></div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/magicui/VelocityMarqueeRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$2, { __name: "MagicuiVelocityMarqueeRow" });
const demoImg = "" + __buildAssetsURL("demo tenant master.Dvb4THMe.png");
const userAplikasiImg = "" + __buildAssetsURL("tenant master managemen user and aplikasi.DX7J8dVj.png");
const adminDashboardImg = "" + __buildAssetsURL("admin dashboard.JzUFyh32.png");
const adminPanelImg = "" + __buildAssetsURL("admin panel managemen.CrtaLhp5.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TenantMasterDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const imagesRowA = [demoImg, tenantMasterHomeImg, userAplikasiImg];
    const imagesRowB = [adminDashboardImg, adminPanelImg];
    useNavigation();
    const modules = [
      {
        title: "Manajemen Tenant",
        description: "Registrasi mandiri, multi-tenant B2B, dan manajemen kuota pengguna.",
        icon: LayoutDashboard
      },
      {
        title: "Sistem Billing & Langganan",
        description: "Integrasi payment gateway (Midtrans), Virtual Account generate, dan invoice otomatis.",
        icon: Layers
      },
      {
        title: "Keamanan Tingkat Lanjut",
        description: "Data isolation per tenant, autentikasi berbasis JWT, dan otorisasi akses (RBAC).",
        icon: ShieldCheck
      }
    ];
    const techStack = [
      { name: "Next.js", icon: Code2, desc: "Frontend Multi-aplikasi" },
      { name: "Golang", icon: Server, desc: "Backend Microservices" },
      { name: "PostgreSQL", icon: Database, desc: "Relational Database with Row-Level Security" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MagicuiVelocityMarqueeRow = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[var(--color-bg)] pt-24 pb-20 selection:bg-primary selection:text-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><button class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-12 transition-colors group"><div class="p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/10 transition-colors">`);
      _push(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5 group-hover:-translate-x-1 transition-transform" }, null, _parent));
      _push(`</div><span class="font-medium">Kembali ke Portofolio</span></button><div class="mb-20 text-center space-y-6"><div class="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold font-mono tracking-widest uppercase"> SaaS · Microservices · Go </div><h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="${ssrRenderStyle({ "letter-spacing": "-0.03em" })}"> Kelola Bisnis SaaS<br class="hidden md:block"><span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Lebih Cerdas.</span></h1><p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed"> TenantMaster Cloud adalah platform multi-tenant enterprise-grade yang memfasilitasi bisnis B2B untuk mengelola klien, billing, dan layanan aplikasi dalam satu ekosistem yang kohesif. </p></div><div class="mb-24"><h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Modul &amp; Ekosistem Aplikasi</h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(modules, (mod, index) => {
        _push(`<div class="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-colors hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10 group"><div class="w-14 h-14 bg-[var(--color-accent-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-primary)] group-hover:text-white text-[var(--color-accent-primary)] transition-colors">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(mod.icon), { class: "w-7 h-7" }, null), _parent);
        _push(`</div><h3 class="text-xl font-semibold text-[var(--color-text)] mb-3">${ssrInterpolate(mod.title)}</h3><p class="text-[var(--color-text-muted)] leading-relaxed">${ssrInterpolate(mod.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative"><div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div><div class="relative z-10 flex flex-col lg:flex-row items-center gap-12"><div class="w-full lg:w-1/2 space-y-6"><h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Arsitektur Multi-Tenant Modern</h3><p class="text-[var(--color-text-muted)] leading-relaxed"> Arsitektur aplikasi dirancang untuk menangani ribuan tenant dengan privasi dan performa tinggi menggunakan pendekatan database isolation (Row-Level Security/Schemas) dan microservices. </p><ul class="space-y-4 pt-4"><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Isolasi Data:</strong> Setiap tenant hanya mengakses datanya sendiri, menjamin keamanan.</span></li><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Scalabilitas:</strong> Siap untuk horizontal scaling di cloud infrastructure.</span></li><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>API-First:</strong> Backend dapat dihubungkan ke berbagai platform frontend.</span></li></ul></div><div class="w-full lg:w-1/2"><div class="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-surface)]/40 backdrop-blur-md rounded-3xl border border-[var(--color-border)] shadow-2xl py-8 transform hover:-translate-y-1 transition-transform duration-500">`);
      _push(ssrRenderComponent(_component_MagicuiVelocityMarqueeRow, {
        items: imagesRowA,
        "base-velocity": 1,
        direction: 1
      }, null, _parent));
      _push(ssrRenderComponent(_component_MagicuiVelocityMarqueeRow, {
        items: imagesRowB,
        "base-velocity": 1,
        direction: -1
      }, null, _parent));
      _push(`<div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 md:w-1/3 bg-gradient-to-r from-[var(--color-bg)] to-transparent"></div><div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 md:w-1/3 bg-gradient-to-l from-[var(--color-bg)] to-transparent"></div></div></div></div></div><div><h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Spesifikasi Teknologi Utama</h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-details/TenantMasterDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ProjectDetailsTenantMasterDetail" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tenant-master",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "TenantMaster Cloud | Detail Proyek"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectDetailsTenantMasterDetail = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ProjectDetailsTenantMasterDetail, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tenant-master.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tenant-master-CwHBg_Ca.mjs.map
