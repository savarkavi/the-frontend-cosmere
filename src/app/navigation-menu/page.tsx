"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const opacityVariant: Variants = {
  initial: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const navHeightVariant: Variants = {
  initial: {
    height: 0,
  },
  open: {
    height: "auto",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const bgHeightVariant: Variants = {
  initial: {
    height: 0,
  },
  open: {
    height: "100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const navLinksVariant: Variants = {
  initial: {
    opacity: 0,
    y: "60px",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const blurLinksVariant: Variants = {
  initial: {
    filter: "blur(0px)",
  },
  active: {
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
  inActive: {
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
    },
  },
};

const navLinks = ["Home", "Shop", "About Us", "Lookbook", "Contact"];
const navImages = [
  {
    id: 0,
    src: "https://utfs.io/f/Inu8K5VGrlQTHctIyFEbPg8IFusCc39hAU0vQkBenfZJRWjw",
  },
  {
    id: 1,
    src: "https://utfs.io/f/Inu8K5VGrlQTB1GodXWH32DQm6WT4Vw0iRMPAS9eKvl1BUHG",
  },
  {
    id: 2,
    src: "https://utfs.io/f/Inu8K5VGrlQT6sANCsgPS8m0OovWbKN6pDAq4C5hw7MfGYJa",
  },
  {
    id: 3,
    src: "https://utfs.io/f/Inu8K5VGrlQT9zWn5Ww1DxIqiaHm72gyrfUA5ZSYlwnJbzVL",
  },
  {
    id: 4,
    src: "https://utfs.io/f/Inu8K5VGrlQTWWTZHwccJTu7g2PxeI3jvSZFDApfdzKHw5Ca",
  },
];
const navFooter = [
  { label: "Made By:", text: "Sushant" },
  { label: "Typography:", text: "Google Fonts" },
  { label: "Images:", text: "Freepik, Envato" },
  { label: "Privacy Policy:", text: "Terms & Conditions" },
];

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="w-full h-16 bg-[#f4f0ea] flex justify-between items-center px-4">
        <h2 className="text-lg  uppercase">Sushant</h2>
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.div
            className="flex flex-col"
            initial={{ gap: "8px" }}
            animate={{ gap: isOpen ? 0 : "8px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="w-6 h-[1px] bg-black"
              animate={{ rotate: isOpen ? "45deg" : 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="w-6 h-[1px] bg-black"
              animate={{ rotate: isOpen ? "-45deg" : 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>
          <motion.h2
            variants={opacityVariant}
            animate={isOpen ? "open" : "closed"}
            className="text-lg uppercase absolute ml-9"
          >
            Menu
          </motion.h2>
          <motion.h2
            variants={opacityVariant}
            initial="initial"
            animate={!isOpen ? "open" : "closed"}
            className="text-lg uppercase absolute ml-9"
          >
            Close
          </motion.h2>
        </div>
        <motion.div
          className="flex items-center gap-8"
          variants={opacityVariant}
          animate={isOpen ? "open" : "closed"}
        >
          <h2 className="text-lg  uppercase">Shop</h2>
          <h2 className="text-lg  uppercase">Cart</h2>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={navHeightVariant}
            initial="initial"
            animate="open"
            exit="closed"
            className="w-full bg-[#f4f0ea] overflow-hidden px-4"
          >
            <div className="relative mt-16 mb-24 flex justify-between items-center">
              <motion.div
                variants={navLinksVariant}
                initial="initial"
                animate="open"
                className="flex flex-wrap gap-8 overflow-y-hidden w-[1200px]"
              >
                {navLinks.map((item, i) => (
                  <motion.h2
                    key={i}
                    variants={blurLinksVariant}
                    initial="initial"
                    animate={
                      isActive !== null
                        ? isActive === i
                          ? "active"
                          : "inActive"
                        : "active"
                    }
                    onMouseOver={() => setIsActive(i)}
                    onMouseLeave={() => setIsActive(null)}
                    className="text-8xl uppercase cursor-pointer"
                  >
                    {item}
                  </motion.h2>
                ))}
              </motion.div>
              {isActive !== null && (
                <div className="w-[500px] h-[300px] absolute right-0">
                  <Image
                    src={navImages[isActive].src}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center gap-12 mb-12">
              {navFooter.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <h2 className="uppercase text-gray-500 text-sm">
                    {item.label}
                  </h2>
                  <h2 className="uppercase text-sm">{item.text}</h2>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={bgHeightVariant}
            initial="initial"
            animate="open"
            exit="closed"
            className="w-full h-full bg-black/50"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMenu;
