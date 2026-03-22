type EnrollmentStepHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export default function EnrollmentStepHeader({
  badge,
  title,
  description,
}: EnrollmentStepHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex w-fit rounded-full bg-[#ac4967] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
        {badge}
      </div>

      <div className="space-y-3">
        <h2 className="font-[var(--anton)] text-4xl leading-none text-white md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}