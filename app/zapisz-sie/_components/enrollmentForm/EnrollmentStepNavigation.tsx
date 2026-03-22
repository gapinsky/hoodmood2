import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";

type EnrollmentStepNavigationProps = {
  currentStep: number;
  totalSteps: number;
  isSubmitting?: boolean;
  onPrev: () => void;
  onNext?: () => void;
  isLastStep?: boolean;
};

export default function EnrollmentStepNavigation({
  currentStep,
  totalSteps,
  isSubmitting = false,
  onPrev,
  onNext,
  isLastStep = false,
}: EnrollmentStepNavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentStep === 0 || isSubmitting}
        className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Wstecz
      </button>

      <div className="text-sm text-white/50">
        Krok {currentStep + 1} z {totalSteps}
      </div>

      {isLastStep ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${buttonPrimaryStyes} disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={isSubmitting}
          className={buttonPrimaryStyes}
        >
          Dalej
        </button>
      )}
    </div>
  );
}