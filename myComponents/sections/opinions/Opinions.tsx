import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, testimonials } from "./data";

import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import OpinionsCarousel from "./OpinionsCarousel";
export default function Opinions() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <OpinionsCarousel testimonials={testimonials} />
      <ButtonPrimary
        blank={true}
        href="https://www.google.com/search?sca_esv=4ae20d8bd47daad1&sxsrf=ANbL-n5YEmT0i0pZ8qgSVIk-cBA1a-UxgA:1773755653092&q=hoodmood&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfnmBUM0cIlc8TAbOkpdcjiJvZurIizy5djxcZaibF9rUlFK4PhShPc_Ax6gSzMsD7er3e0%3D&uds=ALYpb_kiiUNHkONghgvqB_3sKPHuKllYdocldxz30pl0gvKzYuuNT_4Ej7Wwy4lVKJbda1n8swegxa8zJzfwekMUPfOotONt6lpap83cYN1aN6xUvFPWFU8&sa=X&ved=2ahUKEwj1vvvciqeTAxX6HBAIHZh7HLkQ3PALegQIGBAE&biw=1920&bih=911&dpr=1"
      >
        Więcej opinii
      </ButtonPrimary>
    </SectionContainer>
  );
}
