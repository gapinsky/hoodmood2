type EnrollmentStepLayoutProps = {
  children: React.ReactNode;
};

export default function EnrollmentStepLayout({
  children,
}: EnrollmentStepLayoutProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-8">
      {children}
    </div>
  );
}