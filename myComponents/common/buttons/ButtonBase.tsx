import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type LinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  blank?: boolean;
  disabled?: never;
};

type NativeButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
  blank?: never;
};

export type ButtonProps = LinkProps | NativeButtonProps;

export default function ButtonBase(props: ButtonProps) {
  if (props.href !== undefined) {
    const { blank, target, rel, ...linkProps } = props;
    return (
      <Link
        {...linkProps}
        target={blank ? "_blank" : target}
        rel={blank ? "noopener noreferrer" : rel}
      />
    );
  }

  return <button type="button" {...props} />;
}
