import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import type { LucideIcon } from "lucide-react";

type FormTextFieldProps = {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  icon: LucideIcon;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  disabled?: boolean;
  wrapperClassName?: string;
};

export default function FormTextField({
  id,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  registration,
  error,
  disabled = false,
  wrapperClassName = "flex flex-col gap-2.5 ",
}: FormTextFieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <Field className={wrapperClassName}>
      <FieldLabel
        htmlFor={id}
        className="pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
      >
        {label}
      </FieldLabel>

      <InputGroup className={inputStyles}>
        <InputGroupInput
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...registration}
        />
        <InputGroupAddon>
          <Icon className="text-black/35 dark:text-white/35" />
        </InputGroupAddon>
      </InputGroup>

      <span
        id={errorId}
        className={`min-h-5 pl-1 text-xs text-red-600 dark:text-red-400 ${
          error ? "visible" : "invisible"
        }`}
      >
        {error?.message || "\u00A0"}
      </span>
    </Field>
  );
}
