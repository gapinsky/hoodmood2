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
        <Link
          href="/kadra"
          className="inline-flex items-center w-fit text-sm text-muted-foreground transition hover:text-black dark:hover:text-white"
        >
          ← Wróć do kadry
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-18 ">
          <div className="relative">
            <div className="">
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

                <CarouselPrevious className="left-4 bg-black/20 text-white hover:text-white hover:cursor-pointer  dark:bg-black/20   backdrop-blur-md hover:bg-black/30 dark:hover:bg-black/30" />
                <CarouselNext className="right-4 bg-black/20 text-white hover:text-white hover:cursor-pointer  dark:bg-black/20  backdrop-blur-md hover:bg-black/30 dark:hover:bg-black/30" />
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            <div>
              <h1 className=" text-3xl ">{trainer.name}</h1>

              <p className="mt-3 text-base text-neutral-400 sm:text-lg">
                {trainer.role}
              </p>

              <div className="flex gap-2">
                {trainer.localizations.map((localization, id) => (
                  <p className="mt-2 text-sm text-neutral-500" key={id}>
                    {localization}
                  </p>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {trainer.description}
              </p>
            </div>

            {trainer.styles?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm  uppercase tracking-wide text-muted-foreground">
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

            <div className="mt-10 flex flex-wrap gap-3 place-self-end ">
              {/* {trainer.name && (
                <a
                  href={"www.youtube.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Instagram
                </a>
              )} */}

              <ButtonSecondary href="/kadra">Zobacz całą kadrę</ButtonSecondary>
            </div>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
