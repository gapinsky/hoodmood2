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
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/55">
          {steps.map((item, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={item.navLabel}
                className={`inline-flex items-center gap-2 transition ${
                  isActive ? "text-white" : "text-white/45"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-[4px] text-[10px] font-semibold ${
                    isActive || isCompleted
                      ? "bg-[#ac4967] text-white"
                      : "bg-white/10 text-white/55"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-sm">{item.navLabel}</span>
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
        <h2 className="font-[var(--anton)] text-3xl leading-none text-white md:text-4xl">
          {step.title}
        </h2>
        <p className="max-w-xl text-sm leading-7 text-white/70 md:text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
}
