import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import heartStlUrl from "../../assets/Heart.stl?url";
import brainStlUrl from "../../assets/3D/Brain.stl?url";
import liverStlUrl from "../../assets/3D/liver.stl?url";
import kidneyStlUrl from "../../assets/3D/Kidney.stl?url";

const ORGAN_MODELS = [
  { label: "Corazon", url: heartStlUrl, fitSize: 3.45, color: 0xc61f36 },
  { label: "Kidney", url: kidneyStlUrl, fitSize: 3.25, color: 0x9a4f52 },
  { label: "Brain", url: brainStlUrl, fitSize: 3.25, color: 0xe4b2ba },
  { label: "Liver", url: liverStlUrl, fitSize: 3.25, color: 0x6e3e2e },
];

const CAROUSEL_INTERVAL_MS = 3200;
const ROTATION_SPEED = 0.14;
const HEART_INDEX = 0;

const HeartThree = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);

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
      transparent: true,
      opacity: 1,
      transmission: 0.03,
      clearcoat: 0.7,
      clearcoatRoughness: 0.22,
      sheen: 0.5,
      sheenColor: new THREE.Color(0xffd8d5),
    });

    const group = new THREE.Group();
    group.position.x = 0;
    group.position.y = 0;
    scene.add(group);

    const loader = new STLLoader();
    const geometries = new Array(ORGAN_MODELS.length).fill(null);
    let organMesh = null;
    let currentOrganIndex = 0;
    let carouselStarted = false;
    let carouselIntervalId = 0;
    let transitionTween = null;
    let disposed = false;
    let isHovering = false;
    let pointerNormX = 0;
    let pointerNormY = 0;
    let hoverMix = 0;
    const transitionOffsets = { z: 0 };

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

    const prepareGeometry = (rawGeometry, fitSize) => {
      rawGeometry.computeVertexNormals();
      rawGeometry.center();

      const box = new THREE.Box3().setFromBufferAttribute(
        rawGeometry.getAttribute("position")
      );
      const size = new THREE.Vector3();
      box.getSize(size);
      const largest = Math.max(size.x, size.y, size.z) || 1;
      const scale = fitSize / largest;
      rawGeometry.scale(scale, scale, scale);

      return rawGeometry;
    };

    const applyOrgan = (index) => {
      const geometry = geometries[index];
      if (!geometry || disposed) return;

      if (!organMesh) {
        organMesh = new THREE.Mesh(geometry, material);
        organMesh.rotation.x = -0.18;
        organMesh.rotation.z = 0.14;
        group.add(organMesh);
      } else {
        organMesh.geometry = geometry;
      }

      material.color.setHex(ORGAN_MODELS[index].color);

      currentOrganIndex = index;
      container.setAttribute("aria-label", `${ORGAN_MODELS[index].label} 3D`);
    };

    const transitionToOrgan = (index) => {
      if (!organMesh || !geometries[index] || disposed || index === currentOrganIndex) {
        return;
      }

      if (transitionTween) {
        transitionTween.kill();
        transitionTween = null;
      }

      transitionTween = gsap.timeline({
        onComplete: () => {
          transitionTween = null;
        },
      });

      transitionTween
        .to(
          material,
          {
            opacity: 0.18,
            duration: 0.26,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          organMesh.scale,
          {
            x: 0.83,
            y: 0.83,
            z: 0.83,
            duration: 0.26,
            ease: "power2.in",
          },
          0
        )
        .to(
          transitionOffsets,
          {
            z: 0.45,
            duration: 0.26,
            ease: "power2.in",
          },
          0
        )
        .add(() => {
          applyOrgan(index);
        })
        .to(
          material,
          {
            opacity: 1,
            duration: 0.32,
            ease: "power2.out",
          },
          ">"
        )
        .to(
          organMesh.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.4,
            ease: "back.out(1.6)",
          },
          "<"
        )
        .to(
          transitionOffsets,
          {
            z: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        );
    };

    const getNextAvailableIndex = (fromIndex) => {
      for (let step = 1; step <= geometries.length; step += 1) {
        const candidate = (fromIndex + step) % geometries.length;
        if (geometries[candidate]) return candidate;
      }

      return fromIndex;
    };

    const startCarousel = () => {
      if (carouselStarted || disposed) return;
      carouselStarted = true;
      carouselIntervalId = window.setInterval(() => {
        const nextIndex = getNextAvailableIndex(currentOrganIndex);
        if (nextIndex !== currentOrganIndex) {
          transitionToOrgan(nextIndex);
        }
      }, CAROUSEL_INTERVAL_MS);
    };

    ORGAN_MODELS.forEach((model, index) => {
      loader.load(model.url, (loadedGeometry) => {
        if (disposed) {
          loadedGeometry.dispose();
          return;
        }

        geometries[index] = prepareGeometry(loadedGeometry, model.fitSize);

        // Always start on heart, regardless of which STL finishes loading first.
        if (!organMesh && geometries[HEART_INDEX]) {
          applyOrgan(HEART_INDEX);
          startCarousel();
        }
      });
    });

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;

      // Fit the organ so it always stays within the canvas on both axes
      const fovRad = (camera.fov * Math.PI) / 180;
      const aspect = width / height;
      const halfExtent = 3.45 / 2; // largest fitSize / 2
      const fill = 0.82;           // 82% fill — leaves breathing room
      // distance needed to fit vertically
      const zForHeight = (halfExtent / fill) / Math.tan(fovRad / 2);
      // distance needed to fit horizontally (horizontal FOV depends on aspect)
      const hFovRad = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
      const zForWidth = (halfExtent / fill) / Math.tan(hFovRad / 2);
      // use whichever requires the camera to be farther (most conservative)
      camera.position.z = Math.max(zForHeight, zForWidth);

      camera.updateProjectionMatrix();
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      if (organMesh) {
        hoverMix = THREE.MathUtils.lerp(hoverMix, isHovering ? 1 : 0, 0.04);

        const baseX = -Math.PI / 2;
        const baseY = 0;
        const baseZ = Math.PI / 2 + elapsed * ROTATION_SPEED + transitionOffsets.z;
        const hoverTiltX = pointerNormY * 0.035 * hoverMix;
        const hoverTiltY = pointerNormX * 0.045 * hoverMix;

        organMesh.rotation.x = baseX - hoverTiltX;
        organMesh.rotation.y = baseY + hoverTiltY;
        organMesh.rotation.z = baseZ;
        organMesh.position.y = Math.sin(elapsed * 0.7) * 0.025;
      }
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.clearInterval(carouselIntervalId);
      if (transitionTween) {
        transitionTween.kill();
      }
      observer.disconnect();
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("pointermove", handlePointerMove);
      if (organMesh) {
        group.remove(organMesh);
      }
      geometries.forEach((geometry) => {
        if (geometry) geometry.dispose();
      });
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