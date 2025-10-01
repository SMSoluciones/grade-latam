import React from "react";
import Header from "../Home/Header";
import StatsBar from "../Home/StatsBar";
import NextEvents from "../Events/NextEvents";
import Profesionals from "./Profesionals";
import Brands from "../Home/Brands";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <NextEvents />
      <Profesionals />
      <StatsBar />
      <Brands />
      <Testimonials />
    </>
  );
};

export default Home;
