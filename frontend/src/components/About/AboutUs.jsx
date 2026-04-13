import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EducationSVG from '../../assets/Education.svg';
import ConsultSVG from '../../assets/Consult.svg';
import PostSVG from '../../assets/post.svg';
import AnimatedBlurBackground from '../../utils/AnimatedBlurBackground';

 const AboutUs = () => {
  const t = {
    aboutPage: {
      badge: 'Grade Latam | Sobre nosotros',
      videoTitle: 'Bienvenidos a Grade Latam',
      openVideo: 'Abrir video en modal',
      closeVideo: 'Cerrar video',
      community: 'Comunidad cientifica en America Latina',
      title: 'Grade Latam',
      paragraph1:
        'Somos un grupo de opinion medica y actualizacion en America Latina, conformado por profesionales de reconocida trayectoria en instituciones cientificas nacionales e internacionales.',
      paragraph2:
        'Buscamos crear un espacio de intercambio y formacion continua, que acerque la ciencia a la practica clinica cotidiana, brindando asesoramiento a los actores de la salud.',
      focus: 'Nuestro enfoque',
      whatWeDo: 'Que hacemos',
      consultingTitle: 'Consultoria',
      consultingDescription:
        'En el campo de la innovacion biotecnologica surge el gran desafio de su implementacion acortando las brechas entre las guias de practica clinica y la asistencia medica.',
      educationTitle: 'Educacion',
      educationDescription:
        'Llevamos a cabo eventos basados en formatos dinamicos que puedan abordar con profundidad las diversas tematicas de los avances diagnosticos y terapeuticos.',
      disseminationTitle: 'Difusion',
      disseminationDescription:
        'Compartimos material cientifico para la comunidad medica y el publico en general, de manera rigurosa, accesible y adaptada a sus necesidades.',
    },
  };
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVideoModalOpen]);

  return (
  <>
  <div className="relative flex flex-col items-center justify-center min-h-[600px] pt-28 md:pt-44 px-4 overflow-hidden">
      <AnimatedBlurBackground />
      <section className="w-full max-w-[1400px] section-shell">
        <div className="mb-6 md:mb-8 flex justify-center lg:justify-start" data-aos="fade-down">
          <span className="theme-section-badge inline-flex items-center rounded-full font-semibold px-6 py-2 text-base md:text-lg shadow-md">
            {t.aboutPage.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          <div className="lg:col-span-6" data-aos="fade-right">
            <div className="relative h-full min-h-[340px] md:min-h-[420px] overflow-hidden rounded-[28px] border-2 border-[#4F8BD0] shadow-xl">
              <iframe
                className="w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/gw5FzfCkZDs?autoplay=1&mute=1&loop=1&playlist=gw5FzfCkZDs&playsinline=1&rel=0"
                title={t.aboutPage.videoTitle}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 z-10"
                aria-label={t.aboutPage.openVideo}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2542]/45 via-[#0f2542]/10 to-transparent" />
              <div className="theme-chip absolute bottom-5 left-5 rounded-full backdrop-blur px-4 py-2 text-sm font-semibold text-primary">
                {t.aboutPage.community}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
            <div className="glass-panel rounded-[28px] p-7 md:p-10 h-full border border-[var(--panel-border)]">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.02] mb-6">
                {t.aboutPage.title}
              </h2>
              <p className="text-lg md:text-2xl font-medium text-muted leading-relaxed">
                {t.aboutPage.paragraph1}
              </p>
              <p className="mt-6 pt-6 border-t border-[var(--panel-border)] text-lg md:text-2xl font-medium text-muted leading-relaxed">
                {t.aboutPage.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tarjetas Qué hacemos */}
      <section className="w-full max-w-[1400px] mt-20 section-shell">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm md:text-base tracking-[0.16em] uppercase text-primary font-semibold mb-3">
            {t.aboutPage.focus}
          </p>
          <h2 className="headline-md text-[var(--color-text-main)]">{t.aboutPage.whatWeDo}</h2>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-stretch gap-8 mb-8">
          {/* Consultoría */}
          <div className="feature-card relative overflow-hidden rounded-3xl p-8 md:p-9 flex-1 flex flex-col items-center w-full lg:min-w-[280px] lg:max-w-[400px] min-h-[340px] lg:h-[460px] text-white transform-gpu translate-y-0 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg" data-aos="fade-right" data-aos-delay="0" data-aos-duration="700">
            <div className="feature-card-icon w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <img src={ConsultSVG} alt={t.aboutPage.consultingTitle} className="w-12 h-12" />
            </div>
            <h3 className="text-[2rem] leading-tight font-extrabold mb-3">{t.aboutPage.consultingTitle}</h3>
            <p className="text-center text-lg leading-relaxed text-white/95">
              {t.aboutPage.consultingDescription}
            </p>
          </div>
          {/* Educación */}
          <div className="feature-card relative overflow-hidden rounded-3xl p-8 md:p-9 flex-1 flex flex-col items-center w-full lg:min-w-[280px] lg:max-w-[400px] min-h-[340px] lg:h-[460px] text-white transform-gpu translate-y-0 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg" data-aos="fade-right" data-aos-delay="320" data-aos-duration="700">
            <div className="feature-card-icon w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <img src={EducationSVG} alt={t.aboutPage.educationTitle} className="w-12 h-12" />
            </div>
            <h3 className="text-[2rem] leading-tight font-extrabold mb-3">{t.aboutPage.educationTitle}</h3>
            <p className="text-center text-lg leading-relaxed text-white/95">
              {t.aboutPage.educationDescription}
            </p>
          </div>
          {/* Difusión */}
          <div className="feature-card relative overflow-hidden rounded-3xl p-8 md:p-9 flex-1 flex flex-col items-center w-full lg:min-w-[280px] lg:max-w-[400px] min-h-[340px] lg:h-[460px] text-white transform-gpu translate-y-0 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg" data-aos="fade-right" data-aos-delay="640" data-aos-duration="700">
            <div className="feature-card-icon w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <img src={PostSVG} alt={t.aboutPage.disseminationTitle} className="w-12 h-12" />
            </div>
            <h3 className="text-[2rem] leading-tight font-extrabold mb-3">{t.aboutPage.disseminationTitle}</h3>
            <p className="text-center text-lg leading-relaxed text-white/95">
              {t.aboutPage.disseminationDescription}
            </p>
            <Link
              to="/bibliografia"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#fdfefe] px-6 py-3 text-base font-extrabold shadow-md transition hover:bg-[#eef5ff]"
              style={{ color: "#1f4d84" }}
              aria-label="Ver más sobre bibliografía"
            >
              <span>Ver más</span>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" strokeLinecap="round" />
                <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>

    {isVideoModalOpen && (
      <div
        className="fixed inset-0 z-[90] bg-[#0f2542]/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
        onClick={() => setIsVideoModalOpen(false)}
      >
        <div
          className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/65 text-white text-2xl leading-none flex items-center justify-center hover:bg-black/80 transition"
            aria-label={t.aboutPage.closeVideo}
          >
            ×
          </button>

          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/gw5FzfCkZDs?autoplay=1&mute=0&loop=1&playlist=gw5FzfCkZDs&playsinline=1&controls=1&rel=0"
              title={t.aboutPage.videoTitle}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    )}
  </>
  );
}
export default AboutUs;