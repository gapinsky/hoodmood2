import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";

const cards = Array.from({ length: 12 });

export default function TeamLoading() {
  return (
    <MainWrapper>
      <SectionContainer>
        <div className="animate-pulse" aria-label="Ładowanie kadry" role="status">
          <div className="mb-10 space-y-4">
            <div className="h-5 w-20 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="h-10 w-full max-w-xl rounded-lg bg-black/10 dark:bg-white/10" />
            <div className="h-5 w-full max-w-3xl rounded bg-black/8 dark:bg-white/8" />
            <div className="h-5 w-3/4 max-w-2xl rounded bg-black/8 dark:bg-white/8" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-3">
            {cards.map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg bg-black/10 dark:bg-white/10"
              />
            ))}
          </div>
          <span className="sr-only">Ładowanie…</span>
        </div>
      </SectionContainer>
    </MainWrapper>
  );
}
