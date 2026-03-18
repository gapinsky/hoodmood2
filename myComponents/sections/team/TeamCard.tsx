import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  role: string;
  images: string[];
};

export default function TeamCard({ id, name, role, images }: Props) {
  return (
    <Card className="overflow-hidden rounded-xl focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:ring-offset-2 hover:scale-105 transition-transform ease-in-out duration-200">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          quality={75}
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover transition-transform duration-300 ease-out hover:scale-105"
          priority={false}
        />
        <Link
          scroll
          href={`/kadra/${id}`}
          className="absolute bottom-4 right-4 inline-flex text-xs items-center text-white justify-center gap-2 whitespace-nowrap uppercase rounded-full font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-white/10 bg-zinc-800/70 backdrop-blur-md shadow-xs hover:bg-zinc-700/70 px-4 py-2 has-[>svg]:px-3 w-fit"
        >
          <User />
          Profil trenera
        </Link>
      </div>

      <CardHeader>
        <div className="flex justify-between  w-full items-start">
          <CardTitle className="font-anton font-normal ">{name}</CardTitle>
        </div>
        <CardDescription className="flex gap-2">
          <p className="text-sm">{role}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter />
    </Card>
  );
}
