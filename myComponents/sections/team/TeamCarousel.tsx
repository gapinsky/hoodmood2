"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

import TeamCard from "./TeamCard";
import { Trainer } from "@/app/kadra/data";

type Props = {
  instructors: Trainer[];
};

export default function TeamCarousel({ instructors }: Props) {
  const autoplay = React.useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    }),
  );
  return (
    <Carousel
      opts={{ align: "start", loop: true, dragFree: true }}
      plugins={[autoplay.current]}
    >
      <CarouselContent>
        {instructors.map((item) => (
          <CarouselItem
            className="basis-1/1 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 md:pl-8 lg:pl-8 xl:pl-8 py-1"
            key={item.id}
          >
            <TeamCard
              id={item.id}
              images={item.images}
              name={item.name}
              role={item.role}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
