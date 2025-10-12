import React from "react";

const AnimatedBlurBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-2/5 left-0 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-50 animate-random-move"></div>
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
    <div className="absolute top-1/10 left-1/4 w-20 h-20 bg-secondary-light rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
    <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
    <div className="absolute bottom-1/2 right-1/9 w-80 h-80 bg-secondary-light rounded-full filter blur-3xl opacity-30 animate-random-move"></div>
  </div>
);

export default AnimatedBlurBackground;
