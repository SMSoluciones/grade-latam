import React, { useEffect } from "react";
import AOS from "aos";
import Medic from "../../assets/Medic.svg";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Fondo Blur Animado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-2/5 left-0 w-72 h-72 bg-secondary rounded-full filter blur-3xl opacity-50 animate-random-move"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute top-1/10 left-1/4 w-20 h-20 bg-secondary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute bottom-1/2 right-1/9 w-80 h-80 bg-secondary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-30 py-60">
        {/* Text Content */}
        <div
          className="text-center md:text-left"
          data-aos="fade-up" // Animación de aparición desde abajo
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight md:leading-snug">
            Tecnología al servicio <br /> de tu corazón
          </h1>

          <Link to="https://britanico.datatech.com.ar/">
            <button
              className="mt-6 bg-white text-primary shadow font-bold py-3 px-8 rounded-full transition"
              data-aos="fade-up" // Animación para el botón
              data-aos-delay="300" // Retraso de 300ms para el botón
            >
              Solicitar turno
            </button>
          </Link>
        </div>

        <div
          className="mt-8 md:mt-0 "
          data-aos="zoom-out" // Animación de aparición desde la izquierda
          data-aos-delay="200" // Retraso de 500ms para la imagen
        >
          <img
            src={Medic} // Ruta de la nueva imagen
            alt="Equipo médico"
            className="w-full max-w-lg  md:max-w-6xl "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
