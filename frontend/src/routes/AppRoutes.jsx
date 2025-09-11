import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import ProfessionalsList from "../components/Professionals/ProfessionalsList";
import ProfessionalDetails from "../components/Professionals/ProfessionalDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/professional" element={<ProfessionalsList />} />
      <Route path="/professional/:id" element={<ProfessionalDetails />} />
    </Routes>
  );
};

export default AppRoutes;
