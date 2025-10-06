import React, { useState } from "react";
import Profesionals from "../Home/Profesionals";
import ProfesionalDetail from "./ProfesionalDetail";

const About = () => {
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
  };

  return (
    <div>
      <Profesionals onProfessionalClick={handleProfessionalClick} />
      {selectedProfessional && (
        <ProfesionalDetail professional={selectedProfessional} />
      )}
    </div>
  );
};

export default About;
