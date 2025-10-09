import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events  from "./components/Events/Events";
import ScrollToTop from "./components/ScrollToTop"; // Importa el componente

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar
          links={[
            { href: "/", label: "Inicio" },
            { href: "/about", label: "Expertos" },
            { href: "/events", label: "Eventos y Cursos" },
            { href: "/#contacto", label: "Contacto" },
          ]}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
