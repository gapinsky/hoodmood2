type EnrollmentStepLayoutProps = {
  illustration: React.ReactNode;
  children: React.ReactNode;
};

export default function EnrollmentStepLayout({
  illustration,
  children,
}: EnrollmentStepLayoutProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="grid grid-cols-1 gap-8 p-5 md:p-8 xl:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.05fr)] xl:items-stretch">
        <div className="relative flex min-h-[260px] items-center justify-center rounded-[24px] bg-white/[0.03] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_68%)]" />
          <div className="relative w-full max-w-[420px]">{illustration}</div>
        </div>

        <div className="flex min-h-full flex-col">{children}</div>
      </div>
    </div>
  );
}
