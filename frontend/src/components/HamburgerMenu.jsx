import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ links, isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-primary-light z-40 transition-all duration-500 ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } md:hidden`}
    >
      <ul className="space-y-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="relative text-xl px-4 py-2 hover:text-secondary transition group"
              onClick={toggleMenu} // Cierra el menú al hacer clic en un enlace
            >
              {link.label}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/professionals"
        className="mt-6 bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-light transition"
        onClick={toggleMenu} // Cierra el menú al hacer clic en "Solicitar turno"
      >
        Solicitar turno
      </Link>
    </div>
  );
};

export default HamburgerMenu;
