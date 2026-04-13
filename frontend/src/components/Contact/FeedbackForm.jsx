import React from "react";

const FeedbackForm = () => {
  return (
    <div className="theme-card flex flex-col md:flex-row rounded-2xl overflow-hidden">
      <div className="bg-secondary flex-1 p-8 flex flex-col justify-center text-white min-w-[260px] relative overflow-hidden">
        <h2 className="text-xl font-bold mb-2">Dejanos tu Feedback</h2>
        <p className="mb-4 text-sm">Tu opinión nos ayuda a mejorar.<br />¡Gracias por colaborar!</p>
        <div
          className="absolute right-[-100px] bottom-[-100px] w-80 h-80 rounded-full z-0"
          style={{
            background: "linear-gradient(90deg, #ffb3b3 0%, #e53935 100%)",
            opacity: 0.35
          }}
        ></div>
      </div>
      <form className="theme-card-strong flex-1 p-8 flex flex-col gap-6 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-muted text-sm mb-1">Nombre y Apellido</label>
            <input type="text" placeholder="Tu nombre y apellido" className="theme-input-line px-2 py-1 focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="text-muted text-sm mb-1">Nacionalidad</label>
            <input type="text" placeholder="Tu nacionalidad" className="theme-input-line px-2 py-1 focus:outline-none" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-muted text-sm mb-1">Mensaje</label>
          <textarea placeholder="Escribe tu feedback" rows={3} className="theme-input-line px-2 py-1 focus:outline-none resize-none" />
        </div>
        <button className="self-end bg-secondary text-white font-bold py-2 px-6 rounded-full hover:bg-primary transition">Enviar feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
