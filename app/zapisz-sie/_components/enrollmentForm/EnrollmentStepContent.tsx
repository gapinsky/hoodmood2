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
        "flex h-[650px] w-full flex-col  overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
