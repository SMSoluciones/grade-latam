import React from "react";
import ContactForm from "./ContactForm";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <AnimatedBlurBackground />
      <main className="flex flex-col items-center justify-center flex-1 pt-24 md:pt-44 pb-12 md:pb-14 px-4 gap-8 md:gap-10 section-shell">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-5 md:mb-6 w-full flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-down">
            <div className="px-6 py-2 rounded-full bg-primary-light shadow text-xs font-bold text-primary mb-4 md:mb-6" style={{display: 'inline-block'}}>
              Grade Latam | Contacto
            </div>
            <h1 className="headline-xl text-primary mb-8 md:mb-12 text-center md:text-left w-full">Contacto</h1>
          </div>
          <div className="rounded-2xl md:rounded-3xl glass-panel p-3 sm:p-5 md:p-12 flex flex-col items-center gap-8 md:gap-10 mb-8 md:mb-10 min-h-[420px] w-full" data-aos="fade-up">
            <div className="w-full flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
