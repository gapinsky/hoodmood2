import ResponsiveImage from "@/myComponents/sections/lifeAtHoodmood/ResponsiveImage";
import SectionContent from "@/myComponents/common/headers/SectionContent";
import { imageSources } from "./imageSrcs";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";

const revealDelays = [0, 200, 100, 200, 0, 100, 0];

export default function LifeAtHoodmood() {
  return (
    <section className="mx-auto max-w-380 px-4 sm:px-6 lg:px-12 xl:px-16">
      <SectionContent
        styles="mb-10 pb-4"
        title="codzienne życie hoodmood"
        description="W Hoodmood dużo dzieje się także poza salą taneczną. Wspólne wyjazdy, wydarzenia, warsztaty, projekty i masa dodatkowych aktywności sprawiają, że trudno się tutaj nudzić. To nie tylko miejsce do tańca, ale też społeczność, w której cały czas dzieje się coś nowego."
      />

      <div className="grid grid-cols-12 gap-4  sm:gap-6 lg:grid-cols-12  lg:gap-8">
   
        <ImageTile index={0} className="col-span-6" />
        <ImageTile index={1} className="col-span-3 " />
        <ImageTile index={2} className="col-span-3 md:aspect-square" />

        <ImageTile index={3} className="col-span-2" />
        <ImageTile index={4} className="col-span-2" />
        <ImageTile index={5} className="col-span-2" />
        <ImageTile index={6} className="col-span-6 md:aspect-5/2" />

        <ImageTile index={7} className="col-span-4 md:aspect-3/3" />
        <ImageTile index={8} className="col-span-4" />
        <ImageTile index={9} className="col-span-4" />

        <ImageTile index={10} className="col-span-6 md:aspect-4/2" />
        <ImageTile index={11} className="col-span-6" />

        <ImageTile index={12} className="col-span-4 md:aspect-5/3" />
        <ImageTile index={13} className="col-span-3" />
        <ImageTile index={14} className="col-span-3 " />
        <ImageTile index={15} className="col-span-2" />

        <ImageTile index={16} className="col-span-8 md:aspect-5/3" />
        <ImageTile index={17} className="col-span-4" />
      </div>
    </section>
  );
}

function ImageTile({ index, className }: { index: number; className: string }) {
  const image = imageSources[index];

  return (
    <ResponsiveImage
      src={image.src}
      alt={image.alt}
      revealDelay={revealDelays[index % revealDelays.length]}
      sizes={index === 0 || index === 6 ? "(min-width: 1520px) 696px, 50vw" : index < 3 ? "(min-width: 1520px) 340px, 25vw" : index < 6 ? "(min-width: 1520px) 220px, 17vw" : "(min-width: 1520px) 453px, 33vw"}
      className={`aspect-auto  ${className} ${cardLiftHoverStyles}`}
    />
  );
}
