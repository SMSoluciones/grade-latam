import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex flex-col md:flex-row rounded-2xl md:rounded-3xl shadow-lg border border-[#c8d8ef] overflow-hidden w-full"
      style={{
        background: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="bg-gradient-to-br from-primary to-secondary-light flex-1 p-6 sm:p-8 flex flex-col justify-center text-white min-w-[260px] relative overflow-hidden">
        <h2 className="text-2xl md:text-xl font-bold mb-3 md:mb-2">Te ayudamos a dar el siguiente paso.</h2>
        <p className="mb-3 md:mb-4 text-sm leading-relaxed">Tambien podes enviarnos un mensaje a <span className="underline">contact@gradelatam.com</span></p>
        <div
          className="absolute right-[-100px] bottom-[-100px] w-80 h-80 rounded-full z-0"
          style={{
            background: "linear-gradient(90deg, #c5d6f5 0%, #244469 100%)",
            opacity: 0.35
          }}
        ></div>
      </div>
      <form className="flex-1 p-5 sm:p-6 md:p-8 bg-white flex flex-col gap-4 md:gap-6 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Nombre completo</label>
            <input type="text" placeholder="Tu nombre" className="border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Email</label>
            <input type="email" placeholder="Tu email" className="border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Teléfono</label>
            <input type="text" placeholder="Tu teléfono" className="border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">Profesión</label>
            <input type="text" placeholder="Tu profesión" className="border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm mb-1">Área de interés</label>
          <input type="text" placeholder="Cursos, Talleres, etc." className="border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary" />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm mb-1">Mensaje</label>
          <textarea placeholder="Escribe tu mensaje" rows={3} className="border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary resize-none" />
        </div>
        <button className="w-full md:w-auto md:self-end cta-primary">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;
