import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCamera,
  IconMicrophone,
  IconDeviceDesktop,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "semantic-ui-react";

export function Bento() {
  return (
    <div className="bg-white pt-36 pb-20" id="#services">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-white/[.75] dark:text-neutral-200 font-serif">
        OUR
        <span className="text-dustyBrown md:text-5xl font-French font-bold">Services</span>
      </h2>

      <BentoGrid className="max-w-6xl mx-auto bg-black">
        {items.map((item, i) => (
          <BentoGridItem
            key={item.title}  // Changed from index to title for better key uniqueness
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <div className="justify-center items-center">
        <Button className="bg-white relative"/>
      </div>

    </div>
  );
}

const ImageBg = ({ src }: { src: string }) => (
  <div className="relative w-full h-1 min-h-[15rem] rounded-xl overflow-hidden bg-black">
    <Image
      src={src}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
  </div>
);

const items = [
  {
    title: "Video Productions",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <ImageBg src="/services/Video.jpg" />,
    icon: <IconVideo className="h-8 w-4 text-neutral-500" />,
  },
  {
    title: "Podcast Productions",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <ImageBg src="/services/Podcast.jpg" />,
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Website Creation",
    description: "Understand the impact of effective communication in our lives.",
    header: <ImageBg src="/services/Website.jpg" />,
    icon: <IconDeviceDesktop className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Photography Sessions",
    description: "Dive into the transformative power of technology.",
    header: <ImageBg src="/services/Photo.jpg" />,
    icon: <IconCamera className="h-4 w-4 text-neutral-500" />,
  },
];
