import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ links, isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-primary-light z-40 transition-all duration-500 ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } lg:hidden`}
      style={{ minHeight: '100vh' }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ul className="space-y-8 w-full flex flex-col items-center justify-center">
          {links.map((link, index) => (
            <li key={index} className="w-full flex justify-center">
              <Link
                to={link.href}
                className="relative text-2xl px-4 py-2 hover:text-secondary transition group text-center"
                onClick={toggleMenu}
              >
                {link.label}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/professionals"
          className="mt-10 bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-light transition text-xl"
          onClick={toggleMenu}
        >
          Plataforma
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
