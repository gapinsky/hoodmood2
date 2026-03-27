"use client";

import Image from "next/image";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  enrollmentSchema,
  type EnrollmentFormData,
} from "@/lib/schemas/enrollmentSchema";
import FormStatusMessage from "@/myComponents/forms/shared/FormStatusMessage";

import EnrollmentStepContent from "./EnrollmentStepContent";
import EnrollmentStepHeader from "./EnrollmentStepHeader";
import EnrollmentStepLayout from "./EnrollmentStepLayout";
import EnrollmentStepNavigation from "./EnrollmentStepNavigation";
import StepClassesSelection from "./steps/StepClassesSelection";
import StepContactDetails from "./steps/StepContactDetails";
import StepParticipant from "./steps/StepParticipant";
import StepSummary from "./steps/StepsSummary";

type SubmitStatus = {
  type: "success" | "error" | null;
  message: string;
};

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
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

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

    setSubmitStatus({ type: null, message: "" });
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setSubmitStatus({ type: null, message: "" });
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: EnrollmentFormData) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      console.log("FORM DATA", data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        type: "success",
        message:
          "Zgłoszenie zostało wysłane pomyślnie. Skontaktujemy się z Tobą wkrótce.",
      });

      reset(defaultValues);
      setCurrentStep(0);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie.",
      });
    }
  };

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isClassesStep = currentStep === 1;

  return (
    <FormProvider {...methods}>
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
              {submitStatus.type && (
                <FormStatusMessage
                  type={submitStatus.type}
                  message={submitStatus.message}
                />
              )}

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
