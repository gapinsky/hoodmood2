"use client";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import React from "react";
import { Trainer } from "./data";

type Props = {
  instructors: Trainer[];
};

export default function TeamCarousel({ instructors }: Props) {
  const autoplay = React.useRef(
    AutoScroll({
      speed: 3,
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
            className="basis-1/1 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 md:pl-8 lg:pl-8 xl:pl-8"
            key={item.id}
          >
            {/* <HoverCard
                title={item.name}
                description={item.role}
                img={item.img}
                hoverImg={item.hoverImg}
                headerStyles="text-2xl"
              /> */}
            <div className="group relative aspect-square w-full overflow-hidden rounded-xl shadow-xl ">
              <Link href={`/kadra/${item.id}`}>
                <Image
                  quality={75}
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover  aspect-square transition-transform duration-300 ease-out group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/50  " />

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl">{item.name}</h3>
                  <div className="flex gap-4">
                    {item.styles.map((el, id) => (
                      <p key={id} className="mt-2 text-sm opacity-90">
                        {el}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
