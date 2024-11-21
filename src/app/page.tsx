"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const linksContainerVariant: Variants = {
  initial: {
    scale: 0,
    borderRadius: "100%",
  },
  animate: {
    scale: [0, 0.5, 0.5, 1],
    borderRadius: ["100%", "100%", "5%", "5%"],
    rotate: ["0deg", "0deg", "360deg", "360deg"],
    transition: {
      duration: 1,
      delay: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen flex flex-col gap-4 justify-between items-center h-screen py-12">
      <div className="fixed top-0 w-full h-full">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQTyWy2npIgQbf6WLjEuiDPTBxo4CAnX52Nqz7a"
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full flex justify-between z-[99] px-16">
        <h2 className="text-white text-3xl">TFC.</h2>
        <motion.div
          className="bg-white p-3 rounded-lg flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05, rotate: "1.5deg" }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 1, rotate: 0 }}
          onClick={() => setIsOpen(true)}
        >
          <p>Browse Projects</p>
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-1/2 -translate-x-1/2 w-full max-w-[1360px] flex flex-col justify-center items-center gap-2 text-white text-7xl uppercase font-semibold shrink-0 font-serif flex-1"
      >
        <h1>The Frontend</h1>
        <h1>Cosmere</h1>
      </motion.div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="relative w-[500px] h-[500px] rounded-xl bg-white flex flex-col items-center justify-center p-4"
            variants={linksContainerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="absolute top-4 right-4 z-[999] cursor-pointer"
            >
              <RxCross2 className="text-3xl" onClick={() => setIsOpen(false)} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="flex flex-col gap-6 text-lg rounded-lg z-[999]"
            >
              <Link href="/scroll-parallex1">Scroll Parallex 1</Link>
              <Link href="/navigation-menu">Navigation Menu</Link>
              <Link href="/scroll-parallex2">Scroll Parallex 2</Link>
              <Link href="/tinder-swipe-cards">Tinder Swipe Cards</Link>
              <Link href="/navbar-animation">NavBar Animation</Link>
              <Link href="/apple-animation">AppleTV animation</Link>
              <Link href="/reveal-links">Reveal Links</Link>
              <Link href="stagger-box">Stagger animations</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-between w-full px-16 z-[99]">
        <div className="text-white font-serif self-end flex flex-col gap-4">
          <p className="text-4xl uppercase">Welcome to the frontend cosmere</p>
          <p className="max-w-[500px]">
            The frontend cosmere is a web project where I showcase and curate
            animations and effects and stunning visual experiences for Web
            application, all crafted with Framer Motion and Next.js.
          </p>
        </div>
        <p className="text-lg text-white self-end">
          Made by{" "}
          <span className="underline cursor-pointer font-semibold">
            Sushant Sharma
          </span>
        </p>
      </div>
    </div>
  );
}
