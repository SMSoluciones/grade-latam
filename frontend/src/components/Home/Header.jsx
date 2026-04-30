import React from "react";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";
import HeartThree from "./HeartThree";

const Header = () => {
  return (
    <header className="relative w-full overflow-x-hidden overflow-y-visible lg:overflow-hidden pt-28 pb-6 md:pt-44 md:pb-20 md:min-h-screen">
      <AnimatedBlurBackground />

      <div className="section-shell flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-4">
        <div
          className="text-center lg:text-left flex-1"
          data-aos="fade-up"
        >
          <p className="inline-block mt-2 md:mt-0 mb-5 px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide">
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
          className="hidden md:flex mt-4 md:mt-6 lg:mt-0 flex-1 items-center justify-center lg:justify-start lg:-ml-10"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <div className="w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[680px] 2xl:max-w-[780px]">
            <HeartThree />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
