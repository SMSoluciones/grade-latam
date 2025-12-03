import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes de cada profesional
import LorenzattiImg1 from "../../assets/Profesionals/DoctorsSmall/Alberto-Lorenzatti.png";
import LorenzattiImg2 from "../../assets/Profesionals/DoctorsBig/Alberto-LorenzattiBG.png";
import PiskorzImg1 from "../../assets/Profesionals/DoctorsSmall/Daniel-Piskorz.png";
import PiskorzImg2 from "../../assets/Profesionals/DoctorsBig/Daniel-PiskorzBG.png";
import LopezSantiImg1 from "../../assets/Profesionals/DoctorsSmall/Ricardo-Lopez-Santi.png";
import LopezSantiImg2 from "../../assets/Profesionals/DoctorsBig/Ricardo-Lopez-SantiBG.png";
import WyssImg1 from "../../assets/Profesionals/DoctorsSmall/Fernando-Wyss.png";
import WyssImg2 from "../../assets/Profesionals/DoctorsBig/Fernando-WyssBG.png";
import OsirisImg1 from "../../assets/Profesionals/DoctorsSmall/Osiris-Valdez-Tiburcio.png";
import OsirisImg2 from "../../assets/Profesionals/DoctorsBig/Osiris-Valdez-TiburcioBG.png";
import All1 from "../../assets/Prof-Img/All1.jpg";
import All2 from "../../assets/Prof-Img/All2.jpg";
import All3 from "../../assets/Prof-Img/All3.jpg";
import All5 from "../../assets/Prof-Img/All5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const professionalImages = {
  "Alberto Lorenzatti": [All1, All2, All3, All5, LorenzattiImg1, LorenzattiImg2],
  "Daniel Piskorz": [All1, All2, All3, All5, PiskorzImg1, PiskorzImg2],
  "Ricardo Lopez Santi": [All1, All2, All3, All5, LopezSantiImg1, LopezSantiImg2],
  "Fernando Wyss": [All1, All2, All3, All5, WyssImg1, WyssImg2],
  "Osiris Valdez Tiburcio": [All1, All2, All3, All5, OsirisImg1, OsirisImg2],
};

const ProfesionalSlider = ({ professional }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
      // refrescar AOS para que la animación del modal se dispare
      AOS.refresh();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalOpen]);

  // Inicializar AOS al montar el componente
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  if (!professional || !professionalImages[professional.name]) return null;

  const images = professionalImages[professional.name];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <img
              src={img}
              alt={professional.name + " " + idx}
              className="rounded-xl w-full h-80 md:h-96 object-cover cursor-pointer"
              onClick={() => openModal(img)}
            />
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <button
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute top-2 right-2 text-white text-3xl leading-none"
            >
              ×
            </button>
            <img src={selectedImg} alt={professional.name} className="w-full h-auto object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfesionalSlider;
