import SectionContent from "../../common/SectionContent";
import { data, offer } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
const Offer = () => {
  return (
    <div id="offer" className=" scroll-mt-36 ">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        />
        <div className="grid rid-cols-1 overflow-hidden gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {offer.map((item) => (
            <HoverCard
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              hoverImg={item.hoverImg}
              headerStyles="text-2xl"
            />
          ))}
        </div>
        <ButtonPrimary href="/oferta/koszalin">
          Zobacz pełną ofertę
        </ButtonPrimary>
      </SectionContainer>
    </div>
  );
};

export default Offer;
