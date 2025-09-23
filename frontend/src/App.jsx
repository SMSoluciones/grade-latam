import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar
          links={[
            { href: "/#areas", label: "Inicio" },
            { href: "/professional", label: "Expertos" },
            { href: "/#investigacion", label: "Eventos y Cursos" },
            { href: "/#contacto", label: "Contacto" },
          ]}
        />
        <main className="flex-grow">
          <AppRoutes /> {/* Rutas principales */}
        </main>
        <Footer /> {/* Footer siempre visible */}
      </div>
    </Router>
  );
};

export default App;
