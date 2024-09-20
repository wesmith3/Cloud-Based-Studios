"use client"
import { Bento } from "@/components/Bento";
import { CardCarousel } from "@/components/CardCarousel";
import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ButtonsCard } from "@/components/ui/tailwindcss-button";
import Image from "next/image";
import 'semantic-ui-css/semantic.min.css'

export default function Home() {
  return (
    <main className="">
      <div className="overflow-auto">
        {/* <Navbar /> */}
       <Hero />
       <CardCarousel />
       <Grid />
       <Bento />
       <ButtonsCard />
       <Footer />
      </div>
    </main>
  );
}
