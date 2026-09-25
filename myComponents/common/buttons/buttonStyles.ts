const buttonBaseStyles =
  "ui-focus-ring relative inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-out motion-safe:active:scale-[0.98] motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0";

export const buttonPrimaryStyles = `${buttonBaseStyles} min-w-24 border-(--brand-700) bg-(--brand-700) text-white hover:border-(--brand-800) hover:bg-(--brand-800)`;

export const buttonSecondaryStyles = `${buttonBaseStyles} border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5`;
