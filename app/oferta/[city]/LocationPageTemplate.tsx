import type { ClassOffer } from "@/myComponents/pages/offer/types";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/common/headers/LocationPageHeader";
import { offerTabs } from "@/data/tabs";
import OfferFiltersSection from "@/myComponents/pages/offer/OfferFiltersSection";

type LocationPageProps = {
  header: { title: string; description: string };
  offerContent: ClassOffer[];
};

export function LocationPageTemplate({
  header,
  offerContent,
}: LocationPageProps) {
  return (
    <MainWrapper>
      <SectionContainer>
        <LocationPageHeader
          tabs={offerTabs}
          eyebrow="Znajdź swój styl / Hoodmood"
          navigationLabel="Lokalizacja oferty"
          title={header.title}
          description={header.description}
        />
        <OfferFiltersSection offerContent={offerContent} />
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
