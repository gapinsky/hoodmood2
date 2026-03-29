type EnrollmentStep = {
  navLabel: string;
  title: string;
  description: string;
};

type EnrollmentStepHeaderProps = {
  currentStep: number;
  steps: EnrollmentStep[];
};

export default function EnrollmentStepHeader({
  currentStep,
  steps,
}: EnrollmentStepHeaderProps) {
  const progress = ((currentStep + 1) / steps.length) * 100;
  const step = steps[currentStep];

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <div
          className="grid gap-2 text-[11px] sm:gap-3 sm:text-xs"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((item, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={item.navLabel}
                className={`flex min-h-11 min-w-0 items-center justify-center gap-2  px-2 py-2 text-center transition sm:px-3 ${
                  isActive
                    ? " text-foreground dark:text-white"
                    : isCompleted
                      ? " text-black/72 dark:text-white/75"
                      : " text-black/48 dark:text-white/40"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold ${
                    isActive
                      ? "bg-[#ac4967] text-white"
                      : "bg-white/10 text-black/55 dark:text-white/55"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="truncate text-[11px] leading-none sm:text-xs hidden md:block lg:text-sm font-semibold">
                  {item.navLabel}
                </span>
              </div>
            );
          })}
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#ac4967] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className=" text-xl leading-8  md:text-2xl">{step.title}</h2>
        <p className="ui-muted-copy max-w-2xl text-sm leading-6 md:text-[15px] dark:text-white/68">
          {step.description}
        </p>
      </div>
    </div>
  );
}
