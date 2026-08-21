import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import StickyScrollReveal from "./stickyScrollReveal";
import { data, stickyScrollItems } from "./data";

export default function AboutUs() {
  return (
    <SectionContainer className="overflow-visible">
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <StickyScrollReveal items={stickyScrollItems} />
    </SectionContainer>
  );
}
