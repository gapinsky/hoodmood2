import { buttonPrimaryStyles } from "@/myComponents/common/ButtonPrimary";
import { buttonSecondaryStyles } from "@/myComponents/common/ButtonSecondary";

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
    <div className="mt-auto grid shrink-0 grid-cols-2 gap-3 border-t border-foreground/10 pt-5 sm:grid-cols-[auto_1fr_auto] sm:items-center ">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentStep === 0 || isSubmitting}
        className={`${buttonSecondaryStyles} w-full sm:w-auto`}
      >
        Wstecz
      </button>

      <div className="ui-muted-label col-span-2 row-start-1 text-center text-xs uppercase tracking-[0.14em] sm:col-span-1 sm:col-start-2">
        Krok {currentStep + 1} z {totalSteps}
      </div>

      {isLastStep ? (
        <button
          key="submit-enrollment"
          type="submit"
          disabled={isSubmitting}
          className={`${buttonPrimaryStyles} min-h-11 w-full justify-center sm:w-auto disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij"}
        </button>
      ) : (
        <button
          key="next-step"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            onNext?.();
          }}
          disabled={isSubmitting}
          className={`${buttonPrimaryStyles} min-h-11 w-full justify-center sm:w-auto`}
        >
          Dalej
        </button>
      )}
    </div>
  );
}
