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
    <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between ">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentStep === 0 || isSubmitting}
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Wstecz
      </button>

      <div className="order-first text-center text-xs font-medium uppercase tracking-[0.14em] text-white/45 sm:order-none sm:text-sm sm:tracking-normal">
        Krok {currentStep + 1} z {totalSteps}
      </div>

      {isLastStep ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${buttonPrimaryStyes} min-h-11 w-full justify-center sm:w-auto disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={isSubmitting}
          className={`${buttonPrimaryStyes} min-h-11 w-full justify-center sm:w-auto`}
        >
          Dalej
        </button>
      )}
    </div>
  );
}
