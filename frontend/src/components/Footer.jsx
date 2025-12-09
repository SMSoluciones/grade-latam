import React from "react";
import LogoWhite from "../assets/White-Logo.svg";
import { Link } from "react-router-dom";
import Youtube from "../assets/Youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#244469] to-[#4786CF] text-white py-12 px-6 md:py-24 md:px-32 rounded-t-[30px]">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 text-center lg:text-left">
        {/* Logo centrado (en mobile y tablet) */}
        <div className="flex flex-col items-center w-full lg:items-start lg:w-auto lg:flex-shrink-0">
          <img
            src={LogoWhite}
            alt="GradeLatam Logo"
            className="mb-4 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[240px] lg:max-w-[300px] object-contain"
          />
        </div>

        {/* Columnas de enlaces: en mobile apilan, en md se muestran en fila */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 w-full lg:flex-1 lg:justify-end">
          {/* Información */}
          <div className="flex flex-col items-center md:items-start md:text-left md:flex-1">
            <h3 className="font-bold mb-2 text-xl">Información</h3>
            <ul className="space-y-1">
              <Link to="/about"><li>Expertos</li></Link>
              <Link to="/events"><li>Eventos y Cursos</li></Link>
            </ul>
          </div>

          {/* Plataforma */}
          <div className="flex flex-col items-center md:items-start md:text-left md:flex-1">
            <h3 className="font-bold mb-2 text-xl">Plataforma</h3>
            <Link to="https://www.gradelatam.com.ar/login"><p>Ingreso</p></Link>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-start md:text-left md:flex-1">
            <h3 className="font-bold mb-2 text-xl">Contacto</h3>
            <Link to="/contact"><p>Formulario de contacto.</p></Link>
          </div>
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
