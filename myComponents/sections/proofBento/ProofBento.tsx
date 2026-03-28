import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, featureCards } from "./data";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
export default function ProofBento() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start pb-3">
        {featureCards.map((group, groupId) => (
          <div className="flex flex-col  gap-8  " key={groupId}>
            {group.map((featureCard) => (
              <Card
                key={featureCard.id}
                className="w-full   overflow-hidden  mx-auto max-w-none "
              >
                {/* <div className="h-fit "> */}
                {featureCard.img !== null && (
                  <div className={cn("relative", featureCard.imgClass)}>
                    <Image
                      src={featureCard.img!}
                      alt={featureCard.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                <CardHeader className="h-fit  pb-6">
                  <CardTitle className="text-lg leading-tight font-anton font-normal">
                    {featureCard.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm leading-6 ">
                    {featureCard.description}
                  </CardDescription>
                </CardHeader>
                {/* </div> */}
              </Card>
            ))}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
