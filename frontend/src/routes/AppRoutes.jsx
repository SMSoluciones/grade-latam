import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../components/Home/Home"));
const About = lazy(() => import("../components/About/About"));
const Events = lazy(() => import("../components/Events/Events"));
const Contact = lazy(() => import("../components/Contact/Contact"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center text-primary font-semibold">
          Cargando contenido...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
