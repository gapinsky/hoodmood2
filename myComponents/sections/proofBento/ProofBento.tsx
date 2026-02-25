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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {featureCards.map((group, groupId) => (
          <div className="flex flex-col  gap-6 " key={groupId}>
            {group.map((featureCard) => (
              <Card
                key={featureCard.id}
                className="w-full   overflow-hidden rounded-lg border border-white/10 bg-background  mx-auto max-w-none"
              >
                <div className="h-fit ">
                  {/* image */}
                  {featureCard.img !== null && (
                    <div className="relative h-full aspect-video ">
                      <Image
                        src={featureCard.img!}
                        alt={featureCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* text */}
                  <CardHeader className="h-fit p-4 ">
                    <CardTitle className="text-xl md:text-2xl leading-tight">
                      {featureCard.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6 ">
                      {featureCard.description}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
      <Link href="/oferta/koszalin">Zobacz pełną ofertę</Link>
    </SectionContainer>
  );
}
