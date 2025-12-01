import React from "react";
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

const professionalImages = {
  "Alberto Lorenzatti": [All1, All2, All3, All5, LorenzattiImg1, LorenzattiImg2],
  "Daniel Piskorz": [All1, All2, All3, All5, PiskorzImg1, PiskorzImg2],
  "Ricardo Lopez Santi": [All1, All2, All3, All5, LopezSantiImg1, LopezSantiImg2],
  "Fernando Wyss": [All1, All2, All3, All5, WyssImg1, WyssImg2],
  "Osiris Valdez Tiburcio": [All1, All2, All3, All5, OsirisImg1, OsirisImg2],
};

const ProfesionalSlider = ({ professional }) => {
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
            <img src={img} alt={professional.name + " " + idx} className="rounded-xl w-full h-64 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfesionalSlider;
