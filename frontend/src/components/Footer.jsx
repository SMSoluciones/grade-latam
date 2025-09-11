import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-6 md:py-24 md:px-32">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 text-center md:text-left">
        {/* Logo y dirección */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/assets%2FLogoFooter.svg?alt=media&token=c9887936-9a02-4379-b74f-f4f5759cced0" // Reemplaza con la ruta de tu logo
            alt="ICSB Logo"
            className="mb-4"
          />
          <p>Jujuy 1540 5to Piso, Rosario, Santa Fe, Argentina CP 2000</p>
          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/assets%2FLinkedin.svg?alt=media&token=66a7b1ad-264c-48bf-8748-2d1833701422" // Reemplaza con la ruta del ícono
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="WhatsApp">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/assets%2FWhatsapp.svg?alt=media&token=0ab910f9-aba5-4ad9-9859-9ee9ab7caf7e" // Reemplaza con la ruta del ícono
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/assets%2FInstagram.svg?alt=media&token=c95bdc90-9844-4596-a89c-4c9da28ef0be" // Reemplaza con la ruta del ícono
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Información */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Información</h3>
          <ul className="space-y-1">
            <li>Áreas</li>
            <li>Profesionales</li>
            <li>Investigación</li>
          </ul>
        </div>

        {/* Turnos */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Turnos</h3>
          <p>Solicitar turno.</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 text-xl">Contacto</h3>
          <p>0341 15-224-4716</p>
          <p>instcardiologia@icsb.com.ar</p>
        </div>
      </div>

      {/* Línea y derechos reservados */}
      <div className="border-t border-white mt-6 pt-4 text-center text-sm">
        © 2025 Nümedia all rights reserved. Designed by Nümedia.
      </div>
    </footer>
  );
};

export default Footer;
