"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LinkText = ({ text }: { text: string }) => {
  return (
    <motion.div initial="initial" whileHover="hover">
      <Link
        href="#"
        className="relative text-[10rem] block font-sans overflow-hidden leading-[9rem] tracking-tight font-bold"
      >
        <div>
          {text.split("").map((l, i) => (
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hover: { y: "-100%" },
              }}
              transition={{
                delay: 0.05 * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {text.split("").map((l, i) => (
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{
                delay: 0.05 * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default LinkText;
