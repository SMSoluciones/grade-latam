import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";

const Brands = () => {
  SwiperCore.use([
    SwiperCore.Autoplay,
    SwiperCore.Pagination,
    SwiperCore.Navigation,
  ]);

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
    {
      id: 3,
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
    },
    {
      id: 4,
      name: "Reebok",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Reebok_logo_2019.svg",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Marcas</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ padding: "10px" }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div style={{ textAlign: "center" }}>
              <img
                src={brand.logo}
                alt={brand.name}
                style={{ maxWidth: "100px", margin: "0 auto" }}
              />
              <p>{brand.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
