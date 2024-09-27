"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Grid() {
  return (
    <div className="h-screen py-1 w-full bg-white" id="#portfolio">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-2xl font-bold text-black/[.75] dark:text-neutral-200 font-serif">
        <span className="text-dustyBrown md:text-5xl font-French font-bold">Image</span>
        GALLERY
      </h2>

      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-1",
    src: "/chelan.jpg"
  },
  {
    id: 2,
    className: "col-span-1",
    src: "/demo1.jpeg",
  },
  {
    id: 3,
    className: "col-span-1",
    src: "/demo2.jpeg",  
  },
  {
    id: 4,
    className: "md:col-span-1",
    src: "/demo3.jpeg",
  },
  {
    id: 3,
    className: "col-span-1",
    src: "/demo7.jpeg",  
  },
  {
    id: 4,
    className: "md:col-span-1",
    src: "/demo5.jpeg",  
  },
  {
    id: 4,
    className: "md:col-span-1",
    src: "/demo6.jpeg",
  },
  {
    id: 3,
    className: "col-span-1",
    src: "/demo4.jpeg",
  },
  {
    id: 4,
    className: "md:col-span-1",
    src: "/demo8.jpeg",  
  },
];
