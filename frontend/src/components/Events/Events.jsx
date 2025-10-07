import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StatsBar from "../Home/StatsBar";

import NextEvents from "./NextEvents";
import EvengLog from "../../assets/EventLog.png";
import EventGrid from "./EventGrid";


const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fondo Blur Animado igual al Header */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-2/5 left-0 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-50 animate-random-move"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute top-1/10 left-1/4 w-20 h-20 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
        <div className="absolute bottom-1/2 right-1/9 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
      </div>


      {/* Sección superior con texto, imagen y botón */}
  <div className="flex flex-col md:flex-row items-center justify-center pt-44 pb-10 px-4 md:px-20 relative z-10">
        {/* Texto principal */}
  <div className="flex-1 text-left md:pr-8 md:pl-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-[#20446C] mb-6 leading-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Cursos de <br /> actualización<br />cardiometabólica
          </h1>
          <p className="text-xl md:text-2xl text-[#20446C] mb-8 max-w-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Accede a los mejores cursos y eventos para profesionales de la salud enfocados en cardiometabolismo.
          </p>
          <a href="https://www.gradelatam.com.ar/login" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#E53935] hover:bg-[#c62828] text-white font-bold py-3 px-8 rounded-full shadow transition mb-4 text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Ingresar a mi curso
            </button>
          </a>
        </div>
        {/* Imagen decorativa */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0" data-aos="zoom-out" data-aos-delay="200">
          <img src={EvengLog} alt="Cursos cardiometabólicos" className="w-full max-w-2xl md:max-w-3xl drop-shadow-xl" />
        </div>
      </div>

      {/* StatsBar debajo de la sección principal */}
      <div className="flex justify-center w-full relative z-10 mt-24">
        <StatsBar />
      </div>


      <div>
        <NextEvents hideAllEventsButton={true} />
      </div>

      {/* Grid de tarjetas de eventos mockeados */}
      <EventGrid />
    </div>
  );
};

export default Events;
