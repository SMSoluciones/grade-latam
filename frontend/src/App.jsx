import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "../src/utils/ScrollToTop";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = window.localStorage.getItem("grade-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: false,
      easing: "ease-out-cubic",
      offset: 24,
    });
  }, []);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("grade-theme", theme);
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode((current) => !current)}
          links={[
            { href: "/", label: "Inicio" },
            { href: "/about", label: "Expertos" },
            { href: "/events", label: "Eventos y Cursos" },
            { href: "/bibliografia", label: "Biblioteca" },
            { href: "/contact", label: "Contacto" },
          ]}
        />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
