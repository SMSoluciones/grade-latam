import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Profesionals from "../Home/Profesionals";
import ProfesionalDetail from "./ProfesionalDetail";
import AboutUs  from "./AboutUs";

const About = () => {
  const location = useLocation();
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const detailRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.professional) {
      setSelectedProfessional(location.state.professional);
    }
  }, [location.state]);

  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
  };

  useEffect(() => {
    if (selectedProfessional && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedProfessional]);

  return (
    <div>
      <AboutUs />
      <Profesionals onProfessionalClick={handleProfessionalClick} />
      {selectedProfessional && (
        <div ref={detailRef}>
          <ProfesionalDetail professional={selectedProfessional} />
        </div>
      )}
    </div>
  );
};

export default About;

