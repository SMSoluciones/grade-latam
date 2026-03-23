import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoBago from "../../assets/Logo-Bago.png";
import LogoSiegfried from "../../assets/Logo-Siegfried.png";

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "Bago",
      logo: LogoBago,
      widthClass: "max-w-[220px]",
    },
    {
      id: 2,
      name: "Siegfried",
      logo: LogoSiegfried,
      widthClass: "max-w-[260px]",
    },
  ];

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "18px",
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
  };

  return (
    <section className="section-shell py-12 md:py-14">
      <div className="glass-panel rounded-3xl px-6 py-8 md:px-12 md:py-12 border border-[#d7e3f6]">
        <h2 className="headline-md text-center text-primary mb-8 md:mb-10">Marcas aliadas</h2>

        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="h-[170px] rounded-2xl bg-white/70 border border-[#dbe6f6] flex items-center justify-center px-6"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`w-full ${brand.widthClass} object-contain`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Slider {...mobileSettings}>
            {brands.map((brand) => (
              <div key={brand.id} className="px-2">
                <div className="h-[130px] rounded-2xl bg-white/75 border border-[#dbe6f6] flex items-center justify-center px-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`w-full ${brand.widthClass} object-contain`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Brands;
