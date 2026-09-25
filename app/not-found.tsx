import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import ButtonPrimary from "@/myComponents/buttons/ButtonPrimary";
import ButtonSecondary from "@/myComponents/buttons/ButtonSecondary";
import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";

const destinations = [
  { href: "/oferta/koszalin", title: "Znajdź swoje zajęcia", description: "Taniec, akrobatyka i ruch w Twoim stylu." },
  { href: "/grafik/koszalin", title: "Sprawdź grafik", description: "Zobacz, kiedy spotykamy się na sali." },
  { href: "/kontakt", title: "Porozmawiajmy", description: "Pomożemy Ci znaleźć właściwy kierunek." },
];

export default function NotFound() {
  return (
    <MainWrapper>
      <SectionContainer>
        <div className="grid items-center gap-8 border-b border-foreground/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pb-16">
          <div aria-hidden="true" className="relative select-none font-anton text-[clamp(8rem,22vw,20rem)] leading-none tracking-tighter text-foreground/10">
            4<span className="text-(--brand-700) dark:text-(--brand-400)">0</span>4
          </div>
          <div className="min-w-0">
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-(--brand-700) dark:text-(--brand-400)">
              <span className="h-px w-8 bg-current" aria-hidden="true" />404 / Nie znaleziono strony
            </p>
            <h1 className="font-anton text-4xl uppercase leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">Ta scena jest pusta</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Strona, której szukasz, nie istnieje lub zmieniła adres. Wróć na stronę główną i złap z nami właściwy rytm.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonPrimary href="/"><ArrowLeft aria-hidden="true" />Strona główna</ButtonPrimary>
              <ButtonSecondary href="/oferta/koszalin">Poznaj ofertę</ButtonSecondary>
            </div>
          </div>
        </div>
        <nav aria-label="Przydatne strony" className="grid gap-5 md:grid-cols-3">
          {destinations.map((item, index) => (
            <Link key={item.href} href={item.href} className="ui-focus-ring group rounded-md border border-foreground/10 bg-foreground/2.5 p-6 transition-colors hover:bg-foreground/5">
              <span className="mb-5 block text-xs tabular-nums text-muted-foreground">0{index + 1} / Hoodmood</span>
              <span className="flex items-center justify-between gap-3"><span className="text-base font-medium">{item.title}</span><ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" /></span>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </nav>
      </SectionContainer>
    </MainWrapper>
  );
}
