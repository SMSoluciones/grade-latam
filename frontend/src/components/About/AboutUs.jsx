import React from 'react';
import EducationSVG from '../../assets/Education.svg';
import ConsultSVG from '../../assets/Consult.svg';
import PostSVG from '../../assets/post.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoProm from '../../assets/VIDEOPROM.png'; // Usa la imagen que corresponda

 const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);
  return (
  <div className="relative flex flex-col items-center justify-center min-h-[600px] pt-36 md:pt-70 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-2/5 left-0 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-50 animate-random-move"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute top-1/10 left-1/4 w-20 h-20 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute bottom-1/2 right-1/9 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1400px] w-full">
        <div className="rounded-xl overflow-hidden border-4 border-[#4F8BD0] w-full max-w-[700px]" data-aos="fade-right">
          <img
            src={VideoProm}
            alt="Bienvenidos a Grade Latam"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center bg-gradient-to-t  text-white p-10 rounded-xl w-full max-w-[700px] min-h-[400px]" data-aos="fade-right" data-aos-delay="100">
              <div className="absolute -top-7 left-0 flex justify-start">
            <span className="bg-[#ecf1fb] text-[#11243B] font-semibold rounded-full px-6 py-2 text-lg shadow-md max-w-fit" data-aos="fade-right" data-aos-delay="200">
              Grade Latam | Sobre nosotros
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6 mt-8 text-[#244469]" data-aos="fade-right" data-aos-delay="300">Grade Latam</h2>
          <p className="text-2xl font-medium mb-6 text-[#787B7D]" data-aos="fade-right" data-aos-delay="400">
            Somos un grupo de opinión médica y actualización en América Latina, conformado por profesionales de reconocida trayectoria en instituciones científicas nacionales e internacionales.
          </p>
          <p className="text-2xl font-medium text-[#787B7D]" data-aos="fade-right" data-aos-delay="500">
            Buscamos crear un espacio de intercambio y formación continua, que acerque la ciencia a la práctica clínica cotidiana, brindando asesoramiento a los actores de la salud.
          </p>
        </div>
      </div>
      {/* Tarjetas Qué hacemos */}
      <section className="w-full max-w-[1400px] mt-16">
        <h2 className="text-4xl font-bold text-center text-[#23395d] mb-12" data-aos="fade-right">Qué hacemos</h2>
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-8">
          {/* Consultoría */}
          <div className="bg-[#39669B] text-white rounded-2xl p-8 flex-1 flex flex-col items-center min-w-[280px] max-w-[400px] min-h-[320px] h-full" data-aos="fade-up" data-aos-delay="100">
            <img src={ConsultSVG} alt="Consultoría" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Consultoría</h3>
            <p className="text-center text-base">
              En el campo de la innovación biotecnológica surge el gran desafío de su implementación acortando las brechas entre las guías de práctica clínica y la asistencia médica.
            </p>
          </div>
          {/* Educación */}
          <div className="bg-[#39669B] text-white rounded-2xl p-8 flex-1 flex flex-col items-center min-w-[280px] max-w-[400px] min-h-[320px] h-full" data-aos="fade-up" data-aos-delay="200">
            <img src={EducationSVG} alt="Educación" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Educación</h3>
            <p className="text-center text-base">
              Llevamos a cabo eventos basados en formatos dinámicos que puedan abordar con profundidad las diversas temáticas de los avances diagnósticos y terapéuticos.
            </p>
          </div>
          {/* Difusión */}
          <div className="bg-[#39669B] text-white rounded-2xl p-8 flex-1 flex flex-col items-center min-w-[280px] max-w-[400px] min-h-[320px] h-full" data-aos="fade-up" data-aos-delay="300">
            <img src={PostSVG} alt="Difusión" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Difusión</h3>
            <p className="text-center text-base">
              Compartimos material científico para la comunidad médica y el público en general, de manera rigurosa, accesible y adaptada a sus necesidades.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;