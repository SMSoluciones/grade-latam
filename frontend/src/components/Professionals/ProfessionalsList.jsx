import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importa Link de React Router DOM
import axios from "axios"; // Importa Axios
import ProfessionalCard from "./ProfessionalCard";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import DotLoader from "react-spinners/DotLoader"; // Importa el cargador de puntos
import AOS from "aos"; // Importa AOS para animaciones

const ProfessionalsList = () => {
  const [professionals, setProfessionals] = useState([]); // Estado para almacenar la lista de profesionales
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de 1000ms

    const fetchProfessionals = async () => {
      try {
        const response = await axios.get(
          "https://icsb-cardio.onrender.com/api/professionals"
        ); // Llama a la API usando Axios

        setProfessionals(response.data); // Actualiza el estado con los datos obtenidos
      } catch (err) {
        console.error("Error:", err.message); // Muestra el error en la consola
        setError(err.message); // Maneja errores
      }
    };

    fetchProfessionals();
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (professionals.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24">
        <DotLoader color="#2c9179" />
      </div>
    );
  }

  return (
    <div className="p-10 mt-40 mb-40 bg-primary-ligh">
      <h1 className="text-2xl font-bold mb-6">Lista de Profesionales</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {professionals.map((professional, index) => (
          <div
            key={professional._id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Enlace a la página de detalles del profesional */}
            <Link to={`/professional/${professional._id}`}>
              <ProfessionalCard
                image={professional.image}
                name={professional.name}
                title={professional.title}
                description={professional.description}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsList;
