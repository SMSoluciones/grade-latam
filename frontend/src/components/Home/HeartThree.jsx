import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import heartStlUrl from "../../assets/Heart.stl?url";

const HeartThree = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.2, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.05);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe7e6, 1.25);
    keyLight.position.set(6, 7, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x77b5ff, 1.0);
    rimLight.position.set(-8, 3, -7);
    scene.add(rimLight);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xd12b2f,
      metalness: 0.08,
      roughness: 0.24,
      transmission: 0.03,
      clearcoat: 0.7,
      clearcoatRoughness: 0.22,
      sheen: 0.5,
      sheenColor: new THREE.Color(0xffd8d5),
    });

    const group = new THREE.Group();
    group.position.x = -1.35;
    group.position.y = 1.05;
    scene.add(group);

    const loader = new STLLoader();
    let geometry = null;
    let heartMesh = null;
    let disposed = false;
    let isHovering = false;
    let pointerNormX = 0;
    let pointerNormY = 0;
    let hoverMix = 0;

    const handlePointerEnter = () => {
      isHovering = true;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      pointerNormX = 0;
      pointerNormY = 0;
    };

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      pointerNormX = THREE.MathUtils.clamp(nx, -1, 1);
      pointerNormY = THREE.MathUtils.clamp(ny, -1, 1);
    };

    container.addEventListener("pointerenter", handlePointerEnter);
    container.addEventListener("pointerleave", handlePointerLeave);
    container.addEventListener("pointermove", handlePointerMove);

    loader.load(heartStlUrl, (loadedGeometry) => {
      if (disposed) {
        loadedGeometry.dispose();
        return;
      }

      loadedGeometry.computeVertexNormals();
      loadedGeometry.center();

      const box = new THREE.Box3().setFromBufferAttribute(
        loadedGeometry.getAttribute("position")
      );
      const size = new THREE.Vector3();
      box.getSize(size);
      const largest = Math.max(size.x, size.y, size.z) || 1;
      const scale = 3.45 / largest;
      loadedGeometry.scale(scale, scale, scale);

      geometry = loadedGeometry;
      heartMesh = new THREE.Mesh(geometry, material);
      heartMesh.rotation.x = -0.18;
      heartMesh.rotation.z = 0.14;
      group.add(heartMesh);
    });

    const updateGroupPosition = (width) => {
      if (width < 480) {
        group.position.x = -1.80;
        return;
      }

      if (width < 1024) {
        group.position.x = -1.35;
        return;
      }

      group.position.x = -0.95;
    };

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      updateGroupPosition(width);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      if (heartMesh) {
        hoverMix = THREE.MathUtils.lerp(hoverMix, isHovering ? 1 : 0, 0.04);

        const baseX = -Math.PI / 2;
        const baseY = 0;
        const baseZ = Math.PI / 2 + elapsed * 0.07;
        const hoverTiltX = pointerNormY * 0.06 * hoverMix;
        const hoverTiltY = pointerNormX * 0.08 * hoverMix;
        const hoverSpinBoost = 0.12 * hoverMix;

        heartMesh.rotation.x = baseX - hoverTiltX;
        heartMesh.rotation.y = baseY + hoverTiltY;
        heartMesh.rotation.z = baseZ + elapsed * hoverSpinBoost;
        heartMesh.position.y = Math.sin(elapsed * 0.7) * 0.025;
      }
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("pointermove", handlePointerMove);
      if (geometry) geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[230px] sm:h-[280px] md:h-[360px] lg:h-[430px]"
      aria-label="Corazon 3D"
    />
  );
};

export default HeartThree;