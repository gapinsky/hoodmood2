import { regulations } from "./data";

export default function Regulations() {
  return (
    <div className="space-y-8">
      {regulations.map((section) => (
        <article
          key={section.title}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h2 className="text-lg">{section.title}</h2>

          <ol className="mt-4 space-y-3">
            {section.points.map((point, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm leading-7 md:text-base"
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
