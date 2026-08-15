"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  User,
  Wallet,
} from "lucide-react";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import Link from "next/link";
import { ClassesOfferType } from "@/data/ofertaData";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";
import { useState } from "react";

export default function OfferCard({
  name,
  img,
  description,
  instructors,
  experience,
  minAge,
  maxAge,
  scheduleSrc,
  pricingSrc,
}: ClassesOfferType) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`group/card h-full ${cardLiftHoverStyles}`}>
    <Card className="flex h-full flex-col overflow-hidden border-0 focus-within:ring-2 focus-within:ring-[var(--brand-500)] focus-within:ring-offset-2">
      <div className="relative aspect-video overflow-hidden">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-black/[0.08] transition-opacity duration-500 dark:bg-white/[0.08] ${
            imageLoaded ? "pointer-events-none opacity-0" : "animate-pulse opacity-100"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/18 via-transparent to-white/12 opacity-80 transition-opacity duration-300 group-hover/card:opacity-100" />
        <Image
          src={img}
          fill
          alt={name}
          className={`transform-gpu object-cover object-center will-change-transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.03] ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="mt-auto">
        <div className="mb-2 grid grid-cols-3  gap-4 p-6 text-muted-foreground  ">
        <div className="flex flex-row  gap-1 text-sm col-span-3 mb-2">
          <p className="font-semibold text-black dark:text-white">
            Stopień zaawansowania:
          </p>
          <span>{experience}</span>
        </div>
        <span className="inline-flex items-end gap-2 text-sm">
          <User className="w-5 text-black dark:text-white" />
          {minAge !== "" && maxAge !== ""
            ? `${minAge}-${maxAge} lat`
            : minAge !== ""
              ? `${minAge}+ lat`
              : maxAge !== ""
                ? `do ${maxAge} lat`
                : "bez limitu"}
        </span>

        <Link
          href={scheduleSrc}
          className="group/link ui-focus-ring ui-link-subtle inline-flex items-end  rounded-sm text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <CalendarDays className="ui-link-subtle-icon w-5 text-black/78 dark:text-white/78" />
          Grafik
        </Link>
        <Link
          href={pricingSrc}
          className="group/link ui-focus-ring ui-link-subtle inline-flex items-end  rounded-sm text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <Wallet className="ui-link-subtle-icon w-5 text-black/78 dark:text-white/78" />
          Cennik
        </Link>
        </div>
        <CardFooter className="flex-row items-end gap-2">
          <div className="min-h-12 w-full">
            <p className="text-sm   font-semibold leading-none mb-1">
              {name === "MASTER TRAINERS"
                ? "Master trenerzy:"
                : instructors.length <= 1
                  ? "Instruktor:"
                  : "Instruktorzy:"}
            </p>
            <div>
              {instructors.length === 0 ? (
                <span className="text-sm">TBA</span>
              ) : (
                instructors.map((instructor, index) => (
                  <span key={instructor.slug}>
                    <Link
                      href={instructor.slug}
                      className="group/link ui-focus-ring ui-link-subtle text-sm rounded-sm text-start  focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      {instructor.name}
                    </Link>
                    {instructor.suffix}
                    {index < instructors.length - 1
                      ? (instructor.separatorAfter ?? ", ")
                      : null}
                  </span>
                ))
              )}
            </div>
          </div>
          <ButtonPrimary href="/zapisz-sie">Zapisz się</ButtonPrimary>
        </CardFooter>
      </div>
    </Card>
    </div>
  );
}
