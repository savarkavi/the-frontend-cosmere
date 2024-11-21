"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";

const navbarColumnVariant: Variants = {
  initial: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  animate: (i: number) => ({
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: (Math.random() * i) / 100,
    },
  }),
  exit: (i: number) => ({
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: (Math.random() * i) / 100,
    },
  }),
};

const navLinksVariant: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

const NavbarAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="w-full h-screen relative flex flex-col items-center"
        style={{
          backgroundImage:
            "url('https://utfs.io/f/Inu8K5VGrlQTzCMCgzjFWrtg34YhkjT0mbFcA2KfIaDeM7GO')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[1360px] flex justify-between py-8 fixed z-[999]">
          <h2 className="text-white text-3xl uppercase">Movie.</h2>
          <motion.div
            animate={{ gap: isOpen ? 0 : "8px" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <motion.div
              animate={{ rotate: isOpen ? "45deg" : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1px] bg-white"
            ></motion.div>
            <motion.div
              animate={{ rotate: isOpen ? "-45deg" : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-[1px] bg-white"
            ></motion.div>
          </motion.div>
        </div>
        <div className="font-serif w-[1360px] text-white flex flex-col gap-4 mt-[375px]">
          <h1 className="text-7xl font-bold uppercase">
            in the mood
            <br /> for love
          </h1>
          <p className="text-lg uppercase">Wong Kar Wai Hong Kong, 2000</p>
          <p className="w-[600px]">
            Hong Kong, 1962. Brushed hands and stolen glances trigger
            earthquakes of yearning along the crimson corridors of Wong Kar
            Wai’s swooning, melancholy masterpiece of suspended love. With a
            soundtrack by Shigeru Umebayashi to die for, one of cinema’s
            greatest romances returns in a dazzling restoration.
          </p>
          <div className="relative w-[500px] mt-12">
            <input
              className="p-3 rounded-xl w-full"
              placeholder="sign up for more updates"
            />
            <button className="bg-blue-500 p-3 text-white rounded-r-xl absolute right-0 top-0">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? <Navbar /> : null}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-screen h-screen fixed top-0 z-[99] flex justify-center">
      <div className="w-full h-full grid grid-cols-20">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((_, i) => (
          <motion.div
            variants={navbarColumnVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={i}
            key={i}
            className="bg-black"
          ></motion.div>
        ))}
      </div>
      <div className="flex flex-col absolute top-0 w-[1360px] mt-[250px] overflow-hidden">
        <div className="overflow-hidden">
          <motion.h2
            variants={navLinksVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-9xl uppercase font-bold text-white"
          >
            Work
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            variants={navLinksVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-9xl uppercase font-bold text-white"
          >
            Art
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            variants={navLinksVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-9xl uppercase font-bold text-white"
          >
            Studio
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            variants={navLinksVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-9xl uppercase font-bold text-white"
          >
            About
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default NavbarAnimation;
