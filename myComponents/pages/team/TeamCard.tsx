import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Trainer } from "@/app/kadra/data";
import { Badge } from "@/components/ui/badge";
import ExpandableCardDescription from "./ExpandableCardDescription";
import { cn } from "@/lib/utils";
import { a11y } from "@/public/styles";

export default function TeamCard({
  name,
  role,
  styles,
  shortBio,
  description,
  img,
  hoverImg,
  localizations,
}: Trainer) {
  return (
    <Card className=" overflow-hidden h-fit">
      <div className="w-full relative aspect-square">
        <Image
          src={img}
          fill
          alt="img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover"
        />
        <a
          className={cn(
            "p-3 rounded-full absolute right-4 bottom-4 bg-(--brand-700) shadow-xl hover:bg-(--brand-900)",
            a11y,
          )}
          href=""
          target="_blank"
        >
          <img src="/icons/instagram.svg" className="w-5 invert" />
        </a>
      </div>
      <CardHeader>
        <Badge
          variant={"default"}
          className="w-fit  text-xs bg-(--brand-900) text-white px-2 font-semibold  tracking-wider mb-2"
        >
          {role}
        </Badge>
        <div className="inline-flex items-center gap-4">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription className="space-x-2">
          {localizations.map((localization) => (
            <span key={localization}>{localization}</span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6">
          <ExpandableCardDescription
            shortBio={shortBio}
            description={description}
          />
        </p>
      </CardContent>
    </Card>
  );
}
