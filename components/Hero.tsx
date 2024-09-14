import React from "react";
import Image from "next/image";
import Desperado from "../public/projects/desperado.jpeg";
import "../app/globals.css";

function Hero() {
  return (
    <div className="relative w-full h-full">
      <Image src={Desperado} alt="Desperado" objectFit="cover" />

      <div className="absolute top-64 left-0 right-0 flex justify-center">
        <p className="text-center text-black tracking-widest text-4xl font-Thin">
          A Film By Wesley Smith
        </p>
      </div>

      <h1 className="absolute inset-0 flex items-center justify-center text-10xl font-serif font-extrabold text-dustyBrown">
        DESPERADO
      </h1>

      <h1 className="absolute inset-0 flex items-center justify-center text-18xl font-serif font-extrabold z-10 text-black/[.05]">
        MOVING
      </h1>
    </div>
  );
}

export default Hero;
