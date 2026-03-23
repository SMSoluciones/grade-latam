import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = ({ links = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
              ? "bg-white/95 border-[#a6bddf] shadow-lg"
              : "glass-panel border-transparent"
          }`}
        >
          <Link to="/" className="text-xl font-bold">
            <img src={Logo} alt="Grade" className="h-10 ml-2 md:ml-5" />
          </Link>

          <div className="hidden xl:flex xl:items-center xl:space-x-8">
            <ul className="flex space-x-12">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href.startsWith("/") ? link.href : `/${link.href}`}
                    className="relative text-primary hover:text-secondary transition group font-bold"
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
              className="ml-6 cta-primary"
            >
              Plataforma
            </a>
          </div>

          <div className="xl:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none z-50 relative"
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
