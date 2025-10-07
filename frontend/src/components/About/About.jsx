import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profesionals from "../Home/Profesionals";
import ProfesionalDetail from "./ProfesionalDetail";
import AboutUs  from "./AboutUs";

const About = () => {
  const location = useLocation();
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  useEffect(() => {
    if (location.state && location.state.professional) {
      setSelectedProfessional(location.state.professional);
    }
  }, [location.state]);

  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
  };

  return (
    <div>
      <AboutUs />
      <Profesionals onProfessionalClick={handleProfessionalClick} />
      {selectedProfessional && (
        <ProfesionalDetail professional={selectedProfessional} />
      )}
    </div>
  );
};

export default About;

