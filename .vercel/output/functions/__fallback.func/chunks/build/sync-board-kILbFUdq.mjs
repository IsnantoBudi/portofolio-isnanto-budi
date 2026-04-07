import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { ArrowLeft, Globe, CheckCircle2, Zap, LayoutDashboard, Users, Server, Database } from 'lucide-vue-next';
import { s as syncBoardImg } from './SyncBoard-r_21bAyt.mjs';
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
  __name: "SyncBoardDetail",
  __ssrInlineRender: true,
  setup(__props) {
    useNavigation();
    const modules = [
      {
        title: "Instant Sync",
        description: "Setiap perubahan pada board akan muncul di layar semua pengguna lain secara real-time tanpa perlu refresh halaman.",
        icon: Zap
      },
      {
        title: "Task Management",
        description: "Kemampuan untuk Create, Update, Status Toggle (Todo/Done), dan Delete tugas dengan lancar.",
        icon: LayoutDashboard
      },
      {
        title: "Active Users Counter",
        description: "Menampilkan jumlah pengguna yang sedang online dan aktif di dashboard pada saat yang bersamaan.",
        icon: Users
      },
      {
        title: "Optimistic UI",
        description: "Frontend memperbarui tampilan seketika sebelum konfirmasi server untuk memberikan pengalaman yang mulus dan responsif.",
        icon: Globe
      }
    ];
    const techStack = [
      { name: "Next.js 14+ (App Router)", icon: Globe, desc: "Frontend Framework & Optimistic UI" },
      { name: "Golang & WebSockets", icon: Server, desc: "Backend & Real-time Broadcasting" },
      { name: "TiDB Cloud", icon: Database, desc: "Database Terdistribusi (MySQL Compatible)" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[var(--color-bg)] pt-24 pb-20 selection:bg-primary selection:text-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><button class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-12 transition-colors group"><div class="p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/10 transition-colors">`);
      _push(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5 group-hover:-translate-x-1 transition-transform" }, null, _parent));
      _push(`</div><span class="font-medium">Kembali ke Portofolio</span></button><div class="mb-20 text-center space-y-6"><div class="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-xs font-bold font-mono tracking-widest uppercase gap-2"><span>Real-time</span><span class="w-1 h-1 rounded-full bg-[var(--color-accent-primary)]"></span><span>Collaboration</span></div><h1 class="font-display text-5xl md:text-7xl font-black text-[var(--color-text)] tracking-tight leading-none max-w-4xl mx-auto" style="${ssrRenderStyle({ "letter-spacing": "-0.03em" })}"> SyncBoard<br class="hidden md:block"><span class="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Collaborative Task Board.</span></h1><p class="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed"> Dashboard kolaboratif di mana pengguna bisa menambah, mengedit, dan menghapus tugas secara real-time. Mendemonstrasikan kemampuan mengelola database terdistribusi dan sinkronisasi data dua arah. </p><div class="pt-6"><a href="https://sync-board-frontend-mu.vercel.app/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white rounded-full font-bold shadow-lg shadow-[var(--color-accent-primary)]/20 hover:shadow-[var(--color-accent-primary)]/40 hover:-translate-y-1 transition-all">`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-5 h-5" }, null, _parent));
      _push(` Buka Live Demo </a></div></div><div class="mb-24 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden relative"><div class="absolute inset-0 dot-grid text-[var(--color-border)] opacity-50 rounded-3xl"></div><div class="relative z-10 flex flex-col lg:flex-row items-center gap-12"><div class="w-full lg:w-1/2 space-y-6"><h3 class="font-display text-3xl font-black text-[var(--color-text)] tracking-tight">Arsitektur Skalabel dengan TiDB</h3><p class="text-[var(--color-text-muted)] leading-relaxed"> Basis data proyek ini didukung oleh TiDB, database SQL terdistribusi yang kompatibel dengan protokol MySQL. </p><ul class="space-y-4 pt-4"><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>Horizontal Scaling:</strong> TiDB dipilih karena keunggulannya dalam penskalaan horizontal (Horizontal Scaling), sangat cocok untuk aplikasi kolaboratif yang jumlah datanya bisa tumbuh dengan cepat dan tidak terduga.</span></li><li class="flex items-start gap-3 text-[var(--color-text)]">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-6 h-6 text-[var(--color-accent-primary)] shrink-0" }, null, _parent));
      _push(`<span><strong>WebSockets dengan Golang:</strong> Sinkronisasi status instan diatur oleh backend Golang (Gin Framework) menggunakan Gorilla WebSocket, me-manage payload secara efisien antar banyak pengguna.</span></li></ul></div><div class="w-full lg:w-1/2"><div class="w-full aspect-video bg-[var(--color-surface-trans)] backdrop-blur-md rounded-2xl border border-[var(--color-border)] shadow-2xl flex items-center justify-center p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 group"><img${ssrRenderAttr("src", unref(syncBoardImg))} alt="SyncBoard Dashboard Preview" class="w-full h-full object-cover object-top rounded-xl shadow-lg group-hover:scale-[1.03] transition-transform duration-700 opacity-90 hover:opacity-100"></div></div></div></div><div class="mb-24"><h2 class="font-display text-3xl md:text-4xl font-black text-[var(--color-text)] mb-10 text-center tracking-tight">Fitur &amp; Nilai Jual</h2><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(modules, (mod, index) => {
        _push(`<div class="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/50 transition-colors hover:shadow-xl hover:shadow-[var(--color-accent-primary)]/10 group"><div class="w-14 h-14 bg-[var(--color-accent-primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-primary)] group-hover:text-white text-[var(--color-accent-primary)] transition-colors">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(mod.icon), { class: "w-7 h-7" }, null), _parent);
        _push(`</div><h3 class="text-xl font-semibold text-[var(--color-text)] mb-3">${ssrInterpolate(mod.title)}</h3><p class="text-[var(--color-text-muted)] text-sm leading-relaxed">${ssrInterpolate(mod.description)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project-details/SyncBoardDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ProjectDetailsSyncBoardDetail" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sync-board",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "SyncBoard | Detail Proyek"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectDetailsSyncBoardDetail = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ProjectDetailsSyncBoardDetail, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sync-board.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sync-board-kILbFUdq.mjs.map
