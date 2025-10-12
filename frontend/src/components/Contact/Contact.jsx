import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import FeedbackForm from "./FeedbackForm";
import AnimatedBlurBackground from "../../utils/AnimatedBlurBackground";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    AOS.refresh();
  }, []);
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <AnimatedBlurBackground />
      <main className="flex flex-col items-center justify-center flex-1 py-16 px-4 gap-10 mt-30">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 w-full flex flex-col items-start text-left" data-aos="fade-down">
            <div className="px-6 py-2 rounded-full bg-[#ecf1fb] shadow text-xs font-bold text-primary mb-6" style={{display: 'inline-block'}}>
              Grade Latam | Contacto
            </div>
            <h1 className="text-5xl font-extrabold text-primary mb-12 text-left w-full">Contacto</h1>
          </div>
          <div className="rounded-2xl bg-[#ecf1fb51] bg-opacity-60 shadow-xl border border-gray-200 p-12 flex flex-col items-center gap-10 backdrop-blur-md mb-10 min-h-[420px] w-full" data-aos="fade-up">
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
