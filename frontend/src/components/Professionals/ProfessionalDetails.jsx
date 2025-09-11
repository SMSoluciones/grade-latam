import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Importa useParams para obtener el id dinámico
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

const ProfessionalDetails = () => {
  const { id } = useParams(); // Obtiene el id dinámico desde la URL
  const [professional, setProfessional] = useState(null); // Estado para almacenar los datos del profesional
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchProfessional = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://icsb-cardio.onrender.com/api/professionals/${id}` // Usa el id dinámico en la URL
        );
        setProfessional(response.data); // Asigna los datos obtenidos al estado
      } catch (err) {
        setError(err.message); // Maneja errores
      } finally {
        setLoading(false);
      }
    };

    fetchProfessional();
  }, [id]); // Ejecuta el efecto cada vez que el id cambie

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24">
        <DotLoader color="#2c9179" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  }

  if (!professional) {
    return (
      <p className="text-center mt-10">
        No se encontraron datos para este profesional.
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Imagen a la izquierda */}
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            <img
              src={professional.image}
              alt={professional.name}
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full"
            />
          </div>

          {/* Datos a la derecha */}
          <div className="sm:ml-10 flex flex-col justify-center text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">
              Detalles del Profesional
            </h1>
            <p className="mb-2">
              <strong>Nombre:</strong> {professional.name}
            </p>
            <p className="mb-2">
              <strong>Especialidad:</strong> {professional.title}
            </p>
            <p className="mb-2">
              <strong>Descripción:</strong> {professional.description}
            </p>
            <p className="mb-2">
              <strong>Formación:</strong> {professional.fromation}
            </p>
          </div>
        </div>

        {/* Botones debajo */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
          <Link
            to="/professional" // Cambia "/" por la ruta a la que quieres que redirija el botón "Volver"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded text-center"
          >
            Volver
          </Link>
          <Link
            to="/appointment" // Cambia "/appointment" por la ruta de la funcionalidad de "Solicitar turno"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded text-center"
          >
            Solicitar turno
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
