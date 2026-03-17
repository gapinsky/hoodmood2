import { ClassesOfferType } from "@/data/ofertaData";
import { offerTabs } from "@/data/tabs";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import TabsNav from "@/myComponents/common/ToggleButtons";
import OfferFiltersSection from "@/myComponents/pages/offer/OfferFiltersSection";

type LocationPageProps = {
  header: { title: string; description: string };
  offerContent: ClassesOfferType[];
};

export function LocationPageTemplate({
  header,
  offerContent,
}: LocationPageProps) {
  return (
    <main className="my-36">
      <SectionContainer>
        <SectionContent
          badge="Oferta"
          title={header.title}
          description={header.description}
        ></SectionContent>
        <TabsNav tabs={offerTabs} />
        <OfferFiltersSection offerContent={offerContent} />
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
