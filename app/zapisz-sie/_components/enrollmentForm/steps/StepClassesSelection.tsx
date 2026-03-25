import { useFieldArray, useFormContext } from "react-hook-form";

import type {
  EnrollmentFormData,
  SelectedClassItem,
} from "@/lib/schemas/enrollmentSchema";

import ClassConfigurator from "../selection/ClassConfigurator";
import SelectedClassesPanel from "../selection/SelectedClassesPanel";

export default function StepClassesSelection() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<EnrollmentFormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "selectedClasses",
  });

  const items = fields as SelectedClassItem[];
  const participantType = watch("participantType");
  const participantAge = watch("participantAge");

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
      <div className="space-y-4">
        <ClassConfigurator
          items={items}
          participantType={participantType}
          participantAge={participantAge}
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

      <SelectedClassesPanel items={items} onRemove={remove} />
    </div>
  );
}
