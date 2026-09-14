"use client";

import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { submitEnrollmentForm } from "@/app/zapisz-sie/actions";
import {
  enrollmentSchema,
  type EnrollmentFormData,
} from "@/lib/schemas/enrollmentSchema";

import EnrollmentPhoto from "./EnrollmentPhoto";
import EnrollmentStepHeader from "./EnrollmentStepHeader";
import EnrollmentStepNavigation from "./EnrollmentStepNavigation";
import StepClassesSelection from "./steps/StepClassesSelection";
import StepContactDetails from "./steps/StepContactDetails";
import StepParticipant from "./steps/StepParticipant";
import StepSummary from "./steps/StepsSummary";

const defaultValues: EnrollmentFormData = {
  participantFullName: "",
  participantType: "youth",
  participantAge: "",
  isHoodmoodMember: true,
  selectedLocationId: "koszalin",
  selectedClasses: [],
  parentFullName: "",
  email: "",
  phone: "",
  notes: "",
  consentsAccepted: false,
};

const steps = [
  {
    navLabel: "Start",
    title: "Kogo chcesz zapisać?",
    description:
      "Podaj podstawowe informacje o uczestniku, abyśmy mogli przejść do kolejnych kroków zapisu.",
  },
  {
    navLabel: "Zajęcia",
    title: "Wybierz zajęcia, które Cię interesują",
    description:
      "Dodaj jedne lub kilka zajęć. Wybrane pozycje i ceny znajdziesz w podsumowaniu.",
  },
  {
    navLabel: "Kontakt",
    title: "Dane kontaktowe",
    description:
      "Podaj dane kontaktowe, abyśmy mogli potwierdzić zgłoszenie i przekazać szczegóły organizacyjne.",
  },
  {
    navLabel: "Podsumowanie",
    title: "Sprawdź, czy wszystko się zgadza",
    description:
      "Upewnij się, że wszystkie dane są poprawne. Jeśli wszystko jest w porządku, zaakceptuj regulamin i wyślij zgłoszenie. Czekamy na ciebie w studio!",
  },
];

export default function EnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const formTopRef = useRef<HTMLDivElement | null>(null);
  const previousStepRef = useRef(currentStep);

  const methods = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    trigger,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (previousStepRef.current === currentStep) return;
    previousStepRef.current = currentStep;

    const frame = window.requestAnimationFrame(() => {
      const formTop = formTopRef.current;
      if (!formTop) return;

      const navbarHeight =
        document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
      const top =
        formTop.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        16;

      window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [currentStep]);

  const validateCurrentStep = async () => {
    switch (currentStep) {
      case 0:
        return trigger([
          "participantFullName",
          "participantType",
          "participantAge",
          "selectedLocationId",
        ]);
      case 1:
        return trigger(["selectedClasses"]);
      case 2:
        return trigger(["parentFullName", "email", "phone", "notes"]);
      case 3:
        return trigger(["consentsAccepted"]);
      default:
        return true;
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: EnrollmentFormData) => {
    try {
      const result = await submitEnrollmentForm(data);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      reset(defaultValues);
      setCurrentStep(0);
      setShowConfetti(true);
      toast.success(
        "Zgłoszenie zostało wysłane! Nasza recepcja wkrótce skontaktuje się z Tobą i przekaże szczegóły zajęć.",
      );
    } catch {
      toast.error("Nie udało się wysłać zgłoszenia. Spróbuj ponownie.");
    }
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <FormProvider {...methods}>
      {showConfetti && viewport.width > 0 && viewport.height > 0 ? (
        <Confetti
          width={viewport.width}
          height={viewport.height}
          recycle={false}
          numberOfPieces={260}
          gravity={0.2}
          tweenDuration={6000}
          onConfettiComplete={() => setShowConfetti(false)}
          className="pointer-events-none fixed left-0 top-0 z-100 max-w-full overflow-hidden"
        />
      ) : null}

      <div ref={formTopRef} className="flex min-w-0 flex-col rounded-md border border-foreground/10 bg-foreground/2.5 p-4 lg:h-225 sm:p-6 lg:p-10 [&_input]:text-base [&_textarea]:text-base">
        <EnrollmentStepHeader currentStep={currentStep} steps={steps} />
        <form
          onSubmit={(event) => {
            if (!isLastStep) {
              event.preventDefault();
              void handleNext();
              return;
            }
            void handleSubmit(onSubmit)(event);
          }}
          className="mt-6 flex min-h-0 min-w-0 flex-1 flex-col gap-5 sm:mt-8"
          noValidate
        >
          {currentStep === 1 ? (
            <div key="classes" className="min-h-0 flex-1 lg:overflow-hidden">
              <StepClassesSelection />
            </div>
          ) : (
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
              <EnrollmentPhoto />
              <div key={currentStep} className="min-h-0 min-w-0 lg:overflow-y-auto lg:pr-2 lg:scrollbar-gutter-stable">
                <div className="mx-auto w-full max-w-xl">
                  {currentStep === 0 && <StepParticipant />}
                  {currentStep === 2 && <StepContactDetails />}
                  {currentStep === 3 && <StepSummary showConsents />}
                </div>
              </div>
            </div>
          )}
          <EnrollmentStepNavigation
            currentStep={currentStep}
            totalSteps={steps.length}
            isSubmitting={isSubmitting}
            onPrev={handlePrev}
            onNext={handleNext}
            isLastStep={isLastStep}
          />
        </form>
      </div>
    </FormProvider>
  );
}
