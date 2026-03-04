import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function SectionContainer({ children }: Props) {
  return (
    <section className="flex flex-col gap-16 px-8   lg:px-12 xl:px-16 max-w-380  mx-auto ">
      {children}
    </section>
  );
}
