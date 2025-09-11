import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export const Specialties = () => {
  const [specialties, setSpecialties] = useState([]); // Estado para almacenar las especialidades

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Función para obtener las especialidades desde el backend
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get(
          "https://icsb-cardio.onrender.com/api/specialties" // Cambia la URL si es necesario
        ); // Cambia la URL si es necesario
        setSpecialties(response.data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener las especialidades:", error);
      }
    };

    fetchSpecialties();
  }, []);

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Especialidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition group"
            data-aos="fade-up" // Animación de aparición desde abajo
            data-aos-delay={index * 100} // Retraso progresivo para cada tarjeta
          >
            <img
              src={specialty.image} // Asegúrate de que este campo sea correcto
              alt={specialty.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-primary group-hover:text-secondary mb-2 transition">
              {specialty.title}
            </h3>
            <p className="text-gray-600 mb-4">{specialty.description}</p>
            <a
              href={specialty.link}
              className="text-primary font-medium hover:underline"
            >
              Ver más &gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
