import React from "react";
import ProfesionalSlider from "./ProfesionalSlider";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing DoctorsBig images
import LorenzattiImg from "../../assets/Profesionals/DoctorsBig/Alberto-LorenzattiBG.png";
import PiskorzImg from "../../assets/Profesionals/DoctorsBig/Daniel-PiskorzBG.png";
import LopezSantiImg from "../../assets/Profesionals/DoctorsBig/Ricardo-Lopez-SantiBG.png";
import WyssImg from "../../assets/Profesionals/DoctorsBig/Fernando-WyssBG.png";
import OsirisImg from "../../assets/Profesionals/DoctorsBig/Osiris-Valdez-TiburcioBG.png";

const ProfesionalDetail = ({ professional }) => {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: false });
    AOS.refresh();
  }, [professional]);
  if (!professional) return null;


  const bigImages = {
    "Alberto Lorenzatti": LorenzattiImg,
    "Daniel Piskorz": PiskorzImg,
    "Ricardo Lopez Santi": LopezSantiImg,
    "Fernando Wyss": WyssImg,
    "Osiris Valdez Tiburcio": OsirisImg,
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div
        key={professional.name}
        className="flex flex-col md:flex-row items-stretch gap-8 bg-[#ecf1fb] rounded-lg shadow-lg max-w-[1300px] h-[600px]"
        data-aos="fade-up"
      >
        <div className="flex flex-1 items-end justify-center h-full w-[600px] p-0 m-0">
          <img
            src={bigImages[professional.name]}
            alt={professional.name}
            className="w-full h-full rounded-lg object-contain"
            style={{ objectPosition: 'bottom' }}
          />
        </div>
        <div className="flex flex-col justify-center bg-gradient-to-t from-[#244469] to-[#4F8BD0] text-white p-6 rounded-lg shadow-md h-[600px] w-[500px]">
          <div className="text-sm mb-2 bg-[#ecf1fb] text-[#11243B] font-semibold rounded-full px-3 py-1 max-w-fit">
            Grade Latam | Sobre nosotros
          </div>
          <h2 className="text-3xl font-bold mb-4">Dr. <br />{professional.name}</h2>
          <p className="text-md mb-6">
            {professional.description}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
      {/* Slider de fotos del profesional */}
      <div className="w-full flex justify-center mt-8">
        <ProfesionalSlider professional={professional} />
      </div>
    </div>
  );
};

export default ProfesionalDetail;
