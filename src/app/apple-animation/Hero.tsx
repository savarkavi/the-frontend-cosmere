"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start start", "end end"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);

  return (
    <div className="w-full h-full min-h-screen relative flex justify-center">
      <div
        ref={videoRef}
        className="absolute -top-[6rem] left-0 w-full h-[200vh] z-[-99] bg-black"
      >
        <motion.video
          style={{ opacity: videoOpacity }}
          width="95%"
          autoPlay
          loop
          muted
          className="sticky top-0 object-contain mx-auto"
        >
          <source
            src="https://utfs.io/f/Inu8K5VGrlQTiTjqdazTKJd7DwOhnNgCBqXakZ4copMbx6VE"
            type="video/mp4"
          />
          Your browser does not support the video media.
        </motion.video>
      </div>
      <motion.div
        style={{ opacity: heroTextOpacity }}
        className="text-white z-[99] w-full max-w-[1000px] mx-auto flex flex-col justify-center gap-10 h-screen"
      >
        <h1 className="text-[5rem] leading-tight font-bold font-sans">
          All Avocado originals. <br />
          Only for crack heads.
        </h1>
        <button className="text-lg px-5 py-2 bg-white rounded-3xl text-black w-max">
          Listen now
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
