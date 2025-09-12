import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfessionalCard from "../Professionals/ProfessionalCard";

const Profesionals = () => {
  const [professionals, setProfessionals] = useState([]); // Estado para almacenar los datos

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Función para obtener los datos desde el backend
    const fetchProfessionals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/professionals"
        ); // Cambia la URL si es necesario
        setProfessionals(response.data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener los profesionales:", error);
      }
    };

    fetchProfessionals();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="inline-block bg-primary-light text-green-600 font-semibold text-sm px-4 py-1 rounded-full mb-4">
          Expertos
        </h2>
        <h3 className="text-3xl font-bold text-primary mb-6">
          Nuestro equipo profesional
        </h3>
        <Slider {...settings}>
          {professionals.map((professional, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Link to={`/professional/${professional._id}`}>
                <ProfessionalCard
                  name={professional.name}
                  title={professional.title}
                  image={professional.image}
                />
              </Link>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-15">
          <Link to="/professional">
            <button className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-secondary transition">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profesionals;
