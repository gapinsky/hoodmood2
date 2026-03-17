import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Trainer } from "@/app/kadra/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { a11y } from "@/public/styles";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import Link from "next/link";
import { User } from "lucide-react";

type Props = {
  name: string;
  role: string;
  images: string[];
  localizations: string[];
  id: string;
};

export default function TeamCard({
  name,
  role,
  images,
  localizations,
  id,
}: Props) {
  return (
    <Card className=" overflow-hidden h-fit">
      <div className="w-full relative aspect-square">
        <Image
          src={images[0]}
          fill
          alt="img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover"
        />
        {/* <a
          className={cn(
            "p-3 rounded-full absolute right-4 bottom-4 bg-(--brand-700) shadow-xl hover:bg-(--brand-900)",
            a11y,
          )}
          href=""
          target="_blank"
        >
          <img src="/icons/instagram.svg" className="w-5 invert" />
        </a> */}
      </div>
      <CardHeader>
        {/* <Badge
          variant={"default"}
          className="w-fit  text-xs bg-(--brand-900) text-white px-2 font-semibold  tracking-wider mb-2"
        >
          {role}
        </Badge> */}
        <div className="inline-flex items-center gap-4">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription className="space-x-2">
          {/* {localizations.map((localization) => (
            <span key={localization}>{localization}</span>
          ))} */}
          {role}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-end items-end  pt-6">
        <Link
          scroll
          href={`/kadra/${id}`}
          className="inline-flex text-xs items-center text-slate-900 dark:text-slate-50 justify-center gap-2 whitespace-nowrap uppercase rounded-full  font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50  px-4 py-2 has-[>svg]:px-3 w-fit"
        >
          <User />
          Profil trenera
        </Link>
      </CardFooter>
    </Card>
  );
}
