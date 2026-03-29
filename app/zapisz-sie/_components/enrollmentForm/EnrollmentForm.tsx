"use client";

import Confetti from "react-confetti";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { submitEnrollmentForm } from "@/app/zapisz-sie/actions";
import {
  enrollmentSchema,
  type EnrollmentFormData,
} from "@/lib/schemas/enrollmentSchema";

import EnrollmentStepContent from "./EnrollmentStepContent";
import EnrollmentStepHeader from "./EnrollmentStepHeader";
import EnrollmentStepLayout from "./EnrollmentStepLayout";
import EnrollmentStepNavigation from "./EnrollmentStepNavigation";
import StepClassesSelection from "./steps/StepClassesSelection";
import StepContactDetails from "./steps/StepContactDetails";
import StepParticipant from "./steps/StepParticipant";
import StepSummary from "./steps/StepsSummary";

const defaultValues: EnrollmentFormData = {
  participantFullName: "",
  participantType: "youth",
  participantAge: "",
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
    imageSrc: "/assets/images/enrollmentForm/target.svg",
    imageAlt: "Uczestnicy zajęć podczas rozgrzewki",
  },
  {
    navLabel: "Zajęcia",
    title: "Wybierz zajęcia które Cię interesują",
    description:
      "Dodaj jedne lub kilka zajęć. Po prawej stronie zobaczysz aktualne podsumowanie i ceny.",
    imageSrc: "/assets/images/enrollmentForm/target.svg",
    imageAlt: "Ilustracja wyboru zajęć",
  },
  {
    navLabel: "Kontakt",
    title: "Dane kontaktowe",
    description:
      "Podaj dane kontaktowe, abyśmy mogli potwierdzić zgłoszenie i przekazać szczegóły organizacyjne.",
    imageSrc: "/assets/images/enrollmentForm/contact_details.svg",
    imageAlt: "Ilustracja danych kontaktowych",
  },
  {
    navLabel: "Podsumowanie",
    title: "Sprawdź czy wszystko się zgadza",
    description:
      "Upewnij się, że wszystkie dane są poprawne. Jeśli wszystko jest w porządku, zaakceptuj regulamin i wyślij zgłoszenie. Czekamy na ciebie w studio!",
    imageSrc: "/assets/images/enrollmentForm/summary.svg",
    imageAlt: "Ilustracja podsumowania zgłoszenia",
  },
];

export default function EnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

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
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (!showConfetti) return;

    const timeout = window.setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [showConfetti]);

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
      window.setTimeout(() => setIsSuccessDialogOpen(true), 0);
    } catch {
      toast.error("Nie udało się wysłać zgłoszenia. Spróbuj ponownie.");
    }
  };

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isClassesStep = currentStep === 1;

  return (
    <FormProvider {...methods}>
      {showConfetti && viewport.width > 0 && viewport.height > 0 ? (
        <Confetti
          width={viewport.width}
          height={viewport.height}
          recycle={false}
          numberOfPieces={260}
          gravity={0.28}
          className="pointer-events-none fixed inset-0 z-[100]"
        />
      ) : null}

      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="relative max-w-md overflow-hidden text-white [&>button]:hidden">
          <div className="relative z-10 flex flex-col items-center gap-5 px-2 py-4 text-center">
            <div className="relative h-36 w-full max-w-56">
              <Image
                src="/assets/images/enrollmentForm/celebrate.svg"
                alt="Sukces zapisu"
                fill
                className="object-contain"
                sizes="224px"
              />
            </div>

            <DialogTitle className="text-2xl font-semibold leading-none text-white">
              Sukces!
            </DialogTitle>

            <DialogDescription className="max-w-sm text-base leading-7 text-white/85">
              Dziękujemy za zapis na zajęcia. Wysłaliśmy Ci mail z
              potwierdzeniem i najważniejszymi informacjami. Do zobaczenia
            </DialogDescription>

            <Button
              type="button"
              onClick={() => setIsSuccessDialogOpen(false)}
              className="min-w-32 border border-white/10 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15"
            >
              Zamknij
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <EnrollmentStepLayout
        illustration={
          isClassesStep ? (
            <StepClassesSelection mode="configurator" />
          ) : (
            <div className="relative mx-auto  aspect-[2] w-full ">
              <Image
                alt={step.imageAlt}
                src={step.imageSrc}
                fill
                className="object-contain"
                sizes="(max-width: 1279px) 70vw, 35vw"
                priority
              />
            </div>
          )
        }
        illustrationContainerClassName={
          isClassesStep
            ? "items-start justify-stretch p-4 md:p-5 lg:p-6"
            : "p-4 md:p-5 lg:p-6"
        }
        illustrationContentClassName={isClassesStep ? "max-w-none" : undefined}
      >
        <EnrollmentStepContent>
          <div className="flex h-full flex-col gap-5 md:gap-6">
            <EnrollmentStepHeader currentStep={currentStep} steps={steps} />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-1 flex-col gap-4 md:gap-5"
              noValidate
            >
              <div className="flex-1">
                {currentStep === 0 && <StepParticipant />}
                {currentStep === 1 && <StepClassesSelection mode="summary" />}
                {currentStep === 2 && <StepContactDetails />}
                {currentStep === 3 && <StepSummary showConsents />}
              </div>

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
        </EnrollmentStepContent>
      </EnrollmentStepLayout>
    </FormProvider>
  );
}
