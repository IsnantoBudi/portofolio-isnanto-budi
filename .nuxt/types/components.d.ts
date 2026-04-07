
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AboutSection: typeof import("../../components/AboutSection.vue")['default']
  ContactSection: typeof import("../../components/ContactSection.vue")['default']
  ExperienceSection: typeof import("../../components/ExperienceSection.vue")['default']
  HeroSection: typeof import("../../components/HeroSection.vue")['default']
  NavBar: typeof import("../../components/NavBar.vue")['default']
  PlanetBackground: typeof import("../../components/PlanetBackground.vue")['default']
  ProjectsSection: typeof import("../../components/ProjectsSection.vue")['default']
  SkillsSection: typeof import("../../components/SkillsSection.vue")['default']
  ThemeBackground: typeof import("../../components/ThemeBackground.vue")['default']
  ThreeBackground: typeof import("../../components/ThreeBackground.vue")['default']
  MagicuiVelocityMarqueeRow: typeof import("../../components/magicui/VelocityMarqueeRow.vue")['default']
  ProjectDetailsAjarVisualDetail: typeof import("../../components/project-details/AjarVisualDetail.vue")['default']
  ProjectDetailsInsuranceMobileDetail: typeof import("../../components/project-details/InsuranceMobileDetail.vue")['default']
  ProjectDetailsInsuranceWebDetail: typeof import("../../components/project-details/InsuranceWebDetail.vue")['default']
  ProjectDetailsSyncBoardDetail: typeof import("../../components/project-details/SyncBoardDetail.vue")['default']
  ProjectDetailsTenantMasterDetail: typeof import("../../components/project-details/TenantMasterDetail.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAboutSection: LazyComponent<typeof import("../../components/AboutSection.vue")['default']>
  LazyContactSection: LazyComponent<typeof import("../../components/ContactSection.vue")['default']>
  LazyExperienceSection: LazyComponent<typeof import("../../components/ExperienceSection.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/HeroSection.vue")['default']>
  LazyNavBar: LazyComponent<typeof import("../../components/NavBar.vue")['default']>
  LazyPlanetBackground: LazyComponent<typeof import("../../components/PlanetBackground.vue")['default']>
  LazyProjectsSection: LazyComponent<typeof import("../../components/ProjectsSection.vue")['default']>
  LazySkillsSection: LazyComponent<typeof import("../../components/SkillsSection.vue")['default']>
  LazyThemeBackground: LazyComponent<typeof import("../../components/ThemeBackground.vue")['default']>
  LazyThreeBackground: LazyComponent<typeof import("../../components/ThreeBackground.vue")['default']>
  LazyMagicuiVelocityMarqueeRow: LazyComponent<typeof import("../../components/magicui/VelocityMarqueeRow.vue")['default']>
  LazyProjectDetailsAjarVisualDetail: LazyComponent<typeof import("../../components/project-details/AjarVisualDetail.vue")['default']>
  LazyProjectDetailsInsuranceMobileDetail: LazyComponent<typeof import("../../components/project-details/InsuranceMobileDetail.vue")['default']>
  LazyProjectDetailsInsuranceWebDetail: LazyComponent<typeof import("../../components/project-details/InsuranceWebDetail.vue")['default']>
  LazyProjectDetailsSyncBoardDetail: LazyComponent<typeof import("../../components/project-details/SyncBoardDetail.vue")['default']>
  LazyProjectDetailsTenantMasterDetail: LazyComponent<typeof import("../../components/project-details/TenantMasterDetail.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
