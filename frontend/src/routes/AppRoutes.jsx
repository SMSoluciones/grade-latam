import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Events from "../components/Events/Events";
import Contact from "../components/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
