import { useFieldArray, useFormContext } from "react-hook-form";

import { enrollmentLocationOptions } from "@/lib/data/enrollment-classes";
import type {
  EnrollmentFormData,
  SelectedClassItem,
} from "@/lib/schemas/enrollmentSchema";

import ClassConfigurator from "../selection/ClassConfigurator";
import SelectedClassesPanel from "../selection/SelectedClassesPanel";

type StepClassesSelectionProps = {
  mode?: "default" | "configurator" | "summary";
};

export default function StepClassesSelection({
  mode = "default",
}: StepClassesSelectionProps) {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<EnrollmentFormData>();

  const { append, remove } = useFieldArray({
    control,
    name: "selectedClasses",
  });

  const items = (watch("selectedClasses") as SelectedClassItem[]) ?? [];
  const participantType = watch("participantType");
  const participantAge = watch("participantAge");
  const selectedLocationId = watch("selectedLocationId");

  const selectedLocation =
    enrollmentLocationOptions.find(
      (location) => location.id === selectedLocationId,
    ) ?? null;

  const selectedLocationLocativeLabel =
    selectedLocation?.locativeLabel ?? "wybranej lokalizacji";

  const availabilityLabel =
    participantType === "adult"
      ? `Zajęcia w ${selectedLocationLocativeLabel} dla dorosłych.`
      : `Zajęcia w ${selectedLocationLocativeLabel} dla ${
          participantAge ? `${participantAge} latków.` : "wybranego wieku."
        }`;

  const configuratorContent = (
    <div className="space-y-4">
      <div className="text-md font-anton tracking-wide">
        {availabilityLabel}
      </div>

      <ClassConfigurator
        items={items}
        participantType={participantType}
        participantAge={participantAge}
        selectedLocationId={selectedLocationId}
        onAdd={(item) => append(item)}
      />

      <span
        className={`block min-h-6 pl-1 text-sm text-red-400 ${
          errors.selectedClasses ? "visible" : "invisible"
        }`}
      >
        {errors.selectedClasses?.message || "\u00A0"}
      </span>
    </div>
  );

  if (mode === "configurator") {
    return configuratorContent;
  }

  if (mode === "summary") {
    return <SelectedClassesPanel items={items} onRemove={remove} />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(320px,0.9fr)_minmax(360px,1fr)] xl:items-start ">
      {configuratorContent}

      <SelectedClassesPanel items={items} onRemove={remove} />
    </div>
  );
}
