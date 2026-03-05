import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import Link from "next/link";

type Props = {
  name: string;
  img: string;
  description: string;
  instructor: string;
  age: string;
  instructorAvatar: string;
  localization: string;
};

export default function OfferCard({
  name,
  img,
  description,
  instructor,
  instructorAvatar,
  age,
  localization,
}: Props) {
  return (
    <Card key={name} className="overflow-hidden h-full">
      <div className="aspect-video relative ">
        <Image src={img} fill alt={name} className="object-cover" />
      </div>
      <CardHeader className="">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <div className="flex  gap-3 text-muted-foreground p-6">
        <span className="inline-flex gap-2 items-end text-sm">
          <User className="w-5 text-black dark:text-white" /> {age}
        </span>
        <Link
          href={`/grafik/${localization}`}
          className="inline-flex gap-2 items-end text-sm hover:underline focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] rounded-sm"
        >
          <CalendarDays className="w-5 text-black dark:text-white " /> Sprawdź
          grafik
        </Link>
      </div>
      <CardFooter className="flex-row gap-2  items-center ">
        <Avatar>
          <AvatarImage src={instructorAvatar} />
          <AvatarFallback>{instructor[0]}</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <button
            type="button"
            className="font-semibold leading-none text-sm hover:underline underline-offset-1 hover:cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] rounded-sm "
          >
            {instructor}
          </button>

          <p className="text-sm text-muted-foreground">Instruktor zajęć</p>
        </div>
        <ButtonPrimary href="/zapisy">Zapisz się</ButtonPrimary>
      </CardFooter>
    </Card>
  );
}
