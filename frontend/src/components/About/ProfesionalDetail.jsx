import {useEffect} from "react";
import InstagramIcon from "../../assets/Instagram.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
import YoutubeIcon from "../../assets/Youtube.svg";
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
  useEffect(() => {
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
        className="flex flex-col md:flex-row items-stretch gap-8 bg-[#ecf1fb] rounded-lg shadow-lg max-w-[1300px] w-full overflow-hidden"
        data-aos="fade-up"
      >
        <div className="flex-1 w-full md:w-[60%] flex items-center justify-center p-0 m-0">
          <div className="w-full h-80 sm:h-96 md:h-[40rem] overflow-hidden">
            <img
              src={bigImages[professional.name]}
              alt={professional.name}
              className="w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-gradient-to-t from-[#244469] to-[#4F8BD0] text-white p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none w-full md:w-[40%]">
          <div className="text-sm mb-2 bg-[#ecf1fb] text-[#11243B] font-semibold rounded-full px-3 py-1 max-w-fit">
            Grade Latam | Sobre nosotros
          </div>
          <h2 className="text-3xl font-bold mb-4">Dr. <br />{professional.name}</h2>
          <p className="text-md mb-6 max-h-[40vh] overflow-auto">
            {professional.description}
          </p>
          <div className="flex gap-4 mt-6">
            {professional.instagram && (
              <a
                href={professional.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2  hover:scale-110 transition"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
              </a>
            )}
            {professional.linkedin && (
              <a
                href={professional.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 hover:scale-110 transition"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="w-10 h-10" />
              </a>
            )}
            {professional.youtube && (
              <a
                href={professional.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2  hover:scale-110 transition"
              >
                <img src={YoutubeIcon} alt="YouTube" className="w-10 h-10" />
              </a>
            )}
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
