import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

// Importa las imágenes de actividades/eventos
import All1 from "../../assets/Prof-Img/All1.jpg";
import All2 from "../../assets/Prof-Img/All2.jpg";
import All3 from "../../assets/Prof-Img/All3.jpg";
import All5 from "../../assets/Prof-Img/All5.jpg";

const eventGallery = [All1, All2, All3, All5];

const professionalImages = {
  "Alberto Lorenzatti": eventGallery,
  "Daniel Piskorz": eventGallery,
  "Ricardo Lopez Santi": eventGallery,
  "Fernando Wyss": eventGallery,
  "Osiris Valdez Tiburcio": eventGallery,
};

const ProfesionalSlider = ({ professional }) => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const autoTweenRef = useRef(null);
  const metricsRef = useRef({ loopDistance: 0, stepDistance: 320 });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = useMemo(
    () => (professional ? professionalImages[professional.name] || [] : []),
    [professional]
  );

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrevious = () => {
    if (!images.length) return;
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (!images.length) return;
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    setSelectedIndex(0);
    setModalOpen(false);
  }, [professional?.name]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track || !images.length) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const buildAutoScroll = () => {
      const items = track.querySelectorAll('[data-gallery-item="true"]');
      if (items.length < images.length + 1) return;

      const firstItem = items[0];
      const firstDuplicate = items[images.length];
      const secondItem = items[1];

      const loopDistance = firstDuplicate.offsetLeft - firstItem.offsetLeft;
      const stepDistance = secondItem
        ? secondItem.offsetLeft - firstItem.offsetLeft
        : firstItem.clientWidth;

      metricsRef.current = {
        loopDistance,
        stepDistance,
      };

      gsap.set(track, { x: 0 });
      if (autoTweenRef.current) {
        autoTweenRef.current.kill();
      }

      autoTweenRef.current = gsap.to(track, {
        x: -loopDistance,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    };

    buildAutoScroll();

    const observer = new ResizeObserver(() => {
      buildAutoScroll();
    });
    observer.observe(viewport);

    return () => {
      observer.disconnect();
      if (autoTweenRef.current) {
        autoTweenRef.current.kill();
        autoTweenRef.current = null;
      }
    };
  }, [images, professional?.name]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalOpen]);

  if (!professional || !images.length) return null;

  const loopedImages = [...images, ...images];

  return (
    <section ref={sectionRef} className="w-full max-w-[1240px] mx-auto px-2 sm:px-4">
      <div className="theme-card-strong rounded-2xl overflow-hidden border border-[var(--panel-border)]">
        <div ref={viewportRef} className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
          <div ref={trackRef} className="flex w-max gap-3 sm:gap-4 lg:gap-6">
            {loopedImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => openModal(idx % images.length)}
                data-gallery-item="true"
                className="group relative shrink-0 w-[76vw] sm:w-[52vw] lg:w-[34vw] xl:w-[30vw] 2xl:w-[26vw] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-[#07182f]"
                aria-label={`Abrir imagen ${(idx % images.length) + 1} en grande`}
              >
                <img
                  src={img}
                  alt={`${professional.name} galeria ${(idx % images.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#031024]/80 via-[#072046]/38 to-transparent" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020812]/88 backdrop-blur-[2px] px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-3xl leading-none"
            >
              ×
            </button>

            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#061427]">
              <img
                src={images[selectedIndex]}
                alt={`${professional.name} ampliada ${selectedIndex + 1}`}
                className="w-full max-h-[82vh] object-contain"
              />

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#0b223f]/75 hover:bg-[#183b66] text-white text-xl"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#0b223f]/75 hover:bg-[#183b66] text-white text-xl"
              >
                ›
              </button>

              <div className="absolute bottom-3 right-3 rounded-full bg-[#081a31]/70 px-3 py-1 text-xs text-white/90">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfesionalSlider;
