import { CardCarousel } from "@/components/CardCarousel";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
       <Hero />
       <CardCarousel />
      </div>
    </main>
  );
}
