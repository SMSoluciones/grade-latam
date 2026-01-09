import React, { useRef, useState, useEffect } from "react";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";

const testimonialsData = [
  {
    id: 1,
    name: "Fatima Khoury",
    handle: "@dilatory_curtains_98",
    text:
      "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
  },
  {
    id: 2,
    name: "Lucas Moreno",
    handle: "@luc_moren",
    text:
      "Excelente experiencia, los cursos son claros y aplicables. Recomendado para profesionales que buscan actualización continua.",
  },
  {
    id: 3,
    name: "María Pérez",
    handle: "@mariaperez",
    text:
      "Muy útil y fácil de usar. El material es de alta calidad y el equipo responde rápido a consultas.",
  },
  {
    id: 4,
    name: "Diego Fernández",
    handle: "@diego_f",
    text:
      "He mejorado mis conocimientos profesionales gracias a los cursos. Los especialistas son de primer nivel.",
  },
  {
    id: 5,
    name: "Ana Gómez",
    handle: "@ana_g",
    text:
      "La plataforma es clara y los eventos muy bien organizados. Volvería a tomar más cursos sin duda.",
  },
  {
    id: 6,
    name: "Sergio Ramos",
    handle: "@sergio_r",
    text:
      "Contentos con la experiencia. Aprendí herramientas prácticas que uso en mi trabajo diario.",
  },
];

const TestimonialCard = ({ item }) => {
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 relative text-left min-h-[200px]"
      data-aos="fade-up"
    >
      {/* quote icon */}
      <div className="absolute -top-4 left-6 bg-white rounded-full p-2 shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.17 6A5 5 0 0 0 2 11v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a3 3 0 0 1 3-3h.17A5 5 0 0 0 7.17 6zM17.17 6A5 5 0 0 0 12 11v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a3 3 0 0 1-3-3h-.83z" />
        </svg>
      </div>

      <p className="text-sm text-gray-700 mb-6 leading-6">{item.text}</p>

      <div className="border-t border-gray-200 pt-4 mt-auto flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#eef2ff] to-[#dbeafe] flex items-center justify-center text-sm font-semibold text-[#23395d]">{initials}</div>
        <div>
          <div className="font-semibold text-sm text-[#23395d]">{item.name}</div>
          <div className="text-xs text-gray-400">{item.handle}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = testimonialsData.length;

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index];
    if (child) {
      // offsetLeft relative to the scroll container
      const left = child.offsetLeft - container.offsetLeft;
      container.scrollTo({ left, behavior: "smooth" });
    }
  };

  const prev = () => scrollToIndex(Math.max(0, currentIndex - 1));
  const next = () => scrollToIndex(Math.min(itemCount - 1, currentIndex + 1));

  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children);
    const center = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDist = Infinity;
    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIndex = idx;
      }
    });
    setCurrentIndex(nearestIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    // inicializa el índice
    onScroll();
    const handleResize = () => scrollToIndex(currentIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full py-16">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#23395d] mb-8"
        data-aos="fade-up"
      >
        Testimonios
      </h2>

      <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <AnimatedBlurBackground />
            <div className="relative z-10">
              {/* Mobile: slider 1 a 1 usando scroll-snap. Visible en <sm */}
              <div className="sm:hidden relative">
                <div
                  ref={scrollRef}
                  onScroll={onScroll}
                  className="flex gap-4 px-4 pb-4 overflow-x-auto snap-x snap-mandatory touch-pan-x scroll-smooth"
                >
                  {testimonialsData.map((t) => (
                    <div key={t.id} className="flex-shrink-0 w-full snap-center">
                      <TestimonialCard item={t} />
                    </div>
                  ))}
                </div>

                {/* Botones de navegación */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-auto">
                    <button
                      type="button"
                      aria-label="Anterior"
                      className={"w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center " + (currentIndex === 0 ? "opacity-50 pointer-events-none" : "")}
                      onClick={prev}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#23395d]">
                        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-auto">
                    <button
                      type="button"
                      aria-label="Siguiente"
                      className={"w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center " + (currentIndex === itemCount - 1 ? "opacity-50 pointer-events-none" : "")}
                      onClick={next}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#23395d]">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop / Tablet: grid estándar */}
              <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6">
                {testimonialsData.map((t) => (
                  <TestimonialCard key={t.id} item={t} />
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
