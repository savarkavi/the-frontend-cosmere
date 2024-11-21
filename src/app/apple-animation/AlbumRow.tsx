import Image from "next/image";
import { useMotionValue, motion, animate } from "framer-motion";
import useMeasure from "react-use-measure";
import React, { useEffect } from "react";

const AlbumRow = ({ rowTwo }: { rowTwo?: boolean }) => {
  const xTranslate1 = useMotionValue(0);
  const xTranslate2 = useMotionValue(0);

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    const finalPosition = -width - 20;

    animate(xTranslate1, finalPosition, {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    animate(xTranslate2, finalPosition, {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslate1, xTranslate2, width]);

  return (
    <motion.div
      ref={ref}
      style={rowTwo ? { x: xTranslate1 } : { x: xTranslate2 }}
      className={`flex gap-6 ${rowTwo && "flex-row-reverse"}`}
    >
      <div className="relative w-[300px] overflow-hidden h-[200px]">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQT0H4w5piaVQf8GZBFKIPxcyDk7eTwpogCOjbX"
          alt="album cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[300px] overflow-hidden h-[200px]">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQT5Q4E55LsNXHTAj3Wi64COYPrpKwhZRoBSbId"
          alt="album cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[300px] overflow-hidden h-[200px]">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQTHvdlb7EbPg8IFusCc39hAU0vQkBenfZJRWjw"
          alt="album cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[300px] overflow-hidden h-[200px]">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQTYXPNv13TEJMkSGoK2m3ZlIvfPbrdtn75zyga"
          alt="album cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[300px] overflow-hidden h-[200px]">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQTFGmyszDLzUhs5n4p0SwiPguKdJefRIary9bB"
          alt="album cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[300px] overflow-hidden h-[200px]">
        <Image
          src="https://utfs.io/f/Inu8K5VGrlQTiH6YpWzTKJd7DwOhnNgCBqXakZ4copMbx6VE"
          alt="album cover"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default AlbumRow;
