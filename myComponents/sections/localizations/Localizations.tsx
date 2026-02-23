import SectionContent from "@/myComponents/common/SectionContent";
import { data, localizations } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import Link from "next/link";
export default function Localizations() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <div className="flex flex-col overflow-hidden gap-4 md:flex-row md:items-center  md:justify-between">
        {localizations.map((item) => (
          <HoverCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            hoverImg={item.hoverImg}
          />
        ))}
      </div>
      <Link href="/oferta/koszalin">Zobacz pełną ofertę</Link>
    </SectionContainer>
  );
}
