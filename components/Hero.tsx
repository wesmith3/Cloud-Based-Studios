import React from "react";
import Image from "next/image";
import Desperado from "../public/CBS.jpg";
import "../app/globals.css";

function Hero() {
  return (
    <div className="relative w-full h-full" id="#home">
      <Image src={Desperado} alt="Desperado" objectFit="cover" />
    </div>
  );
}

export default Hero;
