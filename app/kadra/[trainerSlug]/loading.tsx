import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";

export default function TrainerLoading() {
  return (
    <MainWrapper>
      <SectionContainer>
        <div className="animate-pulse motion-reduce:animate-none" aria-label="Ładowanie profilu trenera" role="status">
          <div className="mb-12 h-10 w-full rounded border-b border-foreground/10 bg-black/5 dark:bg-white/5" />

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="space-y-4">
              <div className="aspect-square rounded-md bg-black/10 dark:bg-white/10" />
              <div className="h-14 rounded-md bg-black/10 dark:bg-white/10" />
            </div>

            <div className="space-y-7">
              <div className="space-y-4">
                <div className="h-28 w-4/5 rounded-md bg-black/10 dark:bg-white/10" />
                <div className="h-5 w-full rounded bg-black/8 dark:bg-white/8" />
                <div className="h-5 w-full rounded bg-black/8 dark:bg-white/8" />
                <div className="h-5 w-4/5 rounded bg-black/8 dark:bg-white/8" />
                <div className="h-5 w-3/5 rounded bg-black/8 dark:bg-white/8" />
              </div>

              <div className="space-y-3">
                <div className="h-4 w-40 rounded bg-black/10 dark:bg-white/10" />
                <div className="h-7 w-24 rounded-full bg-black/10 dark:bg-white/10" />
              </div>

              <div className="space-y-3">
                <div className="h-4 w-36 rounded bg-black/10 dark:bg-white/10" />
                <div className="flex flex-wrap gap-3">
                  <div className="h-7 w-36 rounded-full bg-black/10 dark:bg-white/10" />
                  <div className="h-7 w-44 rounded-full bg-black/10 dark:bg-white/10" />
                </div>
              </div>
            </div>
          </div>
          <span className="sr-only">Ładowanie…</span>
        </div>
      </SectionContainer>
    </MainWrapper>
  );
}
