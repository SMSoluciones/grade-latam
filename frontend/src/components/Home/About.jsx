import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-gray-50 py-12 px-6 transition-all duration-500 ${
        isInView ? "scale-105" : "scale-100"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center transition-all duration-500">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up">
          <h2 className="inline-block bg-primary-light text-primary font-semibold text-sm px-4 py-1 rounded-full mb-4">
            Sobre nosotros
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Excelencia en cardiología con más de 70 Años de trayectoria.
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            En nuestra institución nos dedicamos a la asistencia, docencia e
            investigación en el campo de la cardiología. Contamos con un equipo
            de profesionales médicos altamente capacitados, autores de libros y
            numerosos artículos de investigación y revisión cardiológica.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Además, nuestros especialistas son miembros activos de prestigiosas
            sociedades científicas nacionales e internacionales, desempeñando un
            rol fundamental en el avance del conocimiento y la innovación en la
            especialidad.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Nuestra misión es brindar atención médica de calidad, integrando
            experiencia, tecnología de vanguardia y un firme compromiso con la
            salud cardiovascular.
          </p>
        </div>

        {/* Imagen */}
        <div
          className="md:w-150 mt-6 md:mt-10 md:pl-6 md:pr- flex justify-center"
          data-aos="fade-up"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/assets%2FSobrenos.png?alt=media&token=944f3820-d4fa-46be-bace-df8050c4507b"
            alt="Equipo médico"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
