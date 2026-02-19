import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function Description({ children }: Props) {
  return <p className="">{children}</p>;
}
