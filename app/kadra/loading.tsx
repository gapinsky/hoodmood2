import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { activeTrainers } from "@/data/trainers";

const groups = [
  activeTrainers.filter((trainer) => !trainer.specialGuest && trainer.id !== "julia-kaczmarzyk"),
  activeTrainers.filter((trainer) => trainer.specialGuest),
  activeTrainers.filter((trainer) => trainer.id === "julia-kaczmarzyk"),
];

export default function TeamLoading() {
  return (
    <MainWrapper>
      <SectionContainer>
        <div className="animate-pulse space-y-16 motion-reduce:animate-none" aria-label="Ładowanie kadry" role="status">
          <div className="space-y-6 border-b border-foreground/10 pb-8">
            <div className="h-4 w-48 rounded bg-foreground/10" />
            <div className="h-28 w-full max-w-3xl rounded-md bg-foreground/10" />
            <div className="h-20 w-full max-w-2xl rounded-md bg-foreground/5" />
            <div className="flex flex-wrap gap-3">
              <div className="h-12 w-32 rounded-full bg-foreground/5" />
              <div className="h-12 w-44 rounded-full bg-foreground/5" />
              <div className="h-12 w-44 rounded-full bg-foreground/5" />
            </div>
          </div>
          {groups.map((trainers, index) => (
            <div key={index} className="space-y-8">
              <div className="space-y-3 border-b border-foreground/10 pb-5">
                <div className="h-4 w-28 rounded bg-foreground/5" />
                <div className="h-10 w-56 rounded-md bg-foreground/10" />
              </div>
              <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {trainers.map((trainer) => (
                  <div key={trainer.id} className="space-y-4 border-b border-foreground/10 pb-5">
                    <div className="aspect-square rounded-md bg-foreground/10" />
                    <div className="h-8 w-3/4 rounded bg-foreground/10" />
                    <div className="h-4 w-1/2 rounded bg-foreground/5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <span className="sr-only">Ładowanie…</span>
        </div>
      </SectionContainer>
    </MainWrapper>
  );
}
