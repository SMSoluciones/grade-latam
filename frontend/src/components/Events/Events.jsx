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

      <section className="w-full max-w-[1400px] section-shell relative z-10 pt-28 md:pt-44 pb-10 md:pb-14">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12">
          <div className="flex-1 w-full mx-auto flex flex-col items-center text-center" data-aos="fade-up">
            <div className="w-full max-w-[42rem] mx-auto flex flex-col items-center text-center">
              <p className="inline-block w-fit mt-2 md:mt-0 mb-5 px-4 py-1 rounded-full bg-primary-light text-primary text-sm md:text-base font-semibold tracking-wide max-w-full text-center leading-tight">
                Formacion continua para profesionales.
              </p>
              <h1
                className="w-full text-[2.1rem] sm:text-5xl lg:text-[4.2rem] font-extrabold text-primary mb-6 leading-[1.05] mx-auto text-center"
                style={{ textWrap: "balance" }}
              >
                Cursos de actualización cardiometabólica
              </h1>
              <p className="text-lg md:text-2xl lg:text-xl text-muted mb-8 max-w-[30ch] lg:max-w-xl leading-relaxed mx-auto">
                Accede a los mejores cursos y eventos para profesionales de la salud enfocados en cardiometabolismo.
              </p>
            </div>
            <a
              href="https://www.gradelatam.com.ar/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="cta-primary mb-4 text-base sm:text-lg">
                Ingresar a mi curso
              </button>
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0" data-aos="zoom-out" data-aos-delay="200">
            <img
              src={EvengLog}
              alt="Cursos cardiometabólicos"
              className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[620px] xl:max-w-[700px] drop-shadow-xl object-contain h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <StatsBar overlay={false} />

      <div>
        <NextEvents hideAllEventsButton={true} />
      </div>

      <EventGrid />
    </div>
  );
};

export default Events;
