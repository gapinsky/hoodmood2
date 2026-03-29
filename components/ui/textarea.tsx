import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "ui-field flex min-h-[120px] w-full rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-black/35 transition-[border-color,box-shadow,background-color] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-white/32",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
