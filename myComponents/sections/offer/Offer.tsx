import SectionContent from "../../common/SectionContent";
import { data, offer } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";
const Offer = () => {
  return (
    <div id="offer" className=" scroll-mt-36 ">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        />
        <section className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch ">
          {offer.map((item, id) => (
            <Card
              key={id}
              className={`h-full flex flex-col justify-start ${cardLiftHoverStyles}`}
            >
              {/* <HoverCard
                img={item.img}
                hoverImg={item.hoverImg}
                title={item.title}
                sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(50vw - 3rem), (max-width: 1279px) calc(25vw - 2rem), 280px"
                customStyles="md:aspect-video lg:aspect-square"
              /> */}
              <div className="relative w-full aspect-4/2  xl:aspect-5/4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(50vw - 3rem), (max-width: 1279px) calc(25vw - 2rem), 280px"
                  className="object-cover "
                />
              </div>
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
        </section>
        <ButtonPrimary href="/oferta/koszalin">Poznaj ofertę</ButtonPrimary>
      </SectionContainer>
    </div>
  );
};

export default Offer;
