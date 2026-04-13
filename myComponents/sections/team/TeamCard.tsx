import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  styles: string[];
  images: string[];
};

export default function TeamCard({ id, name, styles, images }: Props) {
  return (
    <Card className="group/card overflow-hidden ">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          quality={60}
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(33vw - 3rem), 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.035]"
          priority={false}
        />
      </div>

      <CardHeader className="pointer-events-none">
        <div className="flex w-full items-start justify-between">
          <CardTitle className="font-anton font-normal">{name}</CardTitle>
        </div>
        <CardDescription />
        {/* <CardDescription className="flex gap-2 flex-wrap mt-2">
          {styles.map((style) => (
            <Badge key={style} variant={"secondary"} className="text-nowrap">
              {style}
            </Badge>
          ))}
        </CardDescription> */}
      </CardHeader>
      <CardFooter className="flex justify-end text-xs mt-4">
        <ButtonSecondary href={`/kadra/${id}`} blank={false}>
          <User className="max-w-4 " /> Zobacz profil
        </ButtonSecondary>
      </CardFooter>
    </Card>
  );
}
