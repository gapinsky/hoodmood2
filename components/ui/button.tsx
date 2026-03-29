import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap uppercase rounded-full text-sm font-semibold tracking-[0.15em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[4px] focus-visible:ring-ring/35 active:scale-[0.985]",
  {
    variants: {
      variant: {
        default:
          "border border-white/[0.08] bg-[linear-gradient(180deg,var(--brand-600),var(--brand-800))] text-white ring-1 ring-inset ring-white/[0.10] shadow-md hover:-translate-y-[1px] hover:bg-[linear-gradient(180deg,var(--brand-500),var(--brand-700))] focus-visible:ring-white/40",
        destructive:
          "border border-red-500/30 bg-[linear-gradient(180deg,rgba(220,38,38,0.95),rgba(153,27,27,0.95))] text-white shadow-md hover:-translate-y-[1px] hover:brightness-105 focus-visible:ring-red-500/30",
        outline:
          "ui-surface-soft ui-outline border border-black/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(245,241,243,0.92))] text-[#21191d] hover:-translate-y-[1px] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,234,237,0.98))] dark:border-white/[0.10] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] dark:text-white/92 dark:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.07))]",
        secondary:
          "ui-surface-soft ui-outline rounded-full border border-black/[0.08] bg-secondary text-secondary-foreground hover:-translate-y-[1px] hover:bg-accent dark:border-white/[0.10]",
        ghost:
          "text-foreground/80 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/60",
        link: "ui-link text-sm tracking-[0.12em] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-full px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-full px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
