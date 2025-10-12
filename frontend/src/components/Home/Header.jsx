import React, { useEffect } from "react";
import AOS from "aos";
import Corazon from "../../assets/Corazon.svg";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <AnimatedBlurBackground />

      <div className="flex flex-col md:flex-row items-center justify-center px-3 md:px-30 py-30">
        {/* Text Content */}
        <div
          className="text-center md:text-left flex-1 md:pr-4"
          data-aos="fade-up"
        >
          <h1 className="flex flex-col mb-2 text-5xl md:text-5xl font-bold text-primary leading-tight md:leading-snug">
            Acercamos la <br /> ciencia a la práctica <br /> clínica cotidiana
          </h1>
          <h2 className="mt-3 text-lg md:text-3xl text-gray-700 max-w-lg mx-auto md:mx-0">
            Bienvenidos a <span className="italic">Grade Latam</span>, un grupo
            de opinión médica y actualización científica.
          </h2>
          <Link to="https://www.gradelatam.com.ar/login">
            <button
              className="mt-6 bg-secondary text-white shadow font-bold py-3 px-8 rounded-full transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Plataforma
            </button>
          </Link>
        </div>

        <div
          className="mt-8 md:mt-0 flex-1 md:pl-4 flex items-center justify-center"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <img
            src={Corazon}
            alt="Corazon"
            className="w-full max-w-lg md:max-w-6xl animate-heartbeat"
          />
        </div>
      </div>
      {/* Cuadro de estadísticas */}
    </header>
  );
};

export default Header;
