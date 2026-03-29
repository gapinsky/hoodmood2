import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring/35",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/12 text-primary dark:bg-primary/18",
        secondary:
          "ui-surface-soft border-black/[0.06] text-foreground/80 hover:bg-accent/70 dark:border-white/[0.08]",
        destructive:
          "border-transparent bg-destructive/14 text-red-700 shadow-sm hover:bg-destructive/18 dark:text-red-200",
        outline: "ui-surface-soft text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
