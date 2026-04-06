import { cn } from "@/lib/utils";
import Image from "next/image";

type HoverCardProps = {
  img: string;
  hoverImg: string;
  title: string;
  customStyles?: string;
};

export function HoverCard({
  img,
  hoverImg,
  title,
  customStyles = "",
}: HoverCardProps) {
  return (
    <div
      className={cn(
        "group relative aspect-square w-full overflow-hidden  ",
        customStyles,
      )}
    >
      <Image
        quality={75}
        src={img}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        className="object-cover   transition-opacity duration-500 group-hover:opacity-0 "
      />

      <Image
        src={hoverImg}
        quality={75}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        className="object-cover   opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
      />
    </div>
  );
}
