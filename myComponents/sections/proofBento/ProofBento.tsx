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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
        {featureCards.map((featureCard) => {
          const hasImage = Boolean(featureCard.img);

          return (
            <Card
              key={featureCard.id}
              className={cn(
                "w-full  overflow-hidden rounded-lg border border-white/10 bg-zinc-900/95 text-white ",
                "mx-auto max-w-none",
                featureCard.gridClass,
              )}
            >
              {hasImage ? (
                <div className="h-fit ">
                  {/* image */}
                  <div className="relative h-full aspect-video ">
                    <Image
                      src={featureCard.img!}
                      alt={featureCard.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* text */}
                  <CardHeader className="h-fit p-4 md:p-5">
                    <CardTitle className="text-xl md:text-2xl leading-tight">
                      {featureCard.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-4 text-sm leading-6 text-white/75">
                      {featureCard.description}
                    </CardDescription>
                  </CardHeader>
                </div>
              ) : (
                <CardHeader className="h-fit p-5  flex flex-col justify-start">
                  <CardTitle className="text-xl md:text-2xl leading-tight text-white">
                    {featureCard.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm leading-6 text-white/75">
                    {featureCard.description}
                  </CardDescription>
                </CardHeader>
              )}
            </Card>
          );
        })}
      </div>
      <Link href="/oferta/koszalin">Zobacz pełną ofertę</Link>
    </SectionContainer>
  );
}
