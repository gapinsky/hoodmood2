"use client";

import { cn } from "@/lib/utils";
import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";
import { buttonSecondaryStyles } from "@/myComponents/common/ButtonSecondary";
import { useState } from "react";

export default function LocalizationsMapTabs() {
  const [localization, setLocalization] = useState("koszalin");
  return (
    <div className="flex flex-col gap-8  items-center order-2 lg:order-1">
      <div className="space-x-4 flex overflow-x-scroll md:overflow-auto">
        <button
          onClick={() => setLocalization("koszalin")}
          className={cn(
            localization === "koszalin"
              ? buttonPrimaryStyes
              : buttonSecondaryStyles,
            "hover:cursor-pointer",
          )}
        >
          Koszalin
        </button>
        <button
          onClick={() => setLocalization("polanow")}
          className={cn(
            localization === "polanow"
              ? buttonPrimaryStyes
              : buttonSecondaryStyles,
            "hover:cursor-pointer",
          )}
        >
          Polanów
        </button>
        <button
          onClick={() => setLocalization("bialy-bor")}
          className={cn(
            localization === "bialy-bor"
              ? buttonPrimaryStyes
              : buttonSecondaryStyles,
            "hover:cursor-pointer",
          )}
        >
          Biały Bór
        </button>
      </div>
      <div className="w-full  space-y-3">
        {localization === "koszalin" && (
          <>
            <p className=" text-lg">Koszalin, ul. Zwycięstwa 115</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37338.16368305497!2d16.106502690398507!3d54.204242506392774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701cdd275367db1%3A0x9d5fd845442ce6ca!2sHoodmood%20Dance%20Studio!5e0!3m2!1spl!2spl!4v1774035701758!5m2!1spl!2spl"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </>
        )}
        {localization === "polanow" && (
          <>
            <p className=" text-lg">Polanów, ul. Grabowe Wzgórze 5</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.4862189640069!2d16.679945935606494!3d54.12014604846891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701e8386cee1de5%3A0xf1f03ab1660a7b15!2sGrabowe%20Wzg%C3%B3rze%205%2C%2076-010%20Polan%C3%B3w!5e0!3m2!1spl!2spl!4v1774035667849!5m2!1spl!2spl"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </>
        )}
        {localization === "bialy-bor" && (
          <>
            <p className=" text-lg">Biały Bór, ul. Tamka 3</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4702.024500979478!2d16.832703475332853!3d53.8959862009296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47018db1d5136979%3A0xb738d5db399e0d4a!2sBia%C5%82oborskie%20Centrum%20Kultury%20i%20Rekreacji!5e0!3m2!1spl!2spl!4v1774035601809!5m2!1spl!2spl"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
}
