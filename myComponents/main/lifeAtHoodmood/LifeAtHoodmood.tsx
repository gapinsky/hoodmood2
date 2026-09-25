import ResponsiveImage from "./ResponsiveImage";
import SectionContent from "@/myComponents/headers/SectionContent";
import { imageSources } from "./imageSrcs";

export default function LifeAtHoodmood() {
  return (
    <section className="mx-auto max-w-380 px-4 sm:px-6 lg:px-12 xl:px-16">
      <SectionContent
        styles="mb-10 pb-4"
        title="codzienne życie hoodmood"
        description="W Hoodmood dużo dzieje się także poza salą taneczną. Wspólne wyjazdy, wydarzenia, warsztaty, projekty i masa dodatkowych aktywności sprawiają, że trudno się tutaj nudzić. To nie tylko miejsce do tańca, ale też społeczność, w której cały czas dzieje się coś nowego."
      />

      <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {imageSources.map((image) => (
          <ResponsiveImage key={image.src} {...image} />
        ))}
      </div>
    </section>
  );
}
