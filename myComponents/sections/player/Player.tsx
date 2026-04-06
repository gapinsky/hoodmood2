import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { Youtube } from "lucide-react";
import PlayerEmbed from "./PlayerEmbed";

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
                className="w-4 dark:invert brightness-0 block"
              />{" "}
              Spotify
            </ButtonSecondary>
            <ButtonSecondary href="/youtube">
              <Youtube /> Youtube
            </ButtonSecondary>
          </div>
        </div>
        <PlayerEmbed />
      </div>
    </SectionContainer>
  );
}
