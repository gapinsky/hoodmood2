"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, Wallet } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import type { ClassesOfferType } from "@/data/ofertaData";

export default function OfferCard({
  name, img, description, instructors, experience, minAge, maxAge,
  scheduleSrc, pricingSrc,
}: ClassesOfferType) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const age = minAge !== "" && maxAge !== ""
    ? `${minAge}-${maxAge} lat`
    : minAge !== "" ? `${minAge}+ lat` : maxAge !== "" ? `do ${maxAge} lat` : "Bez limitu wieku";

  return (
    <Card className="group/card h-full justify-start rounded-md border border-foreground/10 bg-foreground/2.5 shadow-none before:hidden">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {!imageLoaded && <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-foreground/5 motion-reduce:animate-none" />}
        <Image
          src={img}
          fill
          alt={name}
          className={`object-cover transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none motion-safe:group-hover/card:scale-[1.035] ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 46vw, 440px"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><User className="size-4" aria-hidden="true" />{age}</span>
          <span className="text-(--brand-700) dark:text-(--brand-400)">{experience}</span>
        </div>
        <h3 className="font-anton text-2xl uppercase leading-tight sm:text-3xl">{name}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
        <div className="mt-auto pt-6">
          <div className="border-t border-foreground/10 py-4">
            <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{name === "MASTER TRAINERS" ? "Master trenerzy" : "Prowadzący"}</p>
            <div className="text-sm leading-6">
              {instructors.length === 0 ? "TBA" : instructors.map((instructor, index) => (
                <span key={`${instructor.name}-${index}`}>
                  <Link href={instructor.slug} className="ui-focus-ring ui-link-subtle rounded-sm after:origin-center after:opacity-60">{instructor.name}</Link>
                  {instructor.suffix}
                  {index < instructors.length - 1 ? (instructor.separatorAfter ?? ", ") : null}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-4">
            <div className="flex flex-wrap gap-4">
              <Link href={scheduleSrc} className="ui-focus-ring inline-flex items-center gap-1.5 rounded-sm py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><CalendarDays className="size-4" aria-hidden="true" />Grafik</Link>
              <Link href={pricingSrc} className="ui-focus-ring inline-flex items-center gap-1.5 rounded-sm py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><Wallet className="size-4" aria-hidden="true" />Cennik</Link>
            </div>
            <ButtonSecondary href="/zapisz-sie">Zapisz się</ButtonSecondary>
          </div>
        </div>
      </div>
    </Card>
  );
}
