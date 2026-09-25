import { socialLinks } from "@/data/socials";
import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { Suspense } from "react";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/headers/PageIntro";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import LatestInstagramPosts from "@/myComponents/news/LatestInstagramPosts";
import { ArrowUpRight } from "lucide-react";

export const metadata = createMetadata({ path: "/aktualnosci", ...staticSeoPages["/aktualnosci"] });

export default function News() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} pageType="CollectionPage" />
      <SectionContainer>
        <PageIntro title={data.title} description={data.description} eyebrow="Z życia studia / Hoodmood" titleWidth="wide">
          <nav aria-label="Aktualności Hoodmood" className="flex flex-wrap gap-3 border-b border-foreground/10 pb-8">
            <a href="#wpisy" className="ui-focus-ring rounded-full border border-foreground/10 bg-foreground/2.5 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">Najnowsze wpisy</a>
            <a href={socialLinks.instagram.href} target="_blank" rel="noreferrer" className="ui-focus-ring inline-flex items-center gap-3 rounded-full border border-foreground/10 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">
              Obserwuj nas <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>
        </PageIntro>

        <Suspense fallback={<p role="status" className="py-8 text-muted-foreground">Ładowanie aktualności…</p>}><LatestInstagramPosts /></Suspense>

        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
