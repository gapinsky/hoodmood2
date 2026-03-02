"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { useState } from "react";
import { Trainer } from "@/app/kadra/data";
import { Badge } from "@/components/ui/badge";

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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card className=" overflow-hidden">
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
        <div className="inline-flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge variant={"secondary"}>Instagram</Badge>
        </div>
        <p>{role}</p>
        <CardDescription>
          {isExpanded ? description : shortBio}
          <button onClick={() => setIsExpanded((prev) => !prev)}>
            {isExpanded ? "zwiń" : "rozwiń"}
          </button>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
