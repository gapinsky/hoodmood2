import { useId } from "react";
import { CircleX, type LucideIcon } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { inputStyles } from "@/myComponents/forms/filterStyles";

type Props = {
  label: string;
  placeholder: string;
  clearLabel: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  numeric?: boolean;
};

export default function OfferTextFilter({ label, placeholder, clearLabel, value, onChange, icon: Icon, numeric = false }: Props) {
  const id = useId();

  return (
    <Field className="flex flex-col gap-2.5">
      <FieldLabel htmlFor={id} className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
        {label}
      </FieldLabel>
      <InputGroup className={inputStyles}>
        <InputGroupInput
          id={id}
          placeholder={placeholder}
          type="text"
          inputMode={numeric ? "numeric" : "text"}
          value={value}
          onChange={(event) => onChange(numeric ? event.currentTarget.value.replace(/\D/g, "").slice(0, 2) : event.currentTarget.value)}
        />
        <InputGroupAddon className="text-black/35 dark:text-white/35">
          <Icon className="size-4" aria-hidden="true" />
        </InputGroupAddon>
        {value !== "" && (
          <InputGroupAddon align="inline-end">
            <button
              type="button"
              onClick={() => onChange("")}
              className="ui-focus-ring ui-interactive inline-flex items-center gap-1 rounded-full px-2 text-xs text-black/45 hover:cursor-pointer motion-safe:hover:text-black/75 focus-visible:ring-2 focus-visible:ring-ring/35 dark:text-white/45 dark:motion-safe:hover:text-white/70"
              aria-label={clearLabel}
            >
              <CircleX className="size-4" aria-hidden="true" />
            </button>
          </InputGroupAddon>
        )}
      </InputGroup>
    </Field>
  );
}
