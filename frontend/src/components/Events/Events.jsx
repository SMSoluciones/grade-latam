import React from "react";
import StatsBar from "../Home/StatsBar";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";
import NextEvents from "./NextEvents";
import EvengLog from "../../assets/EventLog.png";
import EventGrid from "./EventGrid";

const Events = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatedBlurBackground />

      <div className="section-shell flex flex-col md:flex-row items-center justify-center pt-40 pb-10 md:pt-44 relative z-10 gap-10">
        <div className="flex-1 text-left md:pr-8" data-aos="fade-up">
          <p className="inline-block mt-12 md:mt-16 mb-5 px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide">
            Formacion continua para profesionales de la salud
          </p>
          <h1 className="headline-xl text-primary mb-6 leading-tight break-words max-w-full">
            Cursos de <br /> actualización<br />cardiometabólica
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg text-muted mb-8 max-w-xl leading-relaxed">
            Accede a los mejores cursos y eventos para profesionales de la salud enfocados en cardiometabolismo.
          </p>
          <a href="https://www.gradelatam.com.ar/login" target="_blank" rel="noopener noreferrer">
            <button className="cta-primary mb-4 text-base sm:text-lg">
              Ingresar a mi curso
            </button>
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0" data-aos="zoom-out" data-aos-delay="200">
          <img src={EvengLog} alt="Cursos cardiometabólicos" className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-xl object-contain h-auto" loading="lazy" />
        </div>
      </div>

      <StatsBar overlay={false} />

      <div>
        <NextEvents hideAllEventsButton={true} />
      </div>

      <EventGrid />
    </div>
  );
};

export default Events;
