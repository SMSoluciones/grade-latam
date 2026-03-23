import React from "react";

const AnimatedBlurBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[20%] -left-8 w-64 h-64 bg-secondary-light rounded-full blur-orb opacity-30 animate-random-move"></div>
    <div className="absolute top-[8%] left-[28%] w-80 h-80 bg-primary rounded-full blur-orb opacity-22 animate-random-move"></div>
    <div className="absolute -top-20 left-[45%] w-64 h-64 bg-secondary rounded-full blur-orb opacity-15 animate-random-move"></div>
    <div className="absolute bottom-[18%] right-[6%] w-72 h-72 bg-secondary-light rounded-full blur-orb opacity-28 animate-random-move"></div>
  </div>
);

export default AnimatedBlurBackground;
