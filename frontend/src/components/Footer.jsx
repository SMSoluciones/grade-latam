import React from "react";
import LogoWhite from "../assets/White-Logo.svg";
import { Link } from "react-router-dom";
import Youtube from "../assets/Youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#244469] to-[#4786CF] text-white py-12 px-6 md:py-24 md:px-32 rounded-t-[30px]">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 text-center md:text-left">
        {/* Logo y dirección */}
        <div className="flex flex-col items-center md:items-start">
          <img src={LogoWhite} alt="GradeLatam Logo" className="mb-3" />

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a href="#" aria-label="Youtube">
              <img
                src={Youtube}
                alt="Youtube"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Información */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Información</h3>
          <ul className="space-y-1">
            <Link to="/about"><li>Expertos</li></Link>
            <Link to="/events"><li>Eventos y Cursos</li></Link>
          </ul>
        </div>

        {/* Turnos */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Plataforma</h3>
          <Link to="https://www.gradelatam.com.ar/login"><p>Ingreso</p></Link>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Contacto</h3>
          <Link to="/contact"><p>Formulario de contacto.</p></Link>
        </div>
      </div>

      {/* Línea y derechos reservados */}
      <div className="border-t border-white mt-6 pt-4 text-center text-sm">
        © 2025 Nümedia all rights reserved. Designed by Nümedia.
      </div>
    </footer>
  );
};

export default Footer;
