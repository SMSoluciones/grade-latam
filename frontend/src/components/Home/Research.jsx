import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Research = () => {
  const researchData = [
    { id: 1, title: "Investigación 1" },
    { id: 2, title: "Investigación 2" },
    { id: 3, title: "Investigación 3" },
    { id: 4, title: "Investigación 4" },
    { id: 5, title: "Investigación 5" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Investigaciones</h2>
        <Slider {...settings}>
          {researchData.map((research) => (
            <div key={research.id} className="text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/assets%2FInvestigaciones.svg?alt=media&token=6b8d41a5-1541-4d7e-a667-b93e043c2700"
                alt={research.title}
                className="mx-auto mb-4"
                style={{ width: "50%", height: "auto" }}
              />
              <h3 className="text-lg font-semibold">{research.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Research;
