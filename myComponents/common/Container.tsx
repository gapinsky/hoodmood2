import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function Container({ children }: Props) {
  return <div className="w-95% md:w-90% xl:max-w-425 mx-auto ">{children}</div>;
}
