import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ links, isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full flex flex-col items-center justify-center z-40 transition-all duration-500 ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } xl:hidden`}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(165deg, rgba(233,244,255,0.97) 0%, rgba(205,224,247,0.95) 45%, rgba(182,210,243,0.92) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ul className="space-y-8 w-full flex flex-col items-center justify-center">
          {links.map((link, index) => (
            <li key={index} className="w-full flex justify-center">
              <Link
                to={link.href}
                className="relative text-2xl px-4 py-2 hover:text-secondary transition group text-center font-semibold text-primary"
                onClick={toggleMenu}
              >
                {link.label}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://www.gradelatam.com.ar/login"
          target="_blank"
          rel="noreferrer"
          className="mt-10 cta-primary text-xl"
          onClick={toggleMenu}
        >
          Plataforma
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
