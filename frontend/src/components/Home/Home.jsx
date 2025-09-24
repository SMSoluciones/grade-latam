import React from "react";
import Header from "../Home/Header";
import StatsBar from "../Home/StatsBar";

import Profesionals from "./Profesionals";
import About from "../Home/About";
import Research from "../Home/Research";

const Home = () => {
  return (
    <>
      <Header />

      <Profesionals />
      <StatsBar />
    </>
  );
};

export default Home;
