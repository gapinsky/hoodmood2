import { ClassesOfferType } from "@/data/ofertaData";
import { offerTabs } from "@/data/tabs";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import TabsNav from "@/myComponents/common/ToggleButtons";
import OfferCard from "@/myComponents/pages/offer/OfferCard";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerContent.map((item, id) => (
            <OfferCard
              key={id}
              name={item.name}
              instructor={item.instructor}
              img={item.img}
              instructorAvatar={item.instructorAvatar}
              age={item.age}
              description={item.description}
              experience={item.experience}
              localization={item.localizations[0]}
            />
          ))}
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
