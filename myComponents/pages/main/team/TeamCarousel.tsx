"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

import TeamCard from "./TeamCard";
import { activeTrainers} from "@/data/trainers";


export default function TeamCarousel({trainers = activeTrainers}) {
  const autoplay = React.useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      breakpoints: {
        "(min-width: 64rem)": {
          stopOnMouseEnter: true,
        },
      },
    }),
  );
  return (
    <Carousel
      opts={{ align: "start", loop: true, dragFree: true }}
      plugins={[autoplay.current]}
      className="transparent"
    >
      <CarouselContent className="py-4">
        {trainers.map((item) => (
          <CarouselItem
            className="basis-1/1 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 md:pl-8 lg:pl-8 xl:pl-8 py-1"
            key={item.id}
          >
            <TeamCard
              slug={item.slug}
              image={item.image}
              name={item.name}
              styles={item.styles}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
