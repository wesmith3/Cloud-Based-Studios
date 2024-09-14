"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import desperado from "../public/projects/desperado.jpeg"
import dune from "../public/projects/dune.jpg"
import EndOfTheWorld from "../public/projects/EndoftheWorld.jpg"
import astronaut from "../public/projects/astronaut.jpg"
import woods from "../public/projects/overwoods.jpg"
import pizza from "../public/projects/pizza.jpg"

export function CardCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white/[.75] dark:text-neutral-200 font-serif">
        Our
        <span className="text-dustyBrown font-French font-bold">Projects</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src={test}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    id: 1,
    category: "Thriller",
    title: "Siri Miri.",
    src: woods,
    content: <DummyContent />,
  },
  {
    id: 2,
    category: "Action",
    title: "Mirage.",
    src: dune,
    content: <DummyContent />,
  },
  {
    id: 3,
    category: "SciFi/Horror",
    title: "Alone.",
    src: astronaut,
    content: <DummyContent />,
  },

  {
    id: 4,
    category: "Drama/Thriller",
    title: "Last Night on Earth.",
    src: EndOfTheWorld,
    content: <DummyContent />,
  },
  {
    id: 5,
    category: "Horror/Slasher",
    title: "Pizza Purgatory.",
    src: pizza,
    content: <DummyContent />,
  },
  {
    id: 6,
    category: "Western/Drama",
    title: "Desperado.",
    src: desperado,
    content: <DummyContent />,
  },
];
