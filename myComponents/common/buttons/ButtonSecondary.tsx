import ButtonBase, { type ButtonProps } from "./ButtonBase";
import { buttonSecondaryStyles } from "./buttonStyles";
import { cn } from "@/lib/utils";

export default function ButtonSecondary({ className, ...props }: ButtonProps) {
  return <ButtonBase {...props} className={cn(buttonSecondaryStyles, className)} />;
}
