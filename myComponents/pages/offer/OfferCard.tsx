import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  User,
  Wallet,
} from "lucide-react";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import Link from "next/link";
import { ClassesOfferType } from "@/data/ofertaData";

export default function OfferCard({
  name,
  img,
  description,
  instructors,
  experience,
  minAge,
  maxAge,
  scheduleSrc,
  pricingSrc,
}: ClassesOfferType) {
  return (
    <Card
      key={name}
      className="group/card h-full overflow-hidden flex flex-col justify-between"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/18 via-transparent to-white/12 opacity-80 transition-opacity duration-300 group-hover/card:opacity-100" />
        <Image
          src={img}
          fill
          alt={name}
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="mb-2 grid grid-cols-3  gap-4 p-6 text-muted-foreground  ">
        <div className="flex flex-row  gap-1 text-sm col-span-3 mb-2">
          <p className="font-semibold text-black dark:text-white">
            Stopień zaawansowania:
          </p>
          <span>{experience}</span>
        </div>
        <span className="inline-flex items-end gap-2 text-sm">
          <User className="w-5 text-black dark:text-white" />
          {minAge !== "" && maxAge !== ""
            ? `${minAge}-${maxAge} lat`
            : "bez limitu"}
        </span>

        <Link
          href={scheduleSrc}
          className="group/link ui-focus-ring ui-link-subtle inline-flex items-end  rounded-sm text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <CalendarDays className="ui-link-subtle-icon w-5 text-black/78 dark:text-white/78" />
          Grafik
        </Link>
        <Link
          href={pricingSrc}
          className="group/link ui-focus-ring ui-link-subtle inline-flex items-end  rounded-sm text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <Wallet className="ui-link-subtle-icon w-5 text-black/78 dark:text-white/78" />
          Cennik
        </Link>
      </div>
      <CardFooter className="flex-row items-center gap-2">
        <div className="w-full">
          <p className="text-sm   font-semibold leading-none mb-1">
            {instructors.length === 1 ? "Instruktor:" : "Instruktorzy:"}
          </p>
          <div>
            {instructors.map((instructor, index) => (
              <span key={instructor.slug}>
                <Link
                  href={instructor.slug}
                  className="group/link ui-focus-ring ui-link-subtle text-sm rounded-sm text-start  focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {instructor.name}
                </Link>
                {index < instructors.length - 1 ? ", " : null}
              </span>
            ))}
          </div>
        </div>
        <ButtonPrimary href="/zapisz-sie">Zapisz się</ButtonPrimary>
      </CardFooter>
    </Card>
  );
}
