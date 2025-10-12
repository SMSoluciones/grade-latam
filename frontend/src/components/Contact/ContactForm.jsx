import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex flex-col md:flex-row rounded-2xl shadow-lg border border-gray-200 overflow-hidden backdrop-blur-md"
      style={{
        background: "rgba(210, 222, 245, 0.18)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)"
      }}
    >
      {/* Información de contacto */}
      <div className="bg-primary flex-1 p-8 flex flex-col justify-center text-white min-w-[260px] relative overflow-hidden">
        <h2 className="text-xl font-bold mb-2">Te ayudamos a dar el siguiente paso.</h2>
        <p className="mb-4 text-sm"><br />Tambien podes enviarnos un mensaje a <span className="underline">contact@gradelatam.com</span></p>
        <div className="flex flex-col gap-3 text-sm z-10">
        </div>
        {/* Círculo decorativo */}
        <div
          className="absolute right-[-100px] bottom-[-100px] w-80 h-80 rounded-full z-0"
          style={{
            background: "linear-gradient(90deg, #c5d6f5 0%, #244469 100%)",
            opacity: 0.35
          }}
        ></div>
      </div>
      {/* Formulario */}
      <form className="flex-1 p-8 bg-white flex flex-col gap-6 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Nombre completo</label>
            <input type="text" placeholder="Tu nombre" className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Email</label>
            <input type="email" placeholder="Tu email" className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Teléfono</label>
            <input type="text" placeholder="Tu teléfono" className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Profesión</label>
            <input type="text" placeholder="Tu profesión" className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-primary" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm mb-1">Área de interés</label>
          <input type="text" placeholder="Cursos, Talleres, etc." className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm mb-1">Mensaje</label>
          <textarea placeholder="Escribe tu mensaje" rows={3} className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-primary resize-none" />
        </div>
        <button className="self-end bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-secondary transition">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;
