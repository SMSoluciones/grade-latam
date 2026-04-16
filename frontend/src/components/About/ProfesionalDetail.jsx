import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import InstagramIcon from "../../assets/Instagram.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
import YoutubeIcon from "../../assets/Youtube.svg";
import ProfesionalSlider from "./ProfesionalSlider";

// Importing DoctorsBig images
import LorenzattiImg from "../../assets/Profesionals/DoctorsBig/Alberto-LorenzattiBG.png";
import PiskorzImg from "../../assets/Profesionals/DoctorsBig/Daniel-PiskorzBG.png";
import LopezSantiImg from "../../assets/Profesionals/DoctorsBig/Ricardo-Lopez-SantiBG.png";
import WyssImg from "../../assets/Profesionals/DoctorsBig/Fernando-WyssBG.png";
import OsirisImg from "../../assets/Profesionals/DoctorsBig/Osiris-Valdez-TiburcioBG.png";

const ProfesionalDetail = ({ professional }) => {
  if (!professional) return null;

  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const textNodes = contentRef.current?.querySelectorAll("h2, p, .theme-chip, a");

      gsap.set(cardRef.current, { autoAlpha: 0, y: 26 });
      gsap.set(imageRef.current, { scale: 1.06, autoAlpha: 0 });
      gsap.set(contentRef.current, { x: 20, autoAlpha: 0 });
      gsap.set(sliderRef.current, { y: 20, autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(cardRef.current, { autoAlpha: 1, y: 0, duration: 0.45 })
        .to(imageRef.current, { autoAlpha: 1, scale: 1, duration: 0.55 }, "<0.05")
        .to(contentRef.current, { autoAlpha: 1, x: 0, duration: 0.45 }, "<0.08")
        .from(
          textNodes || [],
          {
            y: 14,
            autoAlpha: 0,
            stagger: 0.06,
            duration: 0.28,
            ease: "power2.out",
          },
          "<0.06"
        )
        .to(sliderRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.12");
    }, root);

    return () => ctx.revert();
  }, [professional.name]);


  const bigImages = {
    "Alberto Lorenzatti": LorenzattiImg,
    "Daniel Piskorz": PiskorzImg,
    "Ricardo Lopez Santi": LopezSantiImg,
    "Fernando Wyss": WyssImg,
    "Osiris Valdez Tiburcio": OsirisImg,
  };

  const imagePositions = {
    "Daniel Piskorz": "center -28px",
  };

  return (
    <div ref={rootRef} className="flex flex-col items-center justify-center p-8">
      <div
        ref={cardRef}
        key={professional.name}
        className="theme-card flex flex-col md:flex-row items-stretch gap-8 rounded-2xl max-w-[1300px] w-full overflow-hidden"
        data-aos="fade-up"
      >
        <div ref={imageRef} className="flex-1 w-full md:w-[60%] flex items-center justify-center p-0 m-0">
          <div className="w-full h-80 sm:h-96 md:h-[40rem] overflow-hidden origin-center">
            <img
              src={bigImages[professional.name]}
              alt={professional.name}
              className="w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
              style={{ objectPosition: imagePositions[professional.name] || "center top" }}
            />
          </div>
        </div>
        <div
          ref={contentRef}
          className="flex flex-col justify-center bg-gradient-to-t from-[#244469] to-[#4F8BD0] text-white p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none w-full md:w-[40%]"
        >
          <div className="theme-chip text-sm mb-2 font-semibold rounded-full px-3 py-1 max-w-fit text-[var(--color-text-main)]">
            Grade Latam | Sobre nosotros
          </div>
          <h2 className="text-3xl font-bold mb-4">Dr. <br />{professional.name}</h2>
          <p className="text-md mb-6 max-h-[40vh] overflow-auto">
            {typeof professional.description === "object"
              ? professional.description.es || ""
              : professional.description}
          </p>
          <div className="flex gap-4 mt-6">
            {professional.instagram && (
              <a
                href={professional.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2  hover:scale-110 transition"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
              </a>
            )}
            {professional.linkedin && (
              <a
                href={professional.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 hover:scale-110 transition"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="w-10 h-10" />
              </a>
            )}
            {professional.youtube && (
              <a
                href={professional.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2  hover:scale-110 transition"
              >
                <img src={YoutubeIcon} alt="YouTube" className="w-10 h-10" />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Slider de fotos del profesional */}
      <div ref={sliderRef} className="w-full flex justify-center mt-8">
        <ProfesionalSlider professional={professional} />
      </div>
    </div>
  );
};

export default ProfesionalDetail;
