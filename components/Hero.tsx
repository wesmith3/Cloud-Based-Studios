import React from "react";
import Image from "next/image";
import Desperado from "../public/clouds.jpeg";
import "../app/globals.css";

function Hero() {
  return (
    <div className="relative w-full h-full">
      <Image src={Desperado} alt="Desperado" objectFit="cover" />

      <div className="absolute top-96 lg:top-1/2 sm:left-1/2 left-1/3 right-0 flex justify-center">
        <p className="text-center text-black tracking-widest text-4xl font-Thin">
          Locally Crafted
        </p>
      </div>
      <div className="absolute inset-0 left-1/4 flex items-center justify-center">

      <h1 className="text-8xl lg:text-10xl font-French font-extrabold text-black/[.75]">
        <span className="text-white/[.45]">CLOUD BASED</span> STUDIOS
      </h1>
      </div>

      {/* <h1 className="absolute inset-0 flex items-center justify-center text-10xl font-serif font-extrabold z-10 text-black/[.05]">
        CREATIVITY
      </h1> */}
    </div>
  );
}

export default Hero;
