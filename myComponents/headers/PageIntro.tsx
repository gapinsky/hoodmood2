import type { ReactNode } from "react";
import PageContent from "./PageContent";

type Props = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
  titleWidth?: "normal" | "wide";
};

export default function PageIntro({ eyebrow, title, description, children, titleWidth = "wide" }: Props) {
  return (
    <div className="space-y-8">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--brand-700) dark:text-(--brand-400)">
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <PageContent
        title={title}
        description={description}
        styles={`gap-5 [&_h1]:text-5xl [&_h1]:leading-[1.05] [&_h1]:tracking-tight sm:[&_h1]:text-6xl xl:[&_h1]:text-7xl ${titleWidth === "normal" ? "[&_h1]:max-w-3xl" : "[&_h1]:max-w-4xl"}`}
      />
      {children}
    </div>
  );
}
