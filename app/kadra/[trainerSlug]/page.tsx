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
          className="inline-flex items-center text-sm text-neutral-400 transition hover:text-white"
        >
          ← Wróć do kadry
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-18 ">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <Carousel className="w-full">
                <CarouselContent>
                  {trainer.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-square  overflow-hidden">
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

                <CarouselPrevious className="left-4 border-white/10 bg-black/40 text-white backdrop-blur hover:bg-black/60" />
                <CarouselNext className="right-4 border-white/10 bg-black/40 text-white backdrop-blur hover:bg-black/60" />
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col justify-start ">
            <h1 className=" text-3xl ">{trainer.name}</h1>

            <p className="mt-3 text-base text-neutral-400 sm:text-lg">
              {trainer.role}
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              {trainer.localizations}
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-200 sm:text-lg">
              {trainer.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {trainer.name && (
                <a
                  href={"www.youtube.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Instagram
                </a>
              )}

              <Link
                href="/kadra"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                Zobacz całą kadrę
              </Link>
            </div>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
