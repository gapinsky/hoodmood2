import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, ChartNoAxesColumnIncreasing, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import Link from "next/link";
import { ClassesOfferType } from "@/data/ofertaData";

export default function OfferCard({
  name,
  img,
  description,
  instructor,
  instructorAvatar,
  experience,
  minAge,
  maxAge,
  scheduleSrc,
}: ClassesOfferType) {
  return (
    <Card key={name} className="overflow-hidden h-full">
      <div className="aspect-video relative ">
        <Image src={img} fill alt={name} className="object-cover" />
      </div>
      <CardHeader className="">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col  gap-4 text-muted-foreground p-6 mb-2 lg:flex-row lg:gap-6">
        <Link
          href={scheduleSrc}
          className="inline-flex gap-2 items-end text-sm hover:underline focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] rounded-sm"
        >
          <CalendarDays className="w-5 text-black dark:text-white " /> Sprawdź
          grafik
        </Link>
        <span className="inline-flex gap-2 items-end text-sm">
          <User className="w-5 text-black dark:text-white" /> {minAge}-{maxAge}{" "}
          lat
        </span>
        <span className="inline-flex gap-2 items-end text-sm">
          <ChartNoAxesColumnIncreasing className="w-5 text-black dark:text-white" />{" "}
          {experience}
        </span>
      </div>
      <CardFooter className="flex-row gap-2  items-center ">
        <Avatar>
          <AvatarImage src={instructorAvatar} />
          <AvatarFallback>{instructor[0]}</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <button
            type="button"
            className="font-semibold text-start leading-none text-sm hover:underline underline-offset-1 hover:cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] rounded-sm "
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
