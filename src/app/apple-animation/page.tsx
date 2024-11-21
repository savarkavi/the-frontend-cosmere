import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutText from "./AboutText";
import Carousel from "./Carousel";
import { ReactLenis } from "lenis/react";

const AppleAnimation = () => {
  return (
    <div>
      <ReactLenis root>
        <Header />
        <div>
          <Hero />
          <AboutText />
        </div>
        <Carousel />
        <div className="h-screen bg-white"></div>
      </ReactLenis>
    </div>
  );
};

export default AppleAnimation;
