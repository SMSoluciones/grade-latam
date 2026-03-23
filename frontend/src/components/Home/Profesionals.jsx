import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

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
    description: {
      es: "Soy Co-Director en el Instituto Medico DAMIC/Fundacion Rusculleda de Investigacion en Medicina y fui Jefe de Cardiologia en el Hospital de Cordoba, Argentina. Soy Medico Cardiologo y Experto Certificado en Lipidos. Fui presidente de la International Society of Cardiovascular Pharmacotherapy, de la Federacion Argentina de Cardiologia y de la Sociedad Argentina de Lipidos. Co-editor del European Heart Journal y de European Cardiology Reviews. Tengo amplia actividad en investigacion clinica y participe en comites directivos de estudios pivotales como Jupiter, Cantos, Fourier, Prominent, BetOnMace, SOUL, CLEAR, Vesalius CV y Ocean(a).",
      en: "I am Co-Director at the DAMIC Medical Institute/Rusculleda Foundation for Medical Research and former Head of Cardiology at the Cordoba Hospital in Argentina. I am a cardiologist and a certified lipid expert. I served as President of the International Society of Cardiovascular Pharmacotherapy, the Argentine Federation of Cardiology, and the Argentine Lipid Society. I have been co-editor of the European Heart Journal and European Cardiology Reviews. I have extensive clinical research experience and have served on steering committees for pivotal studies such as Jupiter, Cantos, Fourier, Prominent, BetOnMace, SOUL, CLEAR, Vesalius CV, and Ocean(a).",
    },
    specialty: { es: "Cardiologia", en: "Cardiology" },
    country: { es: "Argentina", en: "Argentina" },
    image: LorenzattiImg,
    instagram: "https://instagram.com/albertolorenzatti",
    linkedin: "https://linkedin.com/in/albertolorenzatti",
    youtube: "https://youtube.com/@albertolorenzatti"
  },
  {
    id: 2,
    name: "Daniel Piskorz",
    description: {
      es: "Obtuve mi titulo de medico en la Universidad Nacional de Rosario en 1982 y me especialice en cardiologia en el Hospital de Emergencias Dr. Clemente Alvarez de Rosario. Fui titulado como cardiologo en la 2.a Circunscripcion de Santa Fe en 1988 y como especialista en ecocardiografia de tercer nivel en 1991. En 2013, la Sociedad Latinoamericana de Hipertension me otorgo el titulo de Especialista en Hipertension. Publique aproximadamente 300 articulos originales y revisiones en revistas indexadas nacionales e internacionales, ademas de siete libros.",
      en: "I received my medical degree from the National University of Rosario in 1982 and specialized in cardiology at the Dr. Clemente Alvarez Emergency Hospital in Rosario. I was certified as a cardiologist in the 2nd District of Santa Fe in 1988 and as a third-level echocardiography specialist in 1991. In 2013, the Latin American Society of Hypertension awarded me the title of Hypertension Specialist. I have published around 300 original articles and reviews in national and international indexed journals, as well as seven books.",
    },
    specialty: { es: "Cardiologia", en: "Cardiology" },
    country: { es: "Argentina", en: "Argentina" },
    image: PiskorzImg,
    instagram: "https://instagram.com/danielpiskorz",
    linkedin: "https://linkedin.com/in/danielpiskorz"
  },
  {
    id: 3,
    name: "Ricardo Lopez Santi",
    description: {
      es: "Soy medico egresado de la Universidad Nacional de La Plata, especialista consultor en Cardiologia y en sistemas de salud y seguridad social. Fui presidente de la Federacion Argentina de Cardiologia y actualmente me desempeno como presidente electo de la Sociedad Interamericana de Cardiologia. Soy coautor del libro Cardiometabolismo: de la fisiopatologia a la terapeutica en sus cinco ediciones y autor de mas de 50 trabajos en revistas indexadas. En 2019 recibi el Recognition of Excellence Award in Hypertension and Implementation de la World Hypertension League.",
      en: "I am a physician graduated from the National University of La Plata, consultant specialist in cardiology, and specialist in healthcare systems and social security. I served as President of the Argentine Federation of Cardiology and currently serve as President-Elect of the Inter-American Society of Cardiology. I co-authored the book Cardiometabolism: from pathophysiology to therapeutics in its five editions and published more than 50 papers in indexed journals. In 2019, I received the World Hypertension League Recognition of Excellence Award in Hypertension and Implementation.",
    },
    specialty: { es: "Cardiologia", en: "Cardiology" },
    country: { es: "Argentina", en: "Argentina" },
    image: LopezSantiImg,
    linkedin: "https://linkedin.com/in/ricardolopezsanti"
  },
  {
    id: 4,
    name: "Fernando Wyss",
    description: {
      es: "Soy medico egresado de la Universidad de San Carlos de Guatemala, con posgrado en Medicina Interna y master en Cardiologia por la Universidad Miguel Hernandez de Elche, Alicante, Espana. Fui presidente de la Sociedad Centroamericana y del Caribe de Hipertension Arterial y de la Sociedad Interamericana de Cardiologia. Tengo mas de 80 publicaciones cientificas y soy editor del Libro Azul de Cardiologia de la SIAC y del Tratado de Hipertension de la SCCH. En 2025 recibi el International Service Award del American College of Cardiology por mis contribuciones en cardiologia latinoamericana.",
      en: "I am a physician graduated from the University of San Carlos of Guatemala, with postgraduate training in Internal Medicine and a Master's in Cardiology from Miguel Hernandez University in Elche, Alicante, Spain. I served as President of the Central American and Caribbean Society of Hypertension and of the Inter-American Society of Cardiology. I have published more than 80 scientific papers and edited SIAC's Blue Book of Cardiology and SCCH's Hypertension Textbook. In 2025, I received the American College of Cardiology International Service Award for my contributions to Latin American cardiology.",
    },
    specialty: { es: "Cardiologia", en: "Cardiology" },
    country: { es: "Guatemala", en: "Guatemala" },
    image: WyssImg,
    instagram: "https://instagram.com/fernandowyss"
  },
  {
    id: 5,
    name: "Osiris Valdez Tiburcio",
    description: {
      es: "Soy medico egresado de la UASD, Republica Dominicana, especialista en Cardiologia y Ecocardiografia, formado en el Instituto Dominicano de Cardiologia y en el Instituto Nacional de Cardiologia Ignacio Chavez de Mexico. Fui presidente de la Sociedad Centroamericana y del Caribe de Hipertension y de la Fundacion Dominicana de Cardiologia. Soy director del Consejo de Prevencion de la Sociedad Interamericana de Cardiologia y profesor del Curso de Hipertension de la Universidad de San Carlos de Guatemala. Participo como coautor de la Guia Latinoamericana de Hipertension 2024 y editor del Tratado de Hipertension Arterial 2024.",
      en: "I am a physician graduated from UASD in the Dominican Republic, specialized in Cardiology and Echocardiography, trained at the Dominican Institute of Cardiology and the Ignacio Chavez National Institute of Cardiology in Mexico. I served as President of the Central American and Caribbean Hypertension Society and of the Dominican Cardiology Foundation. I am Director of the Prevention Council of the Inter-American Society of Cardiology and professor of the Hypertension Course at the University of San Carlos of Guatemala. I am co-author of the 2024 Latin American Hypertension Guidelines and editor of the 2024 Arterial Hypertension Textbook.",
    },
    specialty: { es: "Cardiologia", en: "Cardiology" },
    country: { es: "Republica Dominicana", en: "Dominican Republic" },
    image: OsirisImg,
    youtube: "https://youtube.com/@osirisvaldeztiburcio"
  },
];

const Profesionals = ({ onProfessionalClick }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleClick = (prof) => {
    if (onProfessionalClick) {
      onProfessionalClick(prof);
    } else {
      navigate("/about", { state: { professional: prof } });
    }
  };

  return (
    <section className="w-full py-19 section-shell">
      <h2 className="headline-md text-center text-primary mb-12">
        {t.professionals.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {professionals.map((prof, index) => (
          <div
            key={prof.id}
            onClick={() => handleClick(prof)}
            className="cursor-pointer w-60 h-[350px] rounded-2xl shadow-lg overflow-hidden relative bg-[#d4d6d9] hover:bg-linear-to-t hover:from-[#ecf1fb] hover:to-[#4f8bd0] transition-colors duration-300 flex flex-col justify-end card-lift"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <img
                src={prof.image}
                alt={prof.name}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ borderRadius: "18px" }}
              />
              {/* Overlay degradado en la parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-[#23395d]/90 via-[#23395d]/60 to-transparent rounded-b-2xl"></div>
              {/* Texto sobre la imagen */}
              <div className="absolute bottom-0 left-0 w-full px-5 pb-5 text-white z-10">
                <div className="relative mb-1 flex items-center justify-start">
                  <span className="font-bold text-lg drop-shadow-lg relative z-10">
                    {t.professionals.doctorPrefix} {prof.name}
                  </span>
                  <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-7 w-full rounded-lg blur-md bg-[#23395d]/60 z-0"></span>
                </div>
                <div className="text-sm font-semibold drop-shadow-lg">
                  {prof.specialty[language]} - {prof.country[language]}
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
