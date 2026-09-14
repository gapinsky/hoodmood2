import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "ui-focus-ring ui-field ui-interactive flex min-h-30 w-full rounded-lg px-4 py-3 text-base text-foreground placeholder:text-black/48 motion-safe:hover:border-black/12 motion-safe:hover:bg-white/90 dark:focus-visible:border-ring dark:motion-safe:hover:border-white/16 dark:motion-safe:hover:bg-white/9 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-white/32 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
