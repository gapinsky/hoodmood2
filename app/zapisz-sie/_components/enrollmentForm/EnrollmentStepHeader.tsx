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
    <div className="flex flex-col gap-6 b">
      <div className="space-y-4">
        <div
          className="grid gap-2 text-[11px] sm:gap-3 sm:text-xs"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((item, index) => {
            const isActive = index === currentStep;

            return (
              <div
                key={item.navLabel}
                className={`flex  min-w-0 items-center justify-center gap-1.5 rounded-xl  text-center transition sm:gap-2  ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                <span
                  className={`flex w-[18px] shrink-0 items-center justify-center  text-[9px] font-semibold sm:h-5 sm:w-5 sm:text-[10px] rounded-sm ${
                    isActive
                      ? "bg-[#ac4967] text-white"
                      : "bg-white/10 text-white/55"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="truncate text-[11px] leading-none sm:text-xs">
                  {item.navLabel}
                </span>
              </div>
            );
          })}
        </div>

        <div className="h-1 w-full overflow-hidden rounded-full bg-white/12">
          <div
            className="h-full rounded-full bg-[#ac4967] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-[var(--anton)] text-xl leading-none text-white md:text-2xl">
          {step.title}
        </h2>
        <p className="max-w-xl text-sm leading-7 text-white/70 md:text-md">
          {step.description}
        </p>
      </div>
    </div>
  );
}
