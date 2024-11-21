"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const FadeIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -100px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
