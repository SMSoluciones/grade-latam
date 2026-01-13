import React, { useState, useEffect } from "react";
import AOS from "aos";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu"; // Importa el nuevo componente

const NavBar = ({ links = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
        isScrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="mx-4 md:mx-20">
        <div
          className="flex justify-between items-center rounded-full px-4 md:px-6 py-3 md:py-4 transition-all duration-300 shadow-lg backdrop-blur-md"
          style={{
            background: "rgba(210, 222, 245, 0.18)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)"
          }}
        >
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={Logo} alt="Grade" className="h-10 ml-5" />
          </Link>

          {/* Menú completo (visible en pantallas grandes) */}
          <div className="hidden xl:flex xl:items-center xl:space-x-8">
            <ul className="flex space-x-12">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href.startsWith("/") ? link.href : `/${link.href}`} // Asegura rutas absolutas
                    className="relative text-primary hover:text-secondary transition group font-bold"
                  >
                    {link.label}
                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="https://www.gradelatam.com.ar/login"
              className="ml-6 bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-secondary transition"
            >
              Plataforma
            </Link>
          </div>

          {/* Hamburger Icon (visible en pantallas pequeñas e iPad) */}
          <div className="xl:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none z-50 relative"
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

          {/* Menú desplegable (visible en pantallas pequeñas e iPad) */}
          <HamburgerMenu
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
