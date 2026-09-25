import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { szczecinekSeo, szczecinekSocialImage } from "@/lib/seo-szczecinek";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { activeTrainers } from "@/data/trainers";

import TrainerGallery from "@/myComponents/team/TrainerGallery";
import SectionContainer from "@/myComponents/common/SectionContainer";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import ButtonPrimary from "@/myComponents/buttons/ButtonPrimary";

type PageProps = {
  params: Promise<{
    trainerSlug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return activeTrainers.map((trainer) => ({
    trainerSlug: trainer.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { trainerSlug } = await params;
  const trainer = activeTrainers.find((item) => item.slug === trainerSlug);

  if (!trainer) notFound();

  if (trainer.id === "julia-kaczmarzyk") return createMetadata({ ...szczecinekSeo.trainer, socialImage: szczecinekSocialImage });
  return createMetadata({
    path: `/kadra/${trainer.slug}`,
    title: `${trainer.name} – ${trainer.role}`,
    description: trainer.bio,
  });
}

export default async function TrainerPage({ params }: PageProps) {
  const { trainerSlug } = await params;
  const trainer = activeTrainers.find((item) => item.slug === trainerSlug);

  if (!trainer) {
    notFound();
  }

  return (
    <MainWrapper>
      <PageStructuredData metadata={await generateMetadata({ params })} trainer={trainer} />
      <SectionContainer className="overflow-visible">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-5">
            <Link
              href="/kadra"
              className="ui-focus-ring group inline-flex min-h-10 items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform motion-safe:group-hover:-translate-x-1" aria-hidden="true" />
              Powrót
            </Link>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {trainer.id === "julia-kaczmarzyk" ? "SAPIK Szczecinek" : trainer.specialGuest ? "Special guest" : "Core crew"}
              <span className="mx-3 text-foreground/20" aria-hidden="true">/</span>
              Hoodmood
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 xl:gap-20">
            <TrainerGallery trainer={trainer} />

            <div className="min-w-0 space-y-8 sm:space-y-10">
              <header>
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--brand-700) dark:text-(--brand-400)">
                  <span className="h-px w-8 bg-current" aria-hidden="true" />
                  {trainer.id === "julia-kaczmarzyk" ? "SAPIK Szczecinek" : trainer.specialGuest ? "Gość specjalny" : "Kadra Hoodmood"}
                </p>
                <h1 className="font-anton text-5xl uppercase leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                  {trainer.name}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{trainer.role}</p>
              </header>

              <div className="space-y-6 border-y border-foreground/10 py-6">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Lokalizacja zajęć</h2>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {trainer.localizations.map((localization) => (
                      <li key={localization} className="flex items-center gap-2 text-sm">
                        <MapPin className="size-4 text-(--brand-600) dark:text-(--brand-400)" aria-hidden="true" />
                        {localization}
                      </li>
                    ))}
                  </ul>
                </div>
                {trainer.styles.length > 0 && (
                  <div>
                    <h2 className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Prowadzone zajęcia</h2>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {trainer.styles.map((style) => (
                        <li key={style} className="rounded-md border border-foreground/10 bg-foreground/2.5 px-3 py-2 text-sm leading-5">
                          {style}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <section aria-labelledby="trainer-story" className="space-y-4">
                <h2 id="trainer-story" className="font-anton text-2xl uppercase sm:text-3xl">Poznajmy się</h2>
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  {trainer.bio.split(/\n+/).filter((paragraph) => paragraph.trim()).map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </section>

              <div className="flex flex-wrap items-center gap-4 border-t border-foreground/10 pt-6">
                <ButtonPrimary href="/kontakt">
                  Zapytaj o zajęcia <ArrowUpRight aria-hidden="true" />
                </ButtonPrimary>
                <Link href="/kadra" className="ui-focus-ring rounded-sm px-1 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Poznaj resztę ekipy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
