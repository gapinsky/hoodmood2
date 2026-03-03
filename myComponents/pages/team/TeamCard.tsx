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
      <div className="w-full relative aspect-video">
        <Image
          src={img}
          fill
          alt="img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover"
        />
      </div>
      <CardHeader>
        {/* <Badge variant={"secondary"} className="w-fit ">
          {role}
        </Badge> */}
        <div className="inline-flex items-center gap-4">
          <CardTitle>{name}</CardTitle>
          <a
            className="bg-(--brand-700) p-1 rounded-lg"
            href=""
            target="_blank"
          >
            <img src="/icons/instagram.svg" className="w-4 " />
          </a>
        </div>
        <CardDescription className="space-x-2">
          {localizations.map((localization) => (
            <span key={localization}>{localization}</span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <ExpandableCardDescription
            shortBio={shortBio}
            description={description}
          />
        </p>
      </CardContent>
    </Card>
  );
}
