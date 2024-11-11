"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const ScrollParallex2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-1700, 1850]);
  const y3 = useTransform(scrollYProgress, [0, 1], [600, -450]);

  useMotionValueEvent(y2, "change", (latest) => console.log(latest));

  return (
    <div>
      <ReactLenis root options={{ lerp: 0.05 }}>
        <div className="h-screen bg-black flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl text-red-500">Scroll through the doom ↓</h1>
          <div className="relative w-[500px] h-[400px]">
            <Image
              src="/scroll_parallex2_hero.jpg"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="h-[130vh] bg-zinc-950 p-6 grid grid-cols-3 justify-center items-center overflow-hidden"
          ref={ref}
        >
          <motion.div
            className="flex flex-col gap-6 items-center relative -top-[500px]"
            style={{ y: y1 }}
          >
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image1.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image2.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image3.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 items-center relative -top-[25%]"
            style={{ y: y2 }}
          >
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image4.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image5.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image6.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 items-center relative -top-[25%]"
            style={{ y: y3 }}
          >
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image7.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image8.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="/scroll_parallex2_image9.jpg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        <div className="h-screen bg-black flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl text-red-500">Welcome to the abyss</h1>
          <div className="relative w-[500px] h-[400px]">
            <Image
              src="/scroll_parallex2_hero.jpg"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </ReactLenis>
    </div>
  );
};

export default ScrollParallex2;
