import React from "react";
import Header from "../Home/Header";
import Specialties from "../Home/Specialties";
import Profesionals from "./Profesionals";
import About from "../Home/About";
import Research from "../Home/Research";

const Home = () => {
  return (
    <>
      <Header />
      <Specialties id="areas" />
      <Profesionals />
      <About />
      <Research />
    </>
  );
};

export default Home;
