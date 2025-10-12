import React from "react";

const FeedbackForm = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl shadow-lg bg-white bg-opacity-80 border border-gray-200 overflow-hidden">
      {/* Información de feedback */}
      <div className="bg-secondary flex-1 p-8 flex flex-col justify-center text-white min-w-[260px] relative overflow-hidden">
        <h2 className="text-xl font-bold mb-2">Dejanos tu Feedback</h2>
        <p className="mb-4 text-sm">Tu opinión nos ayuda a mejorar.<br />¡Gracias por colaborar!</p>
        {/* Círculo decorativo */}
        <div
          className="absolute right-[-100px] bottom-[-100px] w-80 h-80 rounded-full z-0"
          style={{
            background: "linear-gradient(90deg, #ffb3b3 0%, #e53935 100%)",
            opacity: 0.35
          }}
        ></div>
      </div>
      {/* Formulario */}
      <form className="flex-1 p-8 bg-white flex flex-col gap-6 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Nombre y Apellido</label>
            <input type="text" placeholder="Tu nombre y apellido" className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-secondary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Nacionalidad</label>
            <input type="text" placeholder="Tu nacionalidad" className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-secondary" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm mb-1">Mensaje</label>
          <textarea placeholder="Escribe tu feedback" rows={3} className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-secondary resize-none" />
        </div>
        <button className="self-end bg-secondary text-white font-bold py-2 px-6 rounded-full hover:bg-primary transition">Enviar feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
