import Link from "next/link";

import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/headers/SectionContent";
import { data, testimonials } from "./data";
import OpinionsCarousel from "./OpinionsCarousel";

const reviewsUrl =
  "https://www.google.com/search?q=hoodmood";

export default function Opinions() {
  return (
    <SectionContainer>
      <SectionContent
        title={data.title}
        description={
          <>
            {data.description}{" "}
            <Link
              href={reviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-(--brand-700) underline decoration-(--brand-500)/60 underline-offset-4 transition-colors hover:text-(--brand-500) dark:text-(--brand-300) dark:hover:text-(--brand-200)"
            >
              Zobacz więcej
            </Link>
          </>
        }
      />
      <OpinionsCarousel testimonials={testimonials} />
    </SectionContainer>
  );
}
