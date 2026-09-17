import { regulations } from "./data";

export default function Regulations() {
  return (
    <div className="space-y-8">
      {regulations.map((section) => (
        <article
          key={section.title}
          id={section.id}
          className="scroll-mt-28 rounded-2xl bg-white p-6 dark:bg-neutral-900"
        >
          <h2 className="text-lg">{section.title}</h2>

          <ol className="mt-4 space-y-3">
            {section.points.map((point, index) => (
              <li
                key={index}
                id={point.startsWith("Aktywny kursant Hoodmood –") ? "aktywny-kursant" : undefined}
                className="scroll-mt-28 flex gap-3 text-sm leading-7 md:text-base"
              >
                <span className="min-w-6 font-semibold text-neutral-500 dark:text-neutral-400">
                  {index + 1}.
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}
