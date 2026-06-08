"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useRevealInView } from "@/myComponents/common/ViewportReveal";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { ref: revealRef, revealed } = useRevealInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -4% 0px",
  });

  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      revealRef.current = node;

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      if (ref) {
        ref.current = node;
      }
    },
    [ref, revealRef],
  );

  return (
    <div
      ref={setRefs}
      data-reveal={revealed ? "visible" : "hidden"}
      className={cn(
        "reveal-base reveal-item ui-surface ui-outline ui-card-interactive relative flex flex-col items-stretch justify-evenly overflow-hidden rounded-xl text-card-foreground before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-to-br before:from-white/20 before:via-white/4 before:to-transparent before:opacity-80 motion-safe:before:transition-opacity motion-safe:before:duration-300 dark:before:from-white/10 dark:before:via-white/3",
        className,
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 px-6 pt-6 items-start justify-start",
      className,
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none ", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
