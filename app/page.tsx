import { Bento } from "@/components/Bento";
import { CardCarousel } from "@/components/CardCarousel";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="overflow-auto">
        <Navbar />
       <Hero />
       <CardCarousel />
       <Grid />
       <Bento />
      </div>
    </main>
  );
}
