import { socialLinks } from "@/data/socials";
import Image from "next/image";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/headers/SectionContent";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { Youtube } from "lucide-react";
import PlayerEmbed from "./PlayerEmbed";

const data = {
  badge: "podcast",
  title: "najbardziej roztańczony content w internecie!",
  description:
    "Podcast dla tancerzy i ludzi z zajawką na ruch. Historie z sali, backstage z pokazów, patenty na trening i gadka o tym, jak pogodzić taniec z normalnym życiem.",
};


export default function Player() {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row w-full items-center gap-8">
        <div className=" flex flex-col gap-8 xl:w-full">
          <SectionContent
            styles="max-w-full md:max-w-md"
            title={data.title}
            description={data.description}
          />
          <div className="flex gap-8">
            <ButtonSecondary href={socialLinks.spotify.href} blank={true}>
              <Image
                src="/icons/spotify.svg"
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                className="block w-4 dark:invert brightness-0"
              />
              Spotify
            </ButtonSecondary>
            <ButtonSecondary href={socialLinks.youtube.href} blank={true}>
              <Youtube /> Youtube
            </ButtonSecondary>
          </div>
        </div>
        <PlayerEmbed />
      </div>
    </SectionContainer>
  );
}
