import { useId } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { selectContentStyles, selectItemStyles, selectTriggerStyles } from "@/myComponents/forms/filterStyles";

type Props<T extends string> = {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly { value: T; label: string }[];
};

export default function OfferSelectFilter<T extends string>({ label, value, onChange, options }: Props<T>) {
  const id = useId();

  return (
    <Field className="flex flex-col gap-2.5">
      <FieldLabel htmlFor={id} className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
        {label}
      </FieldLabel>
      <Select value={value} onValueChange={(selected) => {
        const option = options.find((item) => item.value === selected);
        if (option) onChange(option.value);
      }}>
        <SelectTrigger id={id} className={selectTriggerStyles}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={selectContentStyles}>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} className={selectItemStyles} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
