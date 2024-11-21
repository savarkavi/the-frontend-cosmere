"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    src: "https://utfs.io/f/Inu8K5VGrlQTNlOdh04wfWqhlAMP4Ft50de8rvizYnmR3EKx",
  },
  {
    id: 2,
    src: "https://utfs.io/f/Inu8K5VGrlQTjmwtPokzydNB5owvnfY9pX1L67PJDbR8UOas",
  },
  {
    id: 3,
    src: "https://utfs.io/f/Inu8K5VGrlQTtNISWK9nIlw73gd8jMzcLO56FUPTDuf2p1vB",
  },
  {
    id: 4,
    src: "https://utfs.io/f/Inu8K5VGrlQTInd1RDGrlQTVd3GsXRWhogqLuct4k92IHNwP",
  },
  {
    id: 5,
    src: "https://utfs.io/f/Inu8K5VGrlQTEtHDuO1mJS1IlzpPZt8Vbi7RMyxkF2cBneXY",
  },
  {
    id: 6,
    src: "https://utfs.io/f/Inu8K5VGrlQT1KsrpaN0asJBe6qchObnG9tSDzw3fFWrEo4g",
  },
  {
    id: 7,
    src: "https://utfs.io/f/Inu8K5VGrlQTxdQnD5MMCt6nA5SPjfWb7z2FLk1EdpwZB0l3",
  },
  {
    id: 8,
    src: "https://utfs.io/f/Inu8K5VGrlQTGoY3qZlfjLg7WwVxRMuiCN4S52vZhano8JAD",
  },
];

type Card = {
  id: number;
  src: string;
};

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(data);

  const onReset = () => {
    setCards(data);
  };

  return (
    <div className="h-screen w-full bg-rose-100 flex flex-col items-center">
      <h1 className="text-4xl mt-16 mb-12">
        Drag to Like/Dislike the movie Cards
      </h1>
      <button className="bg-white p-2 rounded-lg shadow-md" onClick={onReset}>
        reset
      </button>
      <div className="flex justify-between items-center w-full max-w-[1360px] mx-auto h-full">
        <motion.div className="text-red-500 text-8xl">╳</motion.div>
        <div className="grid place-items-center">
          {cards.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              id={item.id}
              setCards={setCards}
              cards={cards}
            />
          ))}
        </div>
        <motion.div className="text-green-500 text-8xl">✓</motion.div>
      </div>
    </div>
  );
};

const Card = ({
  src,
  id,
  setCards,
  cards,
}: {
  src: string;
  id: number;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-250, 0, 250], [0, 1, 0]);
  const rotateMap = useTransform(x, [-250, 250], [-15, 15]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 5 : -5;

    return rotateMap.get() + offset;
  });

  const onDragEnd = () => {
    if (Math.abs(x.get()) > 75) {
      setCards((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <motion.div
      className="relative w-[400px] h-[600px] rounded-lg hover:cursor-grab active:cursor-grabbing shadow-lg"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s",
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={onDragEnd}
    >
      <Image
        src={src}
        alt="image"
        fill
        className="object-cover rounded-lg"
        draggable="false"
      />
    </motion.div>
  );
};

export default SwipeCards;
