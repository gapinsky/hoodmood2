"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, Wallet } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { classLevelLabels, type ClassOffer, type OfferInstructor } from "./types";

function InstructorList({ instructors }: { instructors: OfferInstructor[] }) {
  return instructors.map((instructor, index) => (
    <span key={instructor.id}>
      {index > 0 && ", "}
      {instructor.href ? (
        <Link href={instructor.href} className="ui-focus-ring ui-link-subtle rounded-sm after:origin-center after:opacity-60">{instructor.name}</Link>
      ) : instructor.name}
    </span>
  ));
}

export default function OfferCard({
  name, image, logo, description, instructors, specialInstructors, level, minAge, maxAge,
  scheduleSrc, pricingSrc, enrollmentEnabled, ageLabel, priceLabel, enrollmentLabel,
}: ClassOffer) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const age = ageLabel ?? (maxAge === null ? `${minAge}+ lat` : `${minAge}-${maxAge} lat`);

  return (
    <Card className="group/card h-full justify-start rounded-md border border-foreground/10 bg-foreground/2.5 shadow-none before:hidden">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {!imageLoaded && <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-foreground/5 motion-reduce:animate-none" />}
        <Image
          src={image}
          fill
          alt={name}
          className={`object-cover transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none motion-safe:group-hover/card:scale-[1.035] ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 46vw, 440px"
        />
        {logo && (
          <div className="absolute left-0 top-0 inline-flex h-14 w-28 -rotate-8 items-center justify-center opacity-35 transition-[transform,opacity] duration-700 group-hover/card:rotate-0 group-hover/card:opacity-100 motion-reduce:transition-none sm:h-16 sm:w-32">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(max-width: 639px) 112px, 128px"
              className="object-contain"
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><User className="size-4" aria-hidden="true" />{age}</span>
          <span className="text-(--brand-700) dark:text-(--brand-400)">{classLevelLabels[level]}</span>
        </div>
        <h3 className="font-anton text-2xl uppercase leading-tight sm:text-3xl">{name}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
        {priceLabel && <p className="mt-3 text-base font-semibold">{priceLabel}</p>}
        <div className="mt-auto pt-6">
          <div className="border-t border-foreground/10 py-4">
            <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{name === "MASTER TRAINERS" ? "Master trenerzy" : "Prowadzący"}</p>
            <div className="text-sm leading-6">
              {instructors.length === 0 ? "Prowadzący do ustalenia" : <InstructorList instructors={instructors} />}
            </div>
            {specialInstructors.length > 0 && (
              <div className="mt-3 text-sm leading-6">
                <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Gościnnie</p>
                <InstructorList instructors={specialInstructors} />
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-4">
            <div className="flex flex-wrap gap-4">
              {scheduleSrc && <Link href={scheduleSrc} className="ui-focus-ring inline-flex items-center gap-1.5 rounded-sm py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><CalendarDays className="size-4" aria-hidden="true" />Grafik</Link>}
              <Link href={pricingSrc} className="ui-focus-ring inline-flex items-center gap-1.5 rounded-sm py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><Wallet className="size-4" aria-hidden="true" />Cennik</Link>
            </div>
            {enrollmentEnabled ? (
              <ButtonSecondary href="/zapisz-sie">{enrollmentLabel ?? "Zapisz się"}</ButtonSecondary>
            ) : (
              <span className="text-sm text-muted-foreground">Zapisy zamknięte</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
