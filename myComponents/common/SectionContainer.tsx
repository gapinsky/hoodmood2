import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function SectionContainer({ children }: Props) {
  return (
    <div className="flex flex-col  gap-8 px-8 md:gap-16 md:px-8 lg:px-12 xl:px-16 max-w-380  mx-auto  ">
      {children}
    </div>
  );
}
