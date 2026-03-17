import SectionContent from "@/myComponents/common/SectionContent";
import { data, localizations } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import Link from "next/link";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
export default function Localizations() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <div className="flex flex-col overflow-hidden  md:flex-row md:items-center  md:justify-center gap-8 lg:gap-16">
        {localizations.map((item) => (
          <HoverCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            hoverImg={item.hoverImg}
            headerStyles="text-3xl"
            customStyles="max-h-80 "
          />
        ))}
      </div>

      <ButtonPrimary href="/grafik/koszalin">Sprawdź grafik</ButtonPrimary>
    </SectionContainer>
  );
}
