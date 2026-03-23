import React, { useEffect, useState } from 'react';
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
  <div className="relative flex flex-col items-center justify-center min-h-[600px] pt-36 md:pt-56 px-4 overflow-hidden">
      <AnimatedBlurBackground />
      <section className="w-full max-w-[1400px] section-shell">
        <div className="mb-6 md:mb-8 flex justify-center lg:justify-start" data-aos="fade-down">
          <span className="inline-flex items-center rounded-full bg-[#ecf1fb] text-[#11243B] font-semibold px-6 py-2 text-base md:text-lg shadow-md">
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
              <div className="absolute bottom-5 left-5 rounded-full bg-white/88 backdrop-blur px-4 py-2 text-sm font-semibold text-[#1f4d84]">
                {t.aboutPage.community}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
            <div className="glass-panel rounded-[28px] p-7 md:p-10 h-full border border-[#d9e5f7]">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#244469] leading-[1.02] mb-6">
                {t.aboutPage.title}
              </h2>
              <p className="text-lg md:text-2xl font-medium text-[#6f747b] leading-relaxed">
                {t.aboutPage.paragraph1}
              </p>
              <p className="mt-6 pt-6 border-t border-[#dbe6f6] text-lg md:text-2xl font-medium text-[#6f747b] leading-relaxed">
                {t.aboutPage.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tarjetas Qué hacemos */}
      <section className="w-full max-w-[1400px] mt-20 section-shell">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm md:text-base tracking-[0.16em] uppercase text-[#4b6f9b] font-semibold mb-3">
            {t.aboutPage.focus}
          </p>
          <h2 className="headline-md text-[#23395d]">{t.aboutPage.whatWeDo}</h2>
        </div>

  <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-8">
          {/* Consultoría */}
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-9 flex-1 flex flex-col items-center w-full lg:min-w-[280px] lg:max-w-[400px] min-h-[340px] lg:h-[460px] text-white border border-[#6e95c3]/50 bg-gradient-to-b from-[#4675ad] to-[#315c90] shadow-md transform-gpu translate-y-0 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <img src={ConsultSVG} alt={t.aboutPage.consultingTitle} className="w-12 h-12" />
            </div>
            <h3 className="text-[2rem] leading-tight font-extrabold mb-3">{t.aboutPage.consultingTitle}</h3>
            <p className="text-center text-lg leading-relaxed text-white/95">
              {t.aboutPage.consultingDescription}
            </p>
          </div>
          {/* Educación */}
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-9 flex-1 flex flex-col items-center w-full lg:min-w-[280px] lg:max-w-[400px] min-h-[340px] lg:h-[460px] text-white border border-[#6e95c3]/50 bg-gradient-to-b from-[#4675ad] to-[#315c90] shadow-md transform-gpu translate-y-0 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <img src={EducationSVG} alt={t.aboutPage.educationTitle} className="w-12 h-12" />
            </div>
            <h3 className="text-[2rem] leading-tight font-extrabold mb-3">{t.aboutPage.educationTitle}</h3>
            <p className="text-center text-lg leading-relaxed text-white/95">
              {t.aboutPage.educationDescription}
            </p>
          </div>
          {/* Difusión */}
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-9 flex-1 flex flex-col items-center w-full lg:min-w-[280px] lg:max-w-[400px] min-h-[340px] lg:h-[460px] text-white border border-[#6e95c3]/50 bg-gradient-to-b from-[#4675ad] to-[#315c90] shadow-md transform-gpu translate-y-0 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <img src={PostSVG} alt={t.aboutPage.disseminationTitle} className="w-12 h-12" />
            </div>
            <h3 className="text-[2rem] leading-tight font-extrabold mb-3">{t.aboutPage.disseminationTitle}</h3>
            <p className="text-center text-lg leading-relaxed text-white/95">
              {t.aboutPage.disseminationDescription}
            </p>
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