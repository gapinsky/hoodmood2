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
    <div className="flex shrink-0 flex-col gap-5">
      <div className="space-y-3">
        <ol
          aria-label="Etapy zapisu"
          className="grid gap-2 text-[11px] sm:gap-3 sm:text-xs"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((item, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <li
                aria-current={isActive ? "step" : undefined}
                key={item.navLabel}
                className={`flex min-h-11 min-w-0 flex-col sm:flex-row items-center justify-center gap-2 py-2 text-center transition sm:px-3 ${
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
                      : "bg-foreground/10 text-black/55 dark:text-white/55"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="truncate text-[10px] leading-none sm:text-xs font-medium">
                  {item.navLabel}
                </span>
              </li>
            );
          })}
        </ol>

        <div aria-hidden="true" className="h-0.5 w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full rounded-full bg-[#ac4967] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3 pt-4" aria-live="polite">
        <h2 className="text-2xl leading-tight sm:text-3xl">{step.title}</h2>
        <p className="ui-muted-copy max-w-2xl text-sm leading-6 md:text-[15px] dark:text-white/68">
          {step.description}
        </p>
      </div>
    </div>
  );
}
