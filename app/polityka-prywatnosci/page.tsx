import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, sections, personalData } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import InfoRow from "@/myComponents/pages/privacy/InfoRow";
import MainWrapper from "@/myComponents/common/MainWrapper";

export default function Privacy() {
  return (
  <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="mx-auto ">
          <div>
            <div className="grid gap-4 0  py-6 sm:grid-cols-2  lg:grid-cols-4">
              <InfoRow label="Administrator" value={personalData.schoolName} />
              <InfoRow label="Adres strony" value={personalData.websiteUrl} />
              <InfoRow label="E-mail" value={personalData.contactEmail} />
              <InfoRow label="Aktualizacja" value={personalData.lastUpdated} />
            </div>

            <div className=" py-8 ">
              <div className="space-y-8">
                {sections.map((section) => (
                  <article key={section.id} id={section.id}>
                    <h2 className="   text-xl">{section.title}</h2>
                    <div className="mt-4 space-y-4">
                      {section.content.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-6  sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="  py-6 ">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoRow
                  label="Kontakt e-mail"
                  value={personalData.contactEmail}
                />
                <InfoRow
                  label="Telefon / adres"
                  value={`${personalData.contactPhone} · ${personalData.address}`}
                />
              </div>
            </div>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
