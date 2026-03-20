import SectionContent from "../../common/SectionContent";
import { data, offer } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Offer = () => {
  return (
    <div id="offer" className=" scroll-mt-36 ">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        />
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch ">
          {/* {offer.map((item) => (
            <HoverCard
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              hoverImg={item.hoverImg}
              headerStyles="text-2xl"
            />
          ))} */}
          {offer.map((item, id) => (
            <Card key={id} className="h-full flex flex-col justify-start ">
              <HoverCard
                img={item.img}
                hoverImg={item.hoverImg}
                title={item.title}
                customStyles="md:aspect-video lg:aspect-square"
              />
              <CardHeader>
                <CardTitle className="font-anton font-light text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2 text-muted-foreground">
                <p>{item.description}</p>
              </CardContent>
            </Card>
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
