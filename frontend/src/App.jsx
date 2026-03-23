import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "../src/utils/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: false,
      easing: "ease-out-cubic",
      offset: 24,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar
          links={[
            { href: "/", label: "Inicio" },
            { href: "/about", label: "Expertos" },
            { href: "/events", label: "Eventos y Cursos" },
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
