import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
    {
      id: 2,
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} style={{ textAlign: "center" }}>
            <img
              src={brand.logo}
              alt={brand.name}
              style={{ maxWidth: "100px", margin: "0 auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
