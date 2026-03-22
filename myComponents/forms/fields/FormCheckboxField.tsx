import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

type FormCheckboxFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  id: string;
  label: React.ReactNode;
  error?: FieldError;
  disabled?: boolean;
};

export default function FormCheckboxField<T extends FieldValues>({
  control,
  name,
  id,
  label,
  error,
  disabled = false,
}: FormCheckboxFieldProps<T>) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <FieldGroup>
      <Field orientation="horizontal">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              id={id}
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={errorId}
            />
          )}
        />

        <FieldLabel htmlFor={id} className="inline-flex max-w-full text-wrap">
          {label}
        </FieldLabel>
      </Field>

      {error && (
        <span
          id={errorId}
          className="pl-1 text-xs text-red-600 dark:text-red-400"
        >
          {error.message}
        </span>
      )}
    </FieldGroup>
  );
}