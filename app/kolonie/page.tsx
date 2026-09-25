import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/headers/PageIntro";
import { data, camps } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import NoEvents from "@/myComponents/camps/NoEvents";
import PreviousEvents from "@/myComponents/camps/PreviousEvents";
import MainWrapper from "@/myComponents/common/MainWrapper";

export const metadata = createMetadata({ path: "/kolonie", ...staticSeoPages["/kolonie"] });

export default function Camps() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer>
        <PageIntro title={data.title} description={data.description} eyebrow="Poza salą / Hoodmood" titleWidth="wide">
          <nav aria-label="Sekcje wydarzeń" className="flex flex-wrap gap-3 border-b border-foreground/10 pb-8">
            <a href="#najblizsze" className="ui-focus-ring rounded-full border border-foreground/10 bg-foreground/2.5 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">Najbliższe wydarzenia</a>
            <a href="#wspomnienia" className="ui-focus-ring inline-flex items-center gap-4 rounded-full border border-foreground/10 bg-foreground/2.5 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">
              Tak było
              <span className="text-xs tabular-nums text-muted-foreground">{String(camps.length).padStart(2, "0")}</span>
            </a>
          </nav>
        </PageIntro>
        <NoEvents />
        <section id="wspomnienia" aria-labelledby="wspomnienia-title" className="scroll-mt-28 space-y-10 sm:space-y-14">
          <div className="flex items-end justify-between gap-4 border-b border-foreground/10 pb-5">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">02 / Wspomnienia</p>
              <h2 id="wspomnienia-title" className="font-anton text-3xl uppercase sm:text-4xl">Tak było z Hoodmood</h2>
            </div>
            <span aria-label={`Liczba wydarzeń: ${camps.length}`} className="font-anton text-4xl tabular-nums text-foreground/20 sm:text-5xl">{String(camps.length).padStart(2, "0")}</span>
          </div>
          <div className="space-y-12 sm:space-y-16">
            {camps.map((camp, id) => (
              <PreviousEvents
                key={id}
                title={camp.title}
                description={camp.description}
                video={camp.video}
                number={id + 1}
              />
            ))}
          </div>
        </section>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
