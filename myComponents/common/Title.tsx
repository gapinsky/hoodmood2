import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h2 className="">{children}</h2>;
}
