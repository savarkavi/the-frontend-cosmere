"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Albums from "./Albums";

const Carousel = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleImage = useTransform(scrollYProgress, [0, 0.56, 0.7], [2.5, 2, 1]);
  const opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 0.7]);
  const rightX = useTransform(scrollYProgress, [0.65, 0.7], [-150, 0]);
  const leftX = useTransform(scrollYProgress, [0.65, 0.7], [150, 0]);

  return (
    <div>
      <div
        ref={ref}
        className="h-[300vh] mt-[-100vh] bg-zinc-950 relative z-[-999] overflow-clip"
      >
        <div className="h-screen sticky top-0 flex justify-center items-center gap-10">
          <motion.div
            style={{ opacity, x: rightX }}
            className="relative w-[50vw] h-[500px] rounded-2xl shrink-0"
          >
            <Image
              src="https://utfs.io/f/Inu8K5VGrlQTgriZe2aNr45aXgf321YqQ8AEdckIlUMZuLiv"
              alt="queen"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            style={{ scale: scaleImage }}
            className="relative w-[50vw] h-[500px] rounded-2xl shrink-0"
          >
            <Image
              src="https://utfs.io/f/Inu8K5VGrlQTX7VVu3tynL0H7zUPOD9meqhIE3GvfTliWaMR"
              alt="queen"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            style={{ opacity, x: leftX }}
            className="relative w-[50vw] h-[500px] rounded-2xl shrink-0"
          >
            <Image
              src="https://utfs.io/f/Inu8K5VGrlQTjHfgdc5kzydNB5owvnfY9pX1L67PJDbR8UOa"
              alt="queen"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
      <Albums />
    </div>
  );
};

export default Carousel;
