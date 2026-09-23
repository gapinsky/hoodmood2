import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/common/headers/PageIntro";
import { data, sections, personalData } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import InfoRow from "@/myComponents/pages/privacy/InfoRow";
import MainWrapper from "@/myComponents/common/MainWrapper";

export const metadata = createMetadata({ path: "/polityka-prywatnosci", ...staticSeoPages["/polityka-prywatnosci"] });

export default function Privacy() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} />
      <SectionContainer>
        <PageIntro
          eyebrow="Twoje dane / Hoodmood"
          title={data.title}
          description={data.description}
        />

        <div className="space-y-10 sm:space-y-14">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <InfoRow label="Administrator" value={personalData.schoolName} />
            <InfoRow label="Adres strony" value={personalData.websiteUrl} href={personalData.websiteUrl} />
            <InfoRow label="E-mail" value={personalData.contactEmail} href={`mailto:${personalData.contactEmail}`} />
            <InfoRow label="Aktualizacja" value={personalData.lastUpdated} />
          </div>

          <div className="grid items-start gap-10 border-t border-foreground/10 pt-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.65fr)] lg:gap-16">
            <nav aria-label="Spis treści polityki prywatności" className="min-w-0">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Na tej stronie
              </p>
              <ol className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="ui-focus-ring block rounded-md px-3 py-2.5 text-sm leading-6 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="min-w-0 space-y-8 sm:space-y-10">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-title`}
                  className="scroll-mt-28 border-b border-foreground/10 pb-8 last:border-0 last:pb-0 sm:pb-10"
                >
                  <h2 id={`${section.id}-title`} className="text-2xl leading-tight sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 max-w-prose space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}

              <div className="grid gap-3 sm:grid-cols-2">
                <InfoRow label="Kontakt e-mail" value={personalData.contactEmail} href={`mailto:${personalData.contactEmail}`} />
                <InfoRow label="Telefon / adres" value={`${personalData.contactPhone} · ${personalData.address}`} />
              </div>
            </div>
          </div>
        </div>

        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
