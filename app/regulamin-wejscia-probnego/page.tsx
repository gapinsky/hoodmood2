import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { legalEntity } from "@/data/locations";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";

import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";


const rules = [
  `Organizatorem promocji jest ${legalEntity.name}, prowadząca Hoodmood Dance Studio.`,
  "W ramach promocji jedna osoba może jeden raz skorzystać z wejścia próbnego na wybrane przez siebie zajęcia w cenie 40 zł.",
  "Promocja obejmuje jedno wejście próbne na osobę, niezależnie od liczby dostępnych rodzajów zajęć i lokalizacji Hoodmood.",
  "Chęć skorzystania z wejścia próbnego należy zgłosić przez formularz zapisów. W polu „Uwagi” trzeba wpisać, że zgłoszenie dotyczy wejścia testowego za 40 zł.",
  "Po otrzymaniu formularza recepcja Hoodmood skontaktuje się ze zgłaszającym w celu potwierdzenia wybranych zajęć, terminu oraz dostępności miejsca.",
  "Wysłanie formularza nie gwarantuje miejsca na zajęciach. Udział jest możliwy po potwierdzeniu zgłoszenia przez recepcję Hoodmood.",
  "Uczestnik powinien spełniać wymagania wiekowe i organizacyjne właściwe dla wybranej grupy.",
  "Dane osobowe przekazane w formularzu są przetwarzane zgodnie z Polityką prywatności Hoodmood.",
];

export const metadata = createMetadata({ path: "/regulamin-wejscia-probnego", ...staticSeoPages["/regulamin-wejscia-probnego"] });

export default function TrialClassTermsPage() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer className="gap-10">
        <header className="mx-auto w-full max-w-3xl">
          <h1 className="font-anton text-4xl uppercase leading-tight sm:text-5xl">
            Regulamin wejścia próbnego za 40 zł
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Jedna osoba może jeden raz przetestować wybrane zajęcia Hoodmood w
            promocyjnej cenie 40 zł.
          </p>
        </header>

        <article className="mx-auto w-full max-w-3xl border-t border-black/10 pt-8 dark:border-white/10">
          <ol className="space-y-5">
            {rules.map((rule, index) => (
              <li
                key={rule}
                className="flex gap-4 text-sm leading-7 sm:text-base"
              >
                <span className="shrink-0 font-semibold ">{index + 1}.</span>
                <p>{rule}</p>
              </li>
            ))}
          </ol>
        </article>
      </SectionContainer>
    </MainWrapper>
  );
}
