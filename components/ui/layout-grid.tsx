import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  src: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
            <ImageComponent card={card} />
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      className="relative w-full h-full"
    >
      <Image
        src={card.src}
        layout="fill"
        objectFit="cover"
        className={cn(
          "absolute inset-0 transition duration-200"
        )}
        alt="thumbnail"
      />
    </motion.div>
  );
};
