import { useFieldArray, useFormContext } from "react-hook-form";

import { enrollmentLocationOptions } from "@/lib/data/enrollment-classes";
import type {
  EnrollmentFormData,
  SelectedClassItem,
} from "@/lib/schemas/enrollmentSchema";

import ClassConfigurator from "../selection/ClassConfigurator";
import SelectedClassesPanel from "../selection/SelectedClassesPanel";
import { MapPin, User } from "lucide-react";

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

  const configuratorContent = (
    <div className="space-y-4 h-150">
      {/* <div className=" flex  gap-4">
        <p className="font-semibold  opacity-95 md:text-md tracking-wider inline-flex text-sm items-end gap-1 rounded-xl border border-white/10 bg-white/3 px-4 py-2 w-full justify-center md:items-center">
          <User className="w-4 md:w-5 opacity-60" />{" "}
          {participantAge !== "" ? `${participantAge} lat` : "Dorosły"}
        </p>
        <p className="font-semibold  opacity-95 md:text-md tracking-wider inline-flex text-sm items-end gap-1 rounded-xl border border-white/10 bg-white/3 px-4 py-2 w-full justify-center md:items-center">
          <MapPin className="w-4 md:w-5 opacity-60" />
          {selectedLocationLocativeLabel}
        </p>
      </div> */}

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
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(320px,0.92fr)_minmax(340px,1fr)] xl:items-start  ">
      {configuratorContent}
      <SelectedClassesPanel items={items} onRemove={remove} />
    </div>
  );
}
