import React, { useState } from "react";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";
import corCovidLatamMainPdf from "../../library/CorCOVID LATAM main.pdf";
import corCovidLatamPsyPdf from "../../library/CorCOVID LATAM Psy.pdf";
import corCovidRationalePdf from "../../library/CorCOVID rationale.pdf";
import corVaccRationalePdf from "../../library/CorVacc rationale.pdf";
import corVaccResultsPdf from "../../library/CorVacc results.pdf";
import pafaModePdf from "../../library/PUBLICACION MODO PAFA PRIMERA.pdf";
import vipfarmaRationalePdf from "../../library/VIPFARMA rationale.pdf";

const iconBaseClass = "theme-chip w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center text-primary";

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6.5 5.5A2.5 2.5 0 0 1 9 3h9v16H9a2.5 2.5 0 0 0-2.5 2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 5.5V21H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h1.5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 7h5" strokeLinecap="round" />
    <path d="M10 10h5" strokeLinecap="round" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 12h3l2-4 3 8 2-4h6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 21s-6.5-4.35-8.5-8.24C2.2 10.2 3.3 6.9 6.6 6.1A4.8 4.8 0 0 1 12 8.1a4.8 4.8 0 0 1 5.4-2c3.3.8 4.4 4.1 3.1 6.66C18.5 16.65 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3 5 6v5c0 5.2 3.35 8.85 7 10 3.65-1.15 7-4.8 7-10V6l-7-3Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12h6" strokeLinecap="round" />
    <path d="M12 9v6" strokeLinecap="round" />
  </svg>
);

const PulseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 12h4l2.2-4.4L12.7 17l2.1-5H21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 5.5h12" strokeLinecap="round" opacity="0.35" />
    <path d="M6 18.5h12" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const categories = [
  {
    title: "COVID-19 y cardiometabolismo",
    description:
      "Estudios y publicaciones vinculadas al impacto de la pandemia en pacientes cardiometabólicos ambulatorios, incluyendo diseño, resultados y dimensión psicosocial.",
    icon: <BookIcon />,
    accentClass: "bibliography-accent-blue",
    resources: [
      {
        type: "Investigación",
        title: "CorCOVID LATAM Study: Rationale and Design",
        description: "Diseño y fundamento del estudio sobre el impacto de la pandemia en pacientes cardiometabólicos no infectados en Latinoamérica.",
        file: corCovidRationalePdf,
        format: "PDF",
        pages: 7,
      },
      {
        type: "Investigación",
        title: "CorCOVID LATAM Study: Main Publication",
        description: "Publicación principal del estudio en pacientes ambulatorios con enfermedad cardiometabólica y sin evidencia de COVID-19.",
        file: corCovidLatamMainPdf,
        format: "PDF",
        pages: 12,
      },
      {
        type: "Investigación",
        title: "CorCOVID LATAM Psy",
        description: "Material complementario enfocado en el impacto psicosocial y de salud mental asociado al contexto pandémico en la cohorte CorCOVID LATAM.",
        file: corCovidLatamPsyPdf,
        format: "PDF",
        pages: 13,
      },
    ],
  },
  {
    title: "Inmunización y prevención cardiovascular",
    description:
      "Publicaciones enfocadas en vacunación, prevención y enfermedad cardiovascular en Latinoamérica, con material de racional y resultados del estudio CorVacc.",
    icon: <HeartPulseIcon />,
    accentClass: "bibliography-accent-coral",
    resources: [
      {
        type: "Investigación",
        title: "CorVacc Study: Rationale",
        description: "Documento de base conceptual y metodológica para el estudio sobre inmunización y enfermedad cardiovascular.",
        file: corVaccRationalePdf,
        format: "PDF",
        pages: 9,
      },
      {
        type: "Investigación",
        title: "Immunization and Cardiovascular Disease in Latin America: CorVacc Results",
        description: "Resultados del estudio CorVacc sobre vacunas, factores de riesgo y enfermedad cardiovascular en la región.",
        file: corVaccResultsPdf,
        format: "PDF",
        pages: 15,
      },
    ],
  },
  {
    title: "Arritmias y monitoreo",
    description:
      "Material orientado a fibrilación auricular y procedimientos de evaluación vinculados al estudio PA/AF mode.",
    icon: <ShieldIcon />,
    accentClass: "bibliography-accent-green",
    resources: [
      {
        type: "Investigación",
        title: "PA/AF Mode Study Procedures",
        description: "Publicación con procedimientos del estudio PA/AF mode, vinculada a evaluación y seguimiento en arritmias.",
        file: pafaModePdf,
        format: "PDF",
        pages: 6,
      },
    ],
  },
  {
    title: "Farmacoterapia y práctica clínica",
    description:
      "Documentos de base metodológica asociados a evaluación farmacológica y desarrollo de investigación clínica en el entorno de práctica médica.",
    icon: <PulseIcon />,
    accentClass: "bibliography-accent-gold",
    resources: [
      {
        type: "Investigación",
        title: "VIPFARMA Rationale",
        description: "Documento de racional del proyecto VIPFARMA, incorporado como material de consulta técnica dentro del área farmacoterapéutica.",
        file: vipfarmaRationalePdf,
        format: "PDF",
        pages: 4,
      },
    ],
  },
];

const Bibliography = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const totalResources = categories.reduce((sum, category) => sum + category.resources.length, 0);
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredCategories = categories
    .filter((category) => selectedCategory === "Todas" || category.title === selectedCategory)
    .map((category) => {
      const categoryMatchesSearch =
        normalizedSearch.length === 0 ||
        category.title.toLowerCase().includes(normalizedSearch) ||
        category.description.toLowerCase().includes(normalizedSearch);

      const resources = category.resources.filter((resource) => {
        if (normalizedSearch.length === 0) {
          return true;
        }

        if (categoryMatchesSearch) {
          return true;
        }

        return [resource.title, resource.description, resource.type, resource.format]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);
      });

      return {
        ...category,
        resources,
      };
    })
    .filter((category) => category.resources.length > 0);

  const filteredResourcesCount = filteredCategories.reduce(
    (sum, category) => sum + category.resources.length,
    0,
  );
  const hasActiveFilters = normalizedSearch.length > 0 || selectedCategory !== "Todas";

  return (
    <div className="bibliography-page relative overflow-hidden pt-28 md:pt-44 pb-16 md:pb-24">
      <AnimatedBlurBackground />

      <section className="section-shell relative z-10">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <span className="theme-section-badge inline-flex items-center rounded-full font-semibold px-6 py-2 text-sm md:text-base shadow-md">
            Grade Latam | Bibliografía e investigación
          </span>
          <h1 className="headline-xl text-primary mt-6">
            Biblioteca descargable por área
          </h1>
          <p className="mt-5 text-lg md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
            Reunimos bibliografía específica e investigaciones institucionales en un espacio simple de consulta y descarga, organizado por áreas prioritarias de trabajo.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="120">
          <div className="glass-panel rounded-[24px] p-6 border border-[var(--panel-border)] text-center">
            <div className="text-3xl font-extrabold text-primary">{categories.length}</div>
            <div className="text-sm uppercase tracking-[0.18em] text-muted mt-2">Áreas</div>
          </div>
          <div className="glass-panel rounded-[24px] p-6 border border-[var(--panel-border)] text-center">
            <div className="text-3xl font-extrabold text-primary">{totalResources}</div>
            <div className="text-sm uppercase tracking-[0.18em] text-muted mt-2">Descargas</div>
          </div>
          <div className="glass-panel rounded-[24px] p-6 border border-[var(--panel-border)] text-center">
            <div className="text-3xl font-extrabold text-primary">100%</div>
            <div className="text-sm uppercase tracking-[0.18em] text-muted mt-2">Acceso directo</div>
          </div>
        </div>

        <div
          className="mt-8 md:mt-10 max-w-6xl mx-auto glass-panel rounded-[30px] border border-[var(--panel-border)] p-5 md:p-7"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 md:gap-5">
            <label className="flex-1 block">
              <span className="block text-sm uppercase tracking-[0.16em] text-[#5d7b9e] font-semibold mb-3">
                Buscar publicación
              </span>
              <div className="relative">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setOpenItemId(null);
                  }}
                  placeholder="Buscar por título, tema o descripción"
                  className="theme-input w-full rounded-[20px] px-5 py-4 pr-12 outline-none transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </label>

            <label className="w-full lg:w-[290px] block">
              <span className="block text-sm uppercase tracking-[0.16em] text-muted font-semibold mb-3">
                Filtrar por área
              </span>
              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  setOpenItemId(null);
                }}
                className="theme-input w-full rounded-[20px] px-5 py-4 outline-none transition"
              >
                <option value="Todas">Todas las áreas</option>
                {categories.map((category) => (
                  <option key={category.title} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todas");
                setOpenItemId(null);
              }}
              className="cta-secondary whitespace-nowrap"
            >
              Limpiar filtros
            </button>
          </div>

          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-muted">
            <p className="text-sm md:text-base">
              {hasActiveFilters
                ? `Mostrando ${filteredResourcesCount} resultado${filteredResourcesCount === 1 ? "" : "s"}.`
                : `Explorá las ${totalResources} publicaciones disponibles.`}
            </p>
            {hasActiveFilters && (
              <p className="text-sm md:text-base font-semibold text-primary">
                Filtro activo: {selectedCategory === "Todas" ? "Todas las áreas" : selectedCategory}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section-shell relative z-10 mt-14 md:mt-20 space-y-8 md:space-y-10">
        {filteredCategories.length === 0 && (
          <div className="max-w-4xl mx-auto glass-panel rounded-[30px] border border-[var(--panel-border)] p-8 md:p-10 text-center" data-aos="fade-up">
            <p className="text-sm uppercase tracking-[0.16em] text-primary font-semibold">Sin coincidencias</p>
            <h2 className="headline-md text-[var(--color-text-main)] mt-4">No encontramos resultados para esa búsqueda</h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Probá con otro término o cambiá el filtro de área para ver más publicaciones disponibles.
            </p>
          </div>
        )}

        {filteredCategories.map((category, categoryIndex) => (
          <article
            key={category.title}
            className={`bibliography-category-card ${category.accentClass} rounded-[32px] border border-[var(--panel-border)] p-6 md:p-8 lg:p-10 shadow-[0_24px_60px_rgba(31,77,132,0.10)]`}
            data-aos="fade-up"
            data-aos-delay={categoryIndex * 90}
          >
            <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-8 lg:gap-10 items-start">
              <div className="xl:sticky xl:top-28">
                <div className={iconBaseClass}>{category.icon}</div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="theme-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Área
                  </span>
                  <span className="text-sm font-semibold text-muted">
                    {category.resources.length} recurso{category.resources.length > 1 ? "s" : ""}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-4 leading-tight">
                  {category.title}
                </h2>
                <p className="mt-4 text-muted text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-col gap-5 w-full max-w-3xl">
                {category.resources.map((resource, resourceIndex) => {
                  const itemId = `${category.title}-${resourceIndex}`;
                  const isOpen = openItemId === itemId;

                  return (
                    <div
                      key={resource.title}
                      className="theme-card-strong w-full rounded-[24px] shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        className="w-full min-h-[168px] p-5 md:p-6 text-left flex flex-col justify-between transition hover:bg-[var(--panel-subtle)]"
                        onClick={() => setOpenItemId(isOpen ? null : itemId)}
                        aria-expanded={isOpen}
                        aria-controls={`bibliography-panel-${categoryIndex}-${resourceIndex}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="theme-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                            {resource.type}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-muted">{resource.format}{resource.pages ? ` · ${resource.pages} págs.` : ""}</span>
                            <span className={`theme-chip inline-flex h-9 w-9 items-center justify-center rounded-full text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}>
                              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h3 className="text-xl font-bold text-[var(--color-text-main)] leading-snug">{resource.title}</h3>
                          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                            Tocar para ver detalle y descarga
                          </p>
                        </div>
                      </button>

                      <div
                        id={`bibliography-panel-${categoryIndex}-${resourceIndex}`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-[var(--panel-border)]">
                            <p className="text-muted leading-relaxed">{resource.description}</p>
                            <a
                              href={resource.file}
                              download
                              className="cta-secondary mt-6 self-start"
                            >
                              Descargar recurso
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </section>

    </div>
  );
};

export default Bibliography;