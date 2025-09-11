import React from "react";

const ProfessionalCard = ({ name, title, image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-80 h-80 mx-auto rounded-lg  mb-4 shadow-md hover:grayscale-50 transition duration-300"
      />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default ProfessionalCard;
