import React from "react";
import FadeIn from "./FadeIn";

const AboutText = () => {
  return (
    <div className="text-white text-[3rem] max-w-[1000px] mx-auto font-bold font-sans space-y-8 leading-tight pb-16">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </div>
  );
};

export default AboutText;
