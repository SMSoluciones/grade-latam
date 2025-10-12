import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import LorenzattiImg from "../../assets/Profesionals/DoctorsSmall/Alberto-Lorenzatti.png";
import PiskorzImg from "../../assets/Profesionals/DoctorsSmall/Daniel-Piskorz.png";
import LopezSantiImg from "../../assets/Profesionals/DoctorsSmall/Ricardo-Lopez-Santi.png";
import WyssImg from "../../assets/Profesionals/DoctorsSmall/Fernando-Wyss.png";
import OsirisImg from "../../assets/Profesionals/DoctorsSmall/Osiris-Valdez-Tiburcio.png";

const professionals = [
  {
    id: 1,
    name: "Alberto Lorenzatti",
    description:"1lorem ipsum dolor sit amet, consectetur adipiscing elit",
    specialty: "Cardiología",
    country: "Argentina",
    image: LorenzattiImg,
    instagram: "https://instagram.com/albertolorenzatti",
    linkedin: "https://linkedin.com/in/albertolorenzatti",
    youtube: "https://youtube.com/@albertolorenzatti"
  },
  {
    id: 2,
    name: "Daniel Piskorz",
    description:"2lorem ipsum dolor sit amet, consectetur adipiscing elit",
    specialty: "Cardiología",
    country: "Argentina",
    image: PiskorzImg,
    instagram: "https://instagram.com/danielpiskorz",
    linkedin: "https://linkedin.com/in/danielpiskorz"
  },
  {
    id: 3,
    name: "Ricardo Lopez Santi",
    description:"3lorem ipsum dolor sit amet, consectetur adipiscing elit",
    specialty: "Cardiología",
    country: "Argentina",
    image: LopezSantiImg,
    linkedin: "https://linkedin.com/in/ricardolopezsanti"
  },
  {
    id: 4,
    name: "Fernando Wyss",
    description:"4lorem ipsum dolor sit amet, consectetur adipiscing elit",
    specialty: "Cardiología",
    country: "Argentina",
    image: WyssImg,
    instagram: "https://instagram.com/fernandowyss"
  },
  {
    id: 5,
    name: "Osiris Valdez Tiburcio",
    description:"5lorem ipsum dolor sit amet, consectetur adipiscing elit",
    specialty: "Cardiología",
    country: "Rep. Dominicana",
    image: OsirisImg,
    youtube: "https://youtube.com/@osirisvaldeztiburcio"
  },
];

const Profesionals = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleClick = (prof) => {
    navigate("/about", { state: { professional: prof } });
  };

  return (
    <section className="w-full py-19">
      <h2 className="text-4xl font-bold text-center text-[#23395d] mb-12">
        Equipo de expertos
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {professionals.map((prof, index) => (
          <div
            key={prof.id}
            onClick={() => handleClick(prof)}
            className="cursor-pointer w-[240px] h-[350px] rounded-2xl shadow-lg overflow-hidden relative bg-[#D4D6D9] hover:bg-gradient-to-t hover:from-[#ECF1FB] hover:to-[#4F8BD0] transition-colors duration-300 flex flex-col justify-end"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <img
                src={prof.image}
                alt={prof.name}
                className="w-full h-full object-cover"
                style={{ borderRadius: "18px" }}
              />
              {/* Overlay degradado en la parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#23395d]/90 via-[#23395d]/60 to-transparent rounded-b-2xl"></div>
              {/* Texto sobre la imagen */}
              <div className="absolute bottom-0 left-0 w-full px-5 pb-5 text-white z-10">
                <div className="relative mb-1 flex items-center justify-start">
                  <span className="font-bold text-lg drop-shadow-lg relative z-10">
                    Dr. {prof.name}
                  </span>
                  <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-7 w-full rounded-lg blur-md bg-[#23395d]/60 z-0"></span>
                </div>
                <div className="text-sm font-semibold drop-shadow-lg">
                  {prof.specialty} - {prof.country}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profesionals;
