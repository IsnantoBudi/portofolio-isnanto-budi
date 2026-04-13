<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark } = useTheme();

const containerRef = ref<HTMLElement | null>(null);
let scene: any;
let camera: any;
let renderer: any;
let planetMesh: any;
let animationId: number;
let observer: IntersectionObserver;

let THREE: any;

const init = async () => {
    if (!containerRef.value) return;

    THREE = await import('three');

    // Scene
    scene = new THREE.Scene();

    // Camera
    const width = containerRef.value.clientWidth;
    const height = containerRef.value.clientHeight;
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 40; 

    // Renderer - Optimize for performance
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
    containerRef.value.appendChild(renderer.domElement);

    // Planet Group
    planetMesh = new THREE.Group();
    scene.add(planetMesh);

    // 1. Core Sphere (Wireframe) - Reduced detail
    const geometry = new THREE.IcosahedronGeometry(10, 1);
    
    // Wireframe Material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: isDark.value ? 0x10b981 : 0x1e293b, 
        wireframe: true,
        transparent: true,
        opacity: isDark.value ? 0.3 : 0.15,
    });
    
    const sphere = new THREE.Mesh(geometry, wireframeMaterial);
    planetMesh.add(sphere);

    // 2. Glowing Dots (Vertices)
    const pointsMaterial = new THREE.PointsMaterial({
        color: isDark.value ? 0x34d399 : 0x3b82f6, 
        size: 0.4,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
    });
    
    const points = new THREE.Points(geometry, pointsMaterial);
    planetMesh.add(points);

    // 3. Orbital Ring (Torus) - Reduced segments
    const ringGeometry = new THREE.TorusGeometry(14, 0.1, 8, 50);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: isDark.value ? 0x6ee7b7 : 0x93c5fd,
        transparent: true,
        opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.rotation.y = Math.PI / 6;
    planetMesh.add(ring);

    // 4. Satellite - Low poly
    const satelliteGeo = new THREE.IcosahedronGeometry(0.6, 0);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: isDark.value ? 0xffffff : 0x0f172a });
    const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
    satellite.position.set(16, 0, 0); 
    
    // Pivot
    const satellitePivot = new THREE.Object3D();
    satellitePivot.rotation.z = Math.PI / 4; 
    satellitePivot.add(satellite);
    planetMesh.add(satellitePivot);
    
    planetMesh.userData = { sphere, ring, satellitePivot };

    // Listeners
    window.addEventListener('resize', onWindowResize);
    
    // Intersection Observer
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationId) animate();
            } else {
                cancelAnimationFrame(animationId);
                animationId = 0;
            }
        });
    });
    observer.observe(containerRef.value);
};

const updateThemeColors = () => {
    if (!planetMesh || !THREE) return;
    
    const { sphere, ring, satellitePivot } = planetMesh.userData;
    
    if (sphere.material) {
        sphere.material.color.setHex(isDark.value ? 0x10b981 : 0x1e293b);
        sphere.material.opacity = isDark.value ? 0.3 : 0.15;
    }
    
    const points = planetMesh.children.find((c: any) => c.type === 'Points');
    if (points && points.material) {
        points.material.color.setHex(isDark.value ? 0x34d399 : 0x3b82f6);
    }

    if (ring && ring.material) {
        ring.material.color.setHex(isDark.value ? 0x6ee7b7 : 0x93c5fd);
    }
    
    const satellite = satellitePivot.children[0];
    if (satellite && satellite.material) {
        satellite.material.color.setHex(isDark.value ? 0xffffff : 0x0f172a);
    }
};

const onWindowResize = () => {
    if (!containerRef.value || !camera || !renderer) return;

    const width = containerRef.value.clientWidth;
    const height = containerRef.value.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
};

const animate = () => {
    animationId = requestAnimationFrame(animate);

    if (planetMesh) {
        planetMesh.userData.sphere.rotation.y += 0.002;
        planetMesh.userData.ring.rotation.z += 0.005;
        planetMesh.userData.satellitePivot.rotation.y += 0.015;
        planetMesh.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }

    renderer.render(scene, camera);
};

watch(isDark, () => {
    updateThemeColors();
});

onMounted(() => {
    init();
});

onUnmounted(() => {
    cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
    if (observer) observer.disconnect();
    window.removeEventListener('resize', onWindowResize);
});
</script>

<template>
  <div ref="containerRef" class="w-full h-full pointer-events-none"></div>
</template>
