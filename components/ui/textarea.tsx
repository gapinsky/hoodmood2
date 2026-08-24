import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "ui-focus-ring ui-field ui-interactive flex min-h-[120px] w-full rounded-lg px-4 py-3 text-base text-foreground placeholder:text-black/48 motion-safe:hover:border-black/[0.12] motion-safe:hover:bg-white/90 dark:motion-safe:hover:border-white/[0.16] dark:motion-safe:hover:bg-white/[0.09] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-white/32 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
