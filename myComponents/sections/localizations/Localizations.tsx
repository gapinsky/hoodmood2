import SectionContent from "@/myComponents/common/SectionContent";
import { data, localizations } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import Link from "next/link";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Localizations() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      {/* <div className="flex flex-col overflow-hidden  md:flex-row md:items-center  md:justify-center gap-8 lg:gap-16"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {localizations.map((item, id) => (
          <Card key={id}>
            <HoverCard
              customStyles="aspect-4/3"
              img={item.img}
              hoverImg={item.hoverImg}
              title={item.title}
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

      <ButtonPrimary href="/grafik/koszalin">Sprawdź grafik</ButtonPrimary>
    </SectionContainer>
  );
}
