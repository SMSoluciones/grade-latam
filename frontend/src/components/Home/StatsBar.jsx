import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const StatsBar = () => {
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
        className="w-full flex justify-center items-center absolute left-0 bottom-[-70px] pb-1 mt-1"
        data-aos="fade-up"
      >
        <div className="flex flex-row gap-8 bg-primary rounded-full px-10 py-3 shadow-lg w-[90vw] max-w-4xl">
          <div className="flex-1 text-center text-white">
            <span className="text-5xl font-bold">25</span>
            <div className="text-sm mt-2 font-semibold">
              años de
              <br />
              trayectoria
            </div>
          </div>
          <div className="flex-1 text-center text-white">
            <span className="text-5xl font-bold">150</span>
            <div className="text-sm mt-3 font-semibold">
              profesionales
              <br />
              capacitados
            </div>
          </div>
          <div className="flex-1 text-center text-white">
            <span className="text-5xl font-bold">80</span>
            <div className="text-sm mt-2 font-semibold">
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
