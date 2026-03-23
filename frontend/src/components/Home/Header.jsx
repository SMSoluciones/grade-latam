import React from "react";
import Corazon from "../../assets/Corazon.svg";
import { Link } from "react-router-dom";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";

const Header = () => {
  return (
    <header className="relative w-full min-h-screen overflow-visible lg:overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      <AnimatedBlurBackground />

      <div className="section-shell flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14">
        <div
          className="text-center lg:text-left flex-1"
          data-aos="fade-up"
        >
          <p className="inline-block mt-12 md:mt-16 mb-5 px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide">
            Ciencia aplicada para la practica clinica
          </p>
          <h1 className="headline-xl text-primary mb-4">
            Acercamos la <br /> ciencia a la práctica <br /> clínica cotidiana
          </h1>
          <h2 className="mt-3 text-lg md:text-2xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Bienvenidos a <span className="italic">Grade Latam</span>, un grupo
            de opinión médica y actualización científica.
          </h2>
          <a
            href="https://www.gradelatam.com.ar/login"
            target="_blank"
            rel="noreferrer"
            className="cta-primary mt-8"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            Ingresar a la plataforma
          </a>
        </div>

        <div
          className="mt-8 lg:mt-0 flex-1 flex items-center justify-center"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <img
            src={Corazon}
            alt="Corazon"
            className="w-full max-w-xs sm:max-w-xl lg:max-w-5xl animate-heartbeat"
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
