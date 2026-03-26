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
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((item, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={item.navLabel}
                className={`flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-2xl border px-2 py-2 text-center transition sm:px-3 ${
                  isActive
                    ? "border-white/18 bg-white/[0.05] text-white"
                    : isCompleted
                      ? "border-white/12 bg-white/[0.03] text-white/75"
                      : "border-white/8 bg-transparent text-white/40"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold ${
                    isActive || isCompleted
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

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#ac4967] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-[var(--anton)] text-2xl leading-none text-white md:text-[2rem]">
          {step.title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-white/68 md:text-[15px]">
          {step.description}
        </p>
      </div>
    </div>
  );
}
