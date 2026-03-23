import React from "react";
import LogoWhite from "../assets/White-Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinkClass =
    "relative inline-block text-white/90 hover:text-white transition-colors duration-300 after:content-[''] after:block after:h-[2px] after:bg-white after:rounded-full after:mt-1 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <footer className="bg-gradient-to-r from-[#102c4f] via-[#1f4d84] to-[#4f86cf] text-white mt-10 rounded-t-[34px] pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-center lg:text-left">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
          <img
            src={LogoWhite}
            alt="GradeLatam Logo"
            className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[290px] object-contain"
          />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-3 text-2xl">Información</h3>
              <ul className="space-y-2 text-white/90 text-lg">
                <li><Link to="/about" className={footerLinkClass}>Expertos</Link></li>
                <li><Link to="/events" className={footerLinkClass}>Eventos y Cursos</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-3 text-2xl">Plataforma</h3>
              <a href="https://www.gradelatam.com.ar/login" target="_blank" rel="noreferrer" className={footerLinkClass + " text-lg"}>
                Ingreso
              </a>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-3 text-2xl">Contacto</h3>
              <Link to="/contact" className={footerLinkClass + " text-lg"}>Formulario de contacto</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/25 mt-8 pt-5 text-center text-sm md:text-base text-white/85">
          © 2025 Numedia all rights reserved. Designed by Numedia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
