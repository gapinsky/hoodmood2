import Image from "next/image";
import SectionContainer from "@/myComponents/common/SectionContainer";

export default function Dream() {
  return (
    <SectionContainer className="overflow-visible">
      <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="max-w-sm ">
          <p className="mb-4 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Działamy już od 10 lat 💖
          </p>
          <h2 className="font-anton text-5xl uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-7xl">
            Zaczyna się
            <br />
            od marzenia.
          </h2>
        </div>
        <figure className="relative aspect-4/5 overflow-hidden sm:aspect-5/6 lg:aspect-square lg:rounded-2xl">
          <Image
            src="/assets/images/dream/dream.jpeg"
            alt="Tancerka w koszulce Hoodmood z napisem To od marzenia"
            fill
            sizes="(max-width: 1023px) calc(100vw - 2rem), 48vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />
          <figcaption className="absolute top-4 left-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-black/85">
            Talita jarzęcka - choreografka, tancerka, instruktorka, właścicielka Hoodmood
          </figcaption>
        </figure>
      </div>
    </SectionContainer>
  );
}
