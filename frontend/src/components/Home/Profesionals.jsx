import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LorenzattiImg from "../../assets/Profesionals/Alberto-Lorenzatti.png";
import PiskorzImg from "../../assets/Profesionals/Daniel-Piskorz.png";
import LopezSantiImg from "../../assets/Profesionals/Ricardo-Lopez-Santi.png";
import WyssImg from "../../assets/Profesionals/Fernando-Wyss.png";
import OsirisImg from "../../assets/Profesionals/Osiris-Valdez-Tiburcio.png";

const professionals = [
  {
    id: 1,
    name: "Dr. Alberto Lorenzatti",
    specialty: "Cardiología",
    country: "Argentina",
    image: LorenzattiImg,
  },
  {
    id: 2,
    name: "Dr. Daniel Piskorz",
    specialty: "Cardiología",
    country: "Argentina",
    image: PiskorzImg,
  },
  {
    id: 3,
    name: "Dr. Ricardo Lopez Santi",
    specialty: "Cardiología",
    country: "Argentina",
    image: LopezSantiImg,
  },
  {
    id: 4,
    name: "Dr. Fernando Wyss",
    specialty: "Cardiología",
    country: "Argentina",
    image: WyssImg,
  },
  {
    id: 5,
    name: "Dr. Osiris Valdez Tiburcio",
    specialty: "Cardiología",
    country: "Rep. Dominicana",
    image: OsirisImg,
  },
];

const Profesionals = () => {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-19">
      <h2 className="text-4xl font-bold text-center text-[#23395d] mb-12">
        Equipo de expertos
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {professionals.map((prof, index) => (
          <a
            ECF1FB
            key={prof.id}
            href={`/profesionales/${prof.id}`} // Enlace dinámico basado en el ID del profesional
            className="w-[240px] h-[350px] rounded-2xl shadow-lg overflow-hidden relative bg-[#D4D6D9] hover:bg-gradient-to-t hover:from-[#ECF1FB] hover:to-[#4F8BD0] transition-colors duration-300 flex flex-col justify-end"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Añade un retraso progresivo para cada tarjeta
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <img
                src={prof.image}
                alt={prof.name}
                className="w-full h-full object-cover"
                style={{ borderRadius: "18px" }}
              />
              {/* Overlay degradado en la parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#23395d]/90 via-[#23395d]/60 to-transparent rounded-b-2xl"></div>
              {/* Texto sobre la imagen */}
              <div className="absolute bottom-0 left-0 w-full px-5 pb-5 text-white z-10">
                <div className="relative mb-1 flex items-center justify-start">
                  <span className="font-bold text-lg drop-shadow-lg relative z-10">
                    {prof.name}
                  </span>
                  <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-7 w-full rounded-lg blur-md bg-[#23395d]/60 z-0"></span>
                </div>
                <div className="text-sm font-semibold drop-shadow-lg">
                  {prof.specialty} - {prof.country}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profesionals;
