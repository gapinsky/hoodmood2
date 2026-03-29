import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { instructors } from "../data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionContainer from "@/myComponents/common/SectionContainer";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";
import { Badge } from "@/components/ui/badge";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { ChevronRight, Instagram } from "lucide-react";
import { a11y } from "@/public/styles";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    trainerSlug: string;
  }>;
};

export async function generateStaticParams() {
  return instructors.map((trainer) => ({
    trainerSlug: trainer.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { trainerSlug } = await params;
  const trainer = instructors.find((item) => item.id === trainerSlug);

  if (!trainer) {
    return {
      title: "Trener nie został znaleziony",
    };
  }

  return {
    title: `${trainer.name} | ${trainer.role}`,
    description: trainer.description,
  };
}

export default async function TrainerPage({ params }: PageProps) {
  const { trainerSlug } = await params;
  const trainer = instructors.find((item) => item.id === trainerSlug);

  if (!trainer) {
    notFound();
  }

  return (
    <MainWrapper>
      <SectionContainer>
        <div className="space-y-4">
          <span className="inline-flex items-start">
            <Link
              href="/"
              className="inline-flex items-center  w-fit text-sm text-muted-foreground transition hover:text-black dark:hover:text-white"
            >
              Strona główna
            </Link>
            <span>
              <ChevronRight className="h-5 text-muted-foreground" />
            </span>
            <Link
              href="/kadra"
              className="inline-flex items-center w-fit text-sm text-muted-foreground transition hover:text-black dark:hover:text-white"
            >
              Kadra
            </Link>
          </span>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-18   ">
            <div className="relative ">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {trainer.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-square  rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${trainer.name} zdjęcie ${index + 1}`}
                          fill
                          priority={index === 0}
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-4 hover:cursor-pointer" />
                <CarouselNext className="right-4 hover:cursor-pointer" />
              </Carousel>
            </div>

            <div className="flex flex-col justify-between ">
              <div>
                <h1 className=" text-3xl font-anton">{trainer.name}</h1>

                <p className="mt-3 text-base  sm:text-lg">{trainer.role}</p>

                <div className="flex gap-2 ">
                  {trainer.localizations.map((localization, id) => (
                    <p className="mt-2 text-sm " key={id}>
                      {localization}
                    </p>
                  ))}
                </div>

                <p className="mt-8 max-w-2xl text-base leading-8 opacity-70 sm:text-lg">
                  {trainer.description}
                </p>
              </div>

              {trainer.styles?.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-sm  uppercase tracking-wide ">
                    Prowadzone zajęcia
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {trainer.styles.map((item) => (
                      <Badge key={item} variant={"secondary"}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className=" flex flex-wrap gap-3 place-self-start mt-8 xl:place-self-end">
                {trainer.instagram && (
                  <ButtonSecondary href={trainer.instagram} blank={true}>
                    <img
                      width={14}
                      height={14}
                      alt={`instagram logo`}
                      src={`/icons/instagram.svg`}
                      className={cn("dark:invert", a11y)}
                    />{" "}
                    Instagram
                  </ButtonSecondary>
                )}

                <ButtonSecondary href="/kadra">
                  Zobacz całą kadrę
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
