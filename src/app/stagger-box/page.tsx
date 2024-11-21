"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const StaggerBoxPage = () => {
  const rows = Array(16).fill(null);
  const columns = Array(35).fill(null);

  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        scale: 0.1,
        y: 30,
        duration: 2,
        backgroundColor: "#0a5d00",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: "center",
          grid: "auto",
        },
        ease: "back.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div ref={containerRef} className="grid gap-4">
        {rows.map((_, i) => (
          <div key={i} className="flex gap-4">
            {columns.map((_, i) => (
              <div
                key={i}
                className="bg-green-500 w-8 h-8 rounded-lg box"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaggerBoxPage;
