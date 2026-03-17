import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, items } from "./data";
import Image from "next/image";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";

export default function Subsidy() {
  return (
   <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div>
            <div className=" flex flex-col gap-4   pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] ">
                  Dofinansowanie 2025
                </p>
                <h2 className="mt-3 text-2xl tracking-tight  sm:text-3xl">
                  Informacje o zadaniu
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6  sm:text-base">
                  Najważniejsze informacje o programie, zakresie realizacji i
                  finansowaniu w czytelnym układzie.
                </p>
              </div>
            </div>

            <dl className="grid gap-4 sm:gap-5">
              {items.map((item) => (
                <div key={item.label} className="py-4">
                  <dt className="text-md font-semibold">{item.label}</dt>
                  <dd className={`mt-2 text-sm leading-7`}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative  aspect-4/5 h-fit rounded-lg overflow-hidden">
            <Image
              src="/assets/images/subsidy/dofinansowanie.jfif"
              alt="Podgląd zadania lub programu"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
