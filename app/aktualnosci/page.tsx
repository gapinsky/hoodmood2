import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/common/headers/PageIntro";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import LatestInstagramPosts from "@/myComponents/pages/news/LatestInstagramPosts";
import { ArrowUpRight } from "lucide-react";

export default function News() {
  return (
    <MainWrapper>
      <SectionContainer>
        <PageIntro title={data.title} description={data.description} eyebrow="Z życia studia / Hoodmood" titleWidth="wide">
          <nav aria-label="Aktualności Hoodmood" className="flex flex-wrap gap-3 border-b border-foreground/10 pb-8">
            <a href="#wpisy" className="ui-focus-ring rounded-full border border-foreground/10 bg-foreground/2.5 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">Najnowsze wpisy</a>
            <a href="https://www.instagram.com/hoodmood_dancestudio/" target="_blank" rel="noreferrer" className="ui-focus-ring inline-flex items-center gap-3 rounded-full border border-foreground/10 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">
              Obserwuj nas <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>
        </PageIntro>

        <LatestInstagramPosts />

        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
