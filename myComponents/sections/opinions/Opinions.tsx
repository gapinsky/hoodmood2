"use client";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import Link from "next/link";
import { data, testimonials } from "./data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
export default function Opinions() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem className="basis-1/3" key={testimonial.id}>
              <Card>
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
      <Link href="/oferta/koszalin">Zobacz pełną ofertę</Link>
    </SectionContainer>
  );
}
