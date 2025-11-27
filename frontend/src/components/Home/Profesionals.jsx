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
    description:"Soy Co-Director en el Instituto Médico DAMIC/Fundación Rusculleda de Investigación en Medicina y fui Jefe de Cardiología en el Hospital de Córdoba, Argentina.Es Médico Cardiólogo y Experto Certificado en Lípidos. He desempeñado el cargo de  Presidente de la International Society of Cardiovascular Pharmacotherapy, de la Federación Argentina de Cardiología y de la Sociedad Argentina de Lípidos. Co-Editor European Heart Journal (EHJ) y del European Cardiology Reviews (ECR) Tengo vasto desarrollo en investigación clínica y he actuado como miembro del comité directivo en estudios pivotales como Jupiter, Cantos, Fourier, Prominent, BetOnMace, SOUL, CLEAR, Vesalius CV y Ocean(a). Más de 700 abstracts, publicaciones y presentaciones a nivel nacional e internacional.",
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
    description:"Obtuve mi título de médico en Universidad Nacional de Rosario, Argentina, en 1982 y me especialicé en cardiología en el Hospital de Emergencias Dr. Clemente Álvarez de Rosario, titulándome como cardiólogo en la 2.ª Circunscripción de Santa Fe en 1988 y como especialista en ecocardiografía de tercer nivel en 1991. El 11 de octubre de 2013, la Sociedad Latinoamericana de Hipertensión me otorgó el título de Especialista en Hipertensión. He publicado aproximadamente 300 artículos originales y revisiones como autor principal en revistas indexadas nacionales e internacionales con revisión por pares, así como siete libros.",
    specialty: "Cardiología",
    country: "Argentina",
    image: PiskorzImg,
    instagram: "https://instagram.com/danielpiskorz",
    linkedin: "https://linkedin.com/in/danielpiskorz"
  },
  {
    id: 3,
    name: "Ricardo Lopez Santi",
    description:"Soy médico egresado de la Universidad Nacional de La Plata, Argentina, especialista consultor en Cardiología y especialista en Sistemas de salud y seguridad social. He desarrollado una intensa actividad en instituciones científicas habiendo sido presidente de la Federación Argentina de Cardiología y actualmente desarrollando el cargo de presidente electo de la Sociedad Interamericana de Cardiología. Co autor del libro de “Cardiometabolismo de la fisiopatología a la terapéutica” en sus cinco ediciones y de mas de 50 trabajos publicados en revistas indexadas. En el año 2019 recibí de la World Hypertension League una distinción con el Recognition of Excellence Award in Hypertension and Implementation.",
    specialty: "Cardiología",
    country: "Argentina",
    image: LopezSantiImg,
    linkedin: "https://linkedin.com/in/ricardolopezsanti"
  },
  {
    id: 4,
    name: "Fernando Wyss",
    description:"Soy Medico egresado de la Universidad de San Carlos de Guatemala (USAC), con postgrado de Medicina Interna y Master en Cardiología por la Universidad Miguel Hernández de Elche en Alicante, España. He sido presidente de la Sociedad Centroamericana y del Caribe de Hipertensión Arterial y de la Sociedad Interamericana de Cardiología Al momento con mas de 80 publicaciones científicas y editor del Libro Azul de Cardiologia de la SIAC y del tratado de Hipertension de la SCCH En el año 2025 fui galardonado por el Colegio Americano de Cardiologia (ACC) con el International Service Award por mis contribuciones en la Cardiologi Latinoamericana. ",
    specialty: "Cardiología",
    country: "Argentina",
    image: WyssImg,
    instagram: "https://instagram.com/fernandowyss"
  },
  {
    id: 5,
    name: "Osiris Valdez Tiburcio",
    description:"Soy médico egresado de la UASD, República Dominicana, especialista en Cardiología y Ecocardiografía formado en el Instituto Dominicano de Cardiología y en el Instituto Nacional de Cardiología Ignacio Chávez, México. He sido presidente la Sociedad Centroamericana y del Caribe de Hipertensión y de la Fundación Dominicana de Cardiología. Soy director del Consejo de Prevención de la Sociedad Interamericana de Cardiología y profesor del Curso de Hipertensión de la Universidad de San Carlos de Guatemala. Participo como coautor de la Guía Latinoamericana de Hipertensión 2024 y editor del Tratado de Hipertensión Arterial (2024).",
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
