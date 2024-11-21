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
              src="https://utfs.io/f/Inu8K5VGrlQTUhCvSZ5ZY8DNhwUAzWItaRJ1j7059qdMEBnl"
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
                src="https://utfs.io/f/Inu8K5VGrlQTXXINDtynL0H7zUPOD9meqhIE3GvfTliWaMR2"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="https://utfs.io/f/Inu8K5VGrlQTlTDuzln3kVAEDp4HZ9z1BotubKaiqXYFWPRr"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="https://utfs.io/f/Inu8K5VGrlQTxhwegwMMCt6nA5SPjfWb7z2FLk1EdpwZB0l3"
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
                src="https://utfs.io/f/Inu8K5VGrlQTUYmqnN5ZY8DNhwUAzWItaRJ1j7059qdMEBnl"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="https://utfs.io/f/Inu8K5VGrlQT05lxkgpiaVQf8GZBFKIPxcyDk7eTwpogCOjb"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="https://utfs.io/f/Inu8K5VGrlQTOrjaXG8Zm9JGlpzb6jI8gY34CrMBWxXFev7R"
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
                src="https://utfs.io/f/Inu8K5VGrlQTawiZJZo9qPW62M80QrHJ4VTxSheNitvUfuyg"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="https://utfs.io/f/Inu8K5VGrlQTcrQLJix0SFNlOwpJMsAXQuxZfTIkcz2hHr9V"
                alt="image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[500px] h-[700px] rounded-lg">
              <Image
                src="https://utfs.io/f/Inu8K5VGrlQTEerM8G1mJS1IlzpPZt8Vbi7RMyxkF2cBneXY"
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
              src="https://utfs.io/f/Inu8K5VGrlQTUhCvSZ5ZY8DNhwUAzWItaRJ1j7059qdMEBnl"
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
