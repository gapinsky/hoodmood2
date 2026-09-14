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

  const { append, remove } = useFieldArray({
    control,
    name: "selectedClasses",
  });

  const items = (watch("selectedClasses") as SelectedClassItem[]) ?? [];
  const participantType = watch("participantType");
  const participantAge = watch("participantAge");
  const selectedLocationId = watch("selectedLocationId");

  const configuratorContent = (
    <div className="flex min-h-0 min-w-0 flex-col gap-2">
      <ClassConfigurator
        isHoodmoodMember={watch("isHoodmoodMember")}
        items={items}
        participantType={participantType}
        participantAge={participantAge}
        selectedLocationId={selectedLocationId}
        onAdd={(item) => append(item)}
      />

      <span
        className={`block shrink-0 min-h-6 pl-1 text-sm text-red-400 ${
          errors.selectedClasses ? "visible" : "invisible"
        }`}
      >
        {errors.selectedClasses?.message || "\u00A0"}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-5 lg:h-full lg:min-h-0 lg:grid-rows-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-stretch  ">
      {configuratorContent}
      <SelectedClassesPanel items={items} onRemove={remove} />
    </div>
  );
}
