import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import type { LucideIcon } from "lucide-react";

type FormTextareaFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  icon?: LucideIcon;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  disabled?: boolean;
  textareaClassName?: string;
};

export default function FormTextareaField({
  id,
  label,
  placeholder,
  icon: Icon,
  registration,
  error,
  disabled = false,
  textareaClassName = "min-h-[200px]",
}: FormTextareaFieldProps) {
  const errorId = `${id}-error`;

  return (
    <Field className="flex flex-col gap-2.5">
      <FieldLabel
        htmlFor={id}
        className="pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
      >
        {label}
      </FieldLabel>

      <InputGroup className={inputStyles}>
        <InputGroupTextarea
          id={id}
          placeholder={placeholder}
          className={textareaClassName}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...registration}
        />
        {Icon ? (
          <InputGroupAddon align="block-start" className="border-b">
            <Icon className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>
        ) : null}
      </InputGroup>

      <span
        id={error ? errorId : undefined}
        className={`min-h-5 pl-1 text-xs text-red-600 dark:text-red-400 ${
          error ? "visible" : "invisible"
        }`}
      >
        {error?.message || "\u00A0"}
      </span>
    </Field>
  );
}
