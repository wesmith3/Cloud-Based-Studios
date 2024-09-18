"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import chelan from "../public/test.jpg"

export function Grid() {
  return (
    <div className="h-screen py-1 w-full bg-black">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-2xl font-bold text-white/[.75] dark:text-neutral-200 font-serif">
        <span className="text-dustyBrown md:text-5xl font-French font-bold">Image</span>
        GALLERY
      </h2>

      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    src: "/chelan.jpg"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    src: "/demo1.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    src: "/demo2.jpeg",  
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    src: "/demo3.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    src: "/demo7.jpeg",  
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    src: "/demo5.jpeg",  
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    src: "/demo6.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    src: "/demo4.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    src: "/demo8.jpeg",  
  },
];
