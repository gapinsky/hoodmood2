"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type HoverCardProps = {
  img: string;
  hoverImg: string;
  title: string;
  description?: string;
  headerStyles?: string;
  customStyles?: string;
};

export function HoverCard({
  img,
  hoverImg,
  title,
  // description,
  // headerStyles = "",
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
        priority={false}
      />

      <Image
        src={hoverImg}
        quality={75}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        className="object-cover   opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
        priority={false}
      />

      {/* <div className="absolute inset-0 bg-black/30 transition-colors duration-500 " /> */}
      {/* 
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className={headerStyles}>{title}</h3>
        <p className="mt-2 text-sm opacity-90">{description}</p>
      </div> */}
    </div>
  );
}
