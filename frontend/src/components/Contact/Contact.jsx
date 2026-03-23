import React from "react";
import ContactForm from "./ContactForm";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <AnimatedBlurBackground />
      <main className="flex flex-col items-center justify-center flex-1 py-16 px-4 gap-10 mt-30 section-shell">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 w-full flex flex-col items-start text-left" data-aos="fade-down">
            <div className="px-6 py-2 rounded-full bg-primary-light shadow text-xs font-bold text-primary mb-6" style={{display: 'inline-block'}}>
              Grade Latam | Contacto
            </div>
            <h1 className="headline-xl text-primary mb-12 text-left w-full">Contacto</h1>
          </div>
          <div className="rounded-3xl glass-panel p-6 md:p-12 flex flex-col items-center gap-10 mb-10 min-h-[420px] w-full" data-aos="fade-up">
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
