import { cn } from "@/lib/utils";
import Image from "next/image";

type HoverCardProps = {
  img: string;
  hoverImg: string;
  title: string;
  sizes?: string;
  customStyles?: string;
};

export function HoverCard({
  img,
  hoverImg,
  title,
  sizes = "(max-width: 768px) 100vw, 420px",
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
        sizes={sizes}
        className="object-cover  transition-opacity duration-500 group-hover:opacity-0 "
      />

      <Image
        src={hoverImg}
        quality={75}
        alt=""
        fill
        sizes={sizes}
        className="object-cover   opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
      />
    </div>
  );
}
