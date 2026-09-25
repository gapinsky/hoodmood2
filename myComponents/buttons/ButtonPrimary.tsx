import ButtonBase, { type ButtonProps } from "./ButtonBase";
import { buttonPrimaryStyles } from "./buttonStyles";
import { cn } from "@/lib/utils";

export default function ButtonPrimary({ className, ...props }: ButtonProps) {
  return <ButtonBase {...props} className={cn(buttonPrimaryStyles, className)} />;
}
