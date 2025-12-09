import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const StatsBar = ({ overlay = true }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      {" "}
      <div
        className={`w-full flex justify-center items-center ${overlay ? 'lg:absolute lg:left-0 lg:bottom-[-70px]' : ''} pb-1 mt-32 lg:mt-0 px-4 z-10`}
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 bg-primary rounded-lg md:rounded-full px-4 md:px-10 py-6 md:py-3 shadow-lg w-full md:w-[90vw] max-w-4xl items-center">
          <div className="w-full md:flex-1 flex flex-col items-center text-white">
            <span className="text-7xl md:text-6xl font-bold leading-none">+25</span>
            <div className="text-base md:text-sm mt-1 md:mt-3 font-semibold text-center pl-6 md:pl-0">
              años de
              <br />
              trayectoria
            </div>
          </div>
          <div className="w-full md:flex-1 flex flex-col items-center text-white">
            <span className="text-7xl md:text-6xl font-bold leading-none">+150</span>
            <div className="text-base md:text-sm mt-1 md:mt-3 font-semibold text-center pl-6 md:pl-0">
              profesionales
              <br />
              capacitados
            </div>
          </div>
          <div className="w-full md:flex-1 flex flex-col items-center text-white">
            <span className="text-7xl md:text-6xl font-bold leading-none">+80</span>
            <div className="text-base md:text-sm mt-1 md:mt-3 font-semibold text-center pl-6 md:pl-0">
              artículos
              <br />
              presentados
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
