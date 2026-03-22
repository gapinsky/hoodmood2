import { Field, FieldLabel } from "@/components/ui/field";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type FormSelectFieldProps = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  options: Option[];
  error?: FieldError;
  disabled?: boolean;
  placeholder?: string;
  wrapperClassName?: string;
};

export default function FormSelectField({
  id,
  label,
  registration,
  options,
  error,
  disabled = false,
  placeholder = "Wybierz opcję",
  wrapperClassName = "flex flex-col gap-2.5",
}: FormSelectFieldProps) {
  const errorId = `${id}-error`;

  return (
    <Field className={wrapperClassName}>
      <FieldLabel
        htmlFor={id}
        className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
      >
        {label}
      </FieldLabel>

      <select
        id={id}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className="h-12 rounded-2xl border border-black/[0.08] bg-white/80 px-4 text-[#21191d] shadow-[0_8px_20px_rgba(0,0,0,0.06)] backdrop-blur-lg ring-1 ring-inset ring-black/[0.03] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#21191d]/20 dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-white/92 dark:ring-white/[0.05] dark:shadow-[0_8px_20px_rgba(0,0,0,0.18)] dark:focus-visible:ring-white/85"
        {...registration}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <span
        id={errorId}
        className={`min-h-10 pl-1 text-xs leading-5 text-red-600 dark:text-red-400 ${
          error ? "visible" : "invisible"
        }`}
      >
        {error?.message ?? "\u00A0"}
      </span>
    </Field>
  );
}