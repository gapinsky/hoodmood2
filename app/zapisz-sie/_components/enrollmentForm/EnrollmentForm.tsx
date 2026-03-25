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

import EnrollmentStepHeader from "./EnrollmentStepHeader";
import EnrollmentStepLayout from "./EnrollmentStepLayout";
import EnrollmentStepNavigation from "./EnrollmentStepNavigation";
import StepClassesSelection from "./steps/StepClassesSelection";
import StepConsents from "./steps/StepConsents";
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
  selectedClasses: [],
  parentFullName: "",
  email: "",
  phone: "",
  notes: "",
  termsAccepted: false,
  privacyAccepted: false,
};

const steps = [
  {
    navLabel: "Start",
    title: "Kogo chcesz zapisać?",
    description:
      "Podaj podstawowe informacje o uczestniku, abyśmy mogli przejść do kolejnych kroków zapisu.",
    imageSrc: "/assets/images/enrollmentForm/people.svg",
    imageAlt: "Uczestnicy zajęć podczas rozgrzewki",
  },
  {
    navLabel: "Zajęcia",
    title: "Wybierz lokalizację i zajęcia",
    description:
      "Dodaj jedne lub kilka zajęć. Po prawej stronie zobaczysz aktualne podsumowanie i ceny.",
    imageSrc: "/assets/images/enrollmentForm/target.svg",
    imageAlt: "Ilustracja wyboru zajęć",
  },
  {
    navLabel: "Kontakt",
    title: "Dane kontaktowe",
    description:
      "Podaj dane opiekuna, abyśmy mogli potwierdzić zgłoszenie i przekazać szczegóły organizacyjne.",
    imageSrc: "/assets/images/enrollmentForm/calendar.svg",
    imageAlt: "Ilustracja danych kontaktowych",
  },
  {
    navLabel: "Podsumowanie",
    title: "Sprawdź, czy wszystko się zgadza",
    description:
      "Na tym etapie możesz jeszcze raz sprawdzić wybrane zajęcia, terminy i łączny koszt.",
    imageSrc: "/assets/images/enrollmentForm/checking.svg",
    imageAlt: "Ilustracja podsumowania zgłoszenia",
  },
  {
    navLabel: "Zgody",
    title: "Zgody i wysyłka",
    description: "Zaakceptuj wymagane zgody i wyślij formularz zgłoszeniowy.",
    imageSrc: "/assets/images/enrollmentForm/confirmed.svg",
    imageAlt: "Ilustracja potwierdzenia zapisu",
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
        ]);
      case 1:
        return trigger(["selectedClasses"]);
      case 2:
        return trigger(["parentFullName", "email", "phone", "notes"]);
      case 3:
        return true;
      case 4:
        return trigger(["termsAccepted", "privacyAccepted"]);
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

  return (
    <FormProvider {...methods}>
      <EnrollmentStepLayout
        illustration={
          <div className="relative mx-auto aspect-[1.05] w-full">
            <Image
              alt={step.imageAlt}
              src={step.imageSrc}
              fill
              className="object-contain"
              sizes="(max-width: 1279px) 70vw, 35vw"
              priority
            />
          </div>
        }
      >
        <div className="flex h-full flex-col gap-6">
          <EnrollmentStepHeader currentStep={currentStep} steps={steps} />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col gap-6"
            noValidate
          >
            {submitStatus.type && (
              <FormStatusMessage
                type={submitStatus.type}
                message={submitStatus.message}
              />
            )}

            {currentStep === 0 && <StepParticipant />}
            {currentStep === 1 && <StepClassesSelection />}
            {currentStep === 2 && <StepContactDetails />}
            {currentStep === 3 && <StepSummary />}
            {currentStep === 4 && <StepConsents />}

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
      </EnrollmentStepLayout>
    </FormProvider>
  );
}
