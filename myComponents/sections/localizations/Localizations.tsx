import SectionContent from "@/myComponents/common/SectionContent";
import { data, localizations } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
export default function Localizations() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-3">
        {localizations.map((item, id) => (
          <Card key={id}>
            <HoverCard
              customStyles="aspect-5/3"
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
              <div className="w-full flex justify-end">
                <ButtonSecondary href={`/grafik/${item.slug}`}>
                  Sprawdź grafik
                </ButtonSecondary>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
