import { cn } from "@/lib/utils";

type EnrollmentStepContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function EnrollmentStepContent({
  children,
  className,
}: EnrollmentStepContentProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-[24px] bg-white/[0.02] p-4 md:p-5 lg:h-[42rem] lg:overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
