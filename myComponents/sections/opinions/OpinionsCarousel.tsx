"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";
import React from "react";
import { Testimonial } from "./data";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";

type Props = {
  testimonials: Testimonial[];
};

export default function OpinionsCarousel({ testimonials }: Props) {
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
      <CarouselContent className="py-1">
        {testimonials.map((testimonial) => (
          <CarouselItem
            className="basis-1/1 md:basis-1/2 lg:basis-1/3 pointer-events-none"
            key={testimonial.id}
          >
            <Card className={`pointer-events-auto ${cardLiftHoverStyles}`}>
              <CardHeader>
                <div className="flex text-transparent">
                  <Star className="fill-(--brand-700)" />
                  <Star className="fill-(--brand-700)" />
                  <Star className="fill-(--brand-700)" />
                  <Star className="fill-(--brand-700)" />
                  <Star className="fill-(--brand-700)" />
                </div>
              </CardHeader>
              <CardContent>
                <p>{testimonial.text}</p>
              </CardContent>
              <CardFooter>
                <CardTitle className="flex items-end  gap-2">
                  <Avatar>
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    {testimonial.author}
                    <CardDescription>
                      {testimonial.relativeDate}
                    </CardDescription>
                  </div>
                </CardTitle>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
