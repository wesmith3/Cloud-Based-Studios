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
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div id="projects" className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-white/[.75] dark:text-neutral-200 font-serif">
        OUR
        <span className="text-dustyBrown md:text-5xl font-French font-bold">Projects</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    id: 1,
    category: "Thriller",
    title: "Siri Miri.",
    src: woods,
  },
  {
    id: 2,
    category: "Action",
    title: "Mirage.",
    src: dune,
  },
  {
    id: 3,
    category: "SciFi/Horror",
    title: "Alone.",
    src: astronaut,
  },

  {
    id: 4,
    category: "Drama/Thriller",
    title: "Last Night on Earth.",
    src: EndOfTheWorld,
  },
  {
    id: 5,
    category: "Horror/Slasher",
    title: "Pizza Purgatory.",
    src: pizza,
  },
  {
    id: 6,
    category: "Western/Drama",
    title: "Desperado.",
    src: desperado,
  },
];
