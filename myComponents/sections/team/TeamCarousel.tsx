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
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";

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
            <Card className="overflow-hidden rounded-xl focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:ring-offset-2">
              <Link
                href={`/kadra/${item.id}`}
                className="block h-full w-full outline-none"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    quality={75}
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                    priority={false}
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between  w-full items-start">
                    <CardTitle className="font-anton font-normal ">
                      {item.name}
                    </CardTitle>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardDescription className="flex gap-2">
                    {item.styles.map((el, id) => (
                      <p key={id} className="text-sm">
                        {el}
                      </p>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardFooter></CardFooter>
              </Link>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
