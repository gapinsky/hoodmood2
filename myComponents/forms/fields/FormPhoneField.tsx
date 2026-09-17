"use client";

import { useState } from "react";
import { getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { Popover } from "radix-ui";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { inputStyles } from "@/myComponents/forms/filterStyles";

const names = new Intl.DisplayNames(["pl"], { type: "region" });
const countries = getCountries().map((country) => ({
  country,
  name: names.of(country) ?? country,
  prefix: `+${getCountryCallingCode(country)}`,
  flag: String.fromCodePoint(...[...country].map((letter) => 127397 + letter.charCodeAt(0))),
})).sort((a, b) => a.name.localeCompare(b.name, "pl"));

const searchable = (value: string) => value.toLocaleLowerCase("pl").normalize("NFD").replace(/\p{M}/gu, "").replace(/ł/g, "l");

type Props = {
  id: string;
  country: CountryCode;
  countryRegistration: UseFormRegisterReturn;
  phoneRegistration: UseFormRegisterReturn;
  countryError?: FieldError;
  phoneError?: FieldError;
  disabled?: boolean;
};

export default function FormPhoneField({ id, country, countryRegistration, phoneRegistration, countryError, phoneError, disabled }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const selected = countries.find((item) => item.country === country);
  const options = countries.filter((item) => searchable(`${item.name} ${item.country} ${item.prefix}`).includes(searchable(query.trim())));
  const error = countryError ?? phoneError;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      <label htmlFor={id} className="ui-muted-label pl-1 text-xs font-semibold uppercase tracking-[0.16em]">
        Numer telefonu
      </label>
      <input type="hidden" {...countryRegistration} value={country} />
      <InputGroup className={inputStyles}>
        <Popover.Root open={open} onOpenChange={(value) => {
          setOpen(value);
          if (value) setQuery("");
          else void countryRegistration.onBlur({ target: { name: countryRegistration.name, value: country }, type: "blur" });
        }}>
          <Popover.Trigger asChild>
            <button
              type="button"
              disabled={disabled}
              aria-label={`Wybierz kraj telefonu: ${selected?.name ?? country}, ${selected?.prefix ?? ""}`}
              aria-invalid={!!countryError}
              aria-describedby={errorId}
              className="ui-focus-ring flex h-full shrink-0 items-center gap-2 border-r border-foreground/10 px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span aria-hidden="true">{selected?.flag} {selected?.prefix}</span>
              <ChevronDown className="size-3.5 opacity-50" aria-hidden="true" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={6}
              aria-label="Wybierz kraj telefonu"
              className="z-50 w-72 max-w-[calc(100vw-2rem)] rounded-lg border border-foreground/10 bg-background p-2 text-foreground shadow-xl"
            >
              <input
                type="search"
                aria-label="Szukaj kraju lub prefiksu telefonu"
                placeholder="Szukaj kraju lub prefiksu"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={`${inputStyles} mb-2 w-full px-3 py-2 text-sm`}
              />
              <div className="max-h-60 overflow-y-auto">
                {options.map((item) => (
                  <button
                    key={item.country}
                    type="button"
                    aria-pressed={item.country === country}
                    className="ui-focus-ring flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-accent aria-pressed:bg-accent"
                    onClick={() => {
                      void countryRegistration.onChange({ target: { name: countryRegistration.name, value: item.country }, type: "change" });
                      void countryRegistration.onBlur({ target: { name: countryRegistration.name, value: item.country }, type: "blur" });
                      setOpen(false);
                    }}
                  >
                    <span aria-hidden="true">{item.flag}</span>
                    <span className="flex-1">{item.name}</span>
                    <span>{item.prefix}</span>
                  </button>
                ))}
                {options.length === 0 && <p className="px-3 py-2 text-sm text-muted-foreground" role="status">Nie znaleziono kraju.</p>}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        <InputGroupInput
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="577 198 599"
          {...phoneRegistration}
          aria-invalid={!!phoneError}
          aria-describedby={errorId}
          disabled={disabled}
        />
      </InputGroup>
      <span id={errorId} className={`min-h-5 pl-1 text-xs text-red-600 dark:text-red-400 ${error ? "visible" : "invisible"}`}>
        {error?.message || "\u00A0"}
      </span>
    </div>
  );
}
