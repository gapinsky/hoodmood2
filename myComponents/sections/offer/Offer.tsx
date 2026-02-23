import SectionContent from "../../common/SectionContent";
import { data, offer } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
const Offer = () => {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <div className="flex flex-col overflow-hidden gap-4 md:flex-row md:items-center  md:justify-between">
        {offer.map((item) => (
          <HoverCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            hoverImg={item.hoverImg}
          />
        ))}
      </div>
      <ButtonPrimary href="/oferta/koszalin">Zobacz pełną ofertę</ButtonPrimary>
    </SectionContainer>
  );
};

export default Offer;
