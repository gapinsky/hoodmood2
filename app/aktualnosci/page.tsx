import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import LatestInstagramPosts from "@/myComponents/pages/news/LatestInstagramPosts";

export default function News() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <LatestInstagramPosts />

        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
