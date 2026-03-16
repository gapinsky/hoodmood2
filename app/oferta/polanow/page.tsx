import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, kidsPolanow } from "./data";
import OfferCard from "@/myComponents/pages/offer/OfferCard";
import TabsNav from "@/myComponents/common/ToggleButtons";
import { tabs } from "../tabs";
export default function Offer() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <TabsNav tabs={tabs} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kidsPolanow.map((item) => (
            <OfferCard
              key={item.name}
              name={item.name}
              instructor={item.instructor}
              img={item.img}
              instructorAvatar={item.instructorAvatar}
              age={item.age}
              description={item.description}
              localization={"polanow"}
              experience={item.experience}
            />
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
