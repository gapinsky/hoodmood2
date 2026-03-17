import React from "react";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="my-24 ">{children}</main>;
}
