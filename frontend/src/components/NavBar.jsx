import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const ThemeToggle = ({ darkMode, onToggleDarkMode, mobile = false }) => (
  <button
    type="button"
    onClick={onToggleDarkMode}
    className={`inline-flex items-center justify-center rounded-full border transition ${
      darkMode
        ? mobile
          ? "h-12 w-12 border-[#3e638f] bg-[#132846]/92 text-[#ffd88a] shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
          : "h-11 w-11 border-[#3e638f] bg-[#132846]/88 text-[#ffd88a] shadow-[0_10px_24px_rgba(0,0,0,0.24)]"
        : mobile
          ? "h-12 w-12 border-[#c2d4ee] bg-white/80 text-primary"
          : "h-11 w-11 border-[#c2d4ee] bg-white/75 text-primary"
    }`}
    aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    title={darkMode ? "Modo claro" : "Modo oscuro"}
  >
    {darkMode ? (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" strokeLinecap="round" />
        <path d="M12 20v2" strokeLinecap="round" />
        <path d="m4.93 4.93 1.41 1.41" strokeLinecap="round" />
        <path d="m17.66 17.66 1.41 1.41" strokeLinecap="round" />
        <path d="M2 12h2" strokeLinecap="round" />
        <path d="M20 12h2" strokeLinecap="round" />
        <path d="m6.34 17.66-1.41 1.41" strokeLinecap="round" />
        <path d="m19.07 4.93-1.41 1.41" strokeLinecap="round" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M21 14.2A8.5 8.5 0 1 1 9.8 3 7 7 0 0 0 21 14.2Z" />
      </svg>
    )}
  </button>
);

const NavBar = ({ links = [], darkMode = false, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 26);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-4 md:top-10 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "" : ""
      }`}
    >
      <div className="mx-4 md:mx-20">
        <div
          className={`flex justify-between items-center rounded-full px-4 md:px-6 py-3 md:py-4 transition-all duration-300 border ${
            isScrolled
              ? darkMode
                ? "bg-[#10233f]/92 border-[#2d4e78] shadow-lg"
                : "bg-white/95 border-[#a6bddf] shadow-lg"
              : "glass-panel border-transparent"
          }`}
        >
          <Link to="/" className="text-xl font-bold flex items-center pl-1 md:pl-2">
            <img src={Logo} alt="Grade" className={`h-10 ${darkMode ? "logo-white-filter" : ""}`} />
          </Link>

          <div className="hidden xl:flex xl:items-center xl:space-x-8">
            <ul className="flex space-x-12">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href.startsWith("/") ? link.href : `/${link.href}`}
                    className="relative text-primary hover:text-secondary transition group font-bold"
                    onClick={handleNavLinkClick}
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
              className="nav-cta ml-6 cta-primary"
            >
              Plataforma
            </a>
            <ThemeToggle darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
          </div>

          <div className="xl:hidden flex items-center gap-2 pr-1 md:pr-2">
            <button
              onClick={toggleMenu}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full focus:outline-none z-50 relative transition ${
                darkMode ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-white/55"
              }`}
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              <svg
                className={`w-8 h-8 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <HamburgerMenu
            darkMode={darkMode}
            onToggleDarkMode={onToggleDarkMode}
            links={links}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
