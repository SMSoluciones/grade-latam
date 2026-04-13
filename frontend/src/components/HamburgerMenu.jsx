import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ links, isMenuOpen, toggleMenu, darkMode = false, onToggleDarkMode }) => {
  const handleMenuLinkClick = () => {
    toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed inset-0 w-full h-full flex flex-col items-center justify-center z-40 transition-all duration-500 ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } xl:hidden`}
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(165deg, rgba(10,23,41,0.98) 0%, rgba(16,35,63,0.97) 45%, rgba(26,50,84,0.94) 100%)"
          : "linear-gradient(165deg, rgba(233,244,255,0.97) 0%, rgba(205,224,247,0.95) 45%, rgba(182,210,243,0.92) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <button
          type="button"
          onClick={onToggleDarkMode}
          className={`mb-10 inline-flex items-center gap-3 rounded-full border px-5 py-3 text-base font-semibold transition ${
            darkMode
              ? "border-[#3e638f] bg-[#132846]/92 text-[#ffd88a] shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
              : "border-[#c2d4ee] bg-white/80 text-primary"
          }`}
        >
          <span>{darkMode ? "Modo claro" : "Modo oscuro"}</span>
        </button>
        <ul className="space-y-8 w-full flex flex-col items-center justify-center">
          {links.map((link, index) => (
            <li key={index} className="w-full flex justify-center">
              <Link
                to={link.href}
                className={`relative text-2xl px-4 py-2 hover:text-secondary transition group text-center font-semibold ${darkMode ? "text-white" : "text-primary"}`}
                onClick={handleMenuLinkClick}
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
          className="nav-cta mt-10 cta-primary text-xl"
          onClick={toggleMenu}
        >
          Plataforma
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
