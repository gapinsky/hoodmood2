import type { ReactNode } from "react";
import LocationComingSoon from "@/myComponents/common/LocationComingSoon";
import type { ClassOffer } from "@/myComponents/offer/types";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationPageHeader from "@/myComponents/headers/LocationPageHeader";
import OfferFiltersSection from "@/myComponents/offer/OfferFiltersSection";

type LocationPageProps = {
  header: { title: string; description: string };
  offerContent: ClassOffer[];
  children?: ReactNode;
};

export function LocationPageTemplate({
  header,
  offerContent,
  children,
}: LocationPageProps) {
  return (
    <MainWrapper>
      <SectionContainer>
        <LocationPageHeader
          eyebrow="Znajdź swój styl / Hoodmood"
          navigationLabel="Lokalizacja oferty"
          title={header.title}
          description={header.description}
        />
        {offerContent.length ? <OfferFiltersSection offerContent={offerContent} /> : <LocationComingSoon />}
        {children}
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
