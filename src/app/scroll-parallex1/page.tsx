"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";
import { FiMapPin } from "react-icons/fi";

const ScrollParallexPage = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.2]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.4, 0.7], [0.8, 1]);
  const clip1 = useTransform(scrollYProgress, [0, 0.75], [25, 0]);
  const clip2 = useTransform(scrollYProgress, [0, 0.75], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <div className="bg-zinc-950">
      <ReactLenis root options={{ lerp: 0.08 }}>
        <div className="h-[450vh]">
          <motion.div className="h-screen flex justify-center items-center sticky top-0 overflow-hidden">
            <motion.video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              style={{
                opacity,
                clipPath,
              }}
            >
              <source
                src="https://utfs.io/f/Inu8K5VGrlQTYqsrYGh3TEJMkSGoK2m3ZlIvfPbrdtn75zyg"
                type="video/mp4"
              />
              Your browser does not support the video media.
            </motion.video>
            <motion.div
              className="w-full text-center flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ opacity: textOpacity }}
            >
              <motion.h1
                className="text-8xl font-bold font-serif text-white z-[999]"
                style={{ scale: textScale }}
              >
                Welcome to the Space
              </motion.h1>
            </motion.div>
          </motion.div>
          <div className="relative flex justify-center">
            <ParallexImage
              src="https://utfs.io/f/Inu8K5VGrlQT49wdqL40yGdtMFk58LbcVphYSlvDuK71CWQj"
              className="ml-[200px] rotate-12"
              start={200}
              end={-200}
            />
            <ParallexImage
              src="https://utfs.io/f/Inu8K5VGrlQTyK8KGxIgQbf6WLjEuiDPTBxo4CAnX52Nqz7a"
              className="ml-[100px] -rotate-12"
              start={100}
              end={-100}
            />
            <ParallexImage
              src="https://utfs.io/f/Inu8K5VGrlQTXcjd6rtynL0H7zUPOD9meqhIE3GvfTliWaMR"
              className="ml-[200px] rotate-12"
              start={500}
              end={-500}
            />
            <ParallexImage
              src="https://utfs.io/f/Inu8K5VGrlQTkgpGskBRqS9QmcJs2Vz7Pr1w8FLUWjZT60BK"
              className="-ml-[600px] rotate-6"
              start={450}
              end={-450}
            />
          </div>
        </div>
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const ParallexImage = ({
  src,
  className,
  start,
  end,
}: {
  src: string;
  className?: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px)`;

  return (
    <motion.div
      className="relative w-[500px] h-[500px]"
      ref={ref}
      style={{ transform, opacity }}
    >
      <Image
        src={src}
        alt="image"
        fill
        className={`object-contain ${className}`}
      />
    </motion.div>
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>

      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />

      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />

      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />

      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />

      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />

      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />

      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>

        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>

      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>

        <FiMapPin />
      </div>
    </motion.div>
  );
};

export default ScrollParallexPage;
