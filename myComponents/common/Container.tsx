import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function Container({ children }: Props) {
  return <div className="px-4 md:px-8 lg:px-12 xl:px-16">{children}</div>;
}
