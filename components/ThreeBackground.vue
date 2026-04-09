<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useTheme } from '~/composables/useTheme';

const { isDark } = useTheme();

const containerRef = ref<HTMLElement | null>(null);
// We use 'any' type here because we dynamically import THREE
let scene: any;
let camera: any;
let renderer: any;
let particlesMesh: any;
let animationId: number;

// Mouse interaction
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

let windowHalfX = 0;
let windowHalfY = 0;

const onDocumentMouseMove = (event: MouseEvent) => {
  mouseX = (event.clientX - windowHalfX);
  mouseY = (event.clientY - windowHalfY);
};

// Particle config
const PARTICLE_COUNT = 2000;
let particlesGeometry: any;
let particlesMaterial: any;

let THREE: any;

const init = async () => {
  if (!containerRef.value) return;

  // Dynamically import three.js ONLY when init is called (desktop only)
  // This completely removes three.js from the mobile JS payload and evaluation
  THREE = await import('three');

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  // Scene setup
  scene = new THREE.Scene();
  
  particlesMaterial = new THREE.PointsMaterial({
    size: 3,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  updateThemeColors();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  // Particles
  const vertices = [];
  const velocities = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = Math.random() * 2000 - 1000;
    const y = Math.random() * 2000 - 1000;
    const z = Math.random() * 2000 - 1000;
    vertices.push(x, y, z);
    velocities.push((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5);
  }

  particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  particlesGeometry.userData = { velocities };

  particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerRef.value.appendChild(renderer.domElement);

  // Listeners
  document.addEventListener('mousemove', onDocumentMouseMove);
  window.addEventListener('resize', onWindowResize);

  animate();
};

const updateThemeColors = () => {
  if (!particlesMaterial || !THREE) return;
  
  if (isDark.value) {
    particlesMaterial.color.setHex(0x34d399); 
    particlesMaterial.size = 2.5;
    particlesMaterial.opacity = 0.8;
  } else {
    particlesMaterial.color.setHex(0x0284c7);
    particlesMaterial.size = 3.5;
    particlesMaterial.opacity = 0.6;
  }
};

const onWindowResize = () => {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
};

const animate = () => {
  animationId = requestAnimationFrame(animate);

  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;

  if (particlesMesh && renderer && scene && camera) {
    particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
    particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
    particlesMesh.rotation.z += 0.001;

    renderer.render(scene, camera);
  }
};

watch(isDark, () => {
  updateThemeColors();
});

onMounted(() => {
  init();
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
    if (particlesGeometry) particlesGeometry.dispose();
    document.removeEventListener('mousemove', onDocumentMouseMove);
    window.removeEventListener('resize', onWindowResize);
  }
});
</script>

<template>
  <div ref="containerRef" class="fixed inset-0 -z-50 transition-colors duration-500" 
       :class="[ isDark ? 'bg-[var(--color-bg)]' : 'bg-[var(--color-bg)]' ]">
  </div>
</template>

<style scoped>
div {
  pointer-events: none;
}
</style>
