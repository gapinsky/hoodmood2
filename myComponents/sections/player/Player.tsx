import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { Youtube } from "lucide-react";
export default function Player() {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row w-full items-center gap-8">
        <div className=" flex flex-col gap-8 xl:w-full">
          <SectionContent
            badge={data.badge}
            title={data.title}
            description={data.description}
          />
          <div className="flex gap-8">
            <ButtonSecondary href="/spotify">
              <img
                src="/icons/spotify.svg"
                className="w-4 invert brightness-0 block"
              />{" "}
              Spotify
            </ButtonSecondary>
            <ButtonSecondary href="/youtube">
              <Youtube /> Youtube
            </ButtonSecondary>
          </div>
        </div>
        <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-xl ">
          <iframe
            className="absolute inset-0 h-full w-full  "
            src={`https://www.youtube.com/embed/cRFh3wTlvas?si=8hGkj0z5HXb9CL3K`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
