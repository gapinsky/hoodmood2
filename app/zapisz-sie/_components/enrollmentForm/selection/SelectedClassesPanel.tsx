import type { SelectedClassItem } from "@/lib/schemas/enrollmentSchema";

type SelectedClassesPanelProps = {
  items: SelectedClassItem[];
  onRemove: (index: number) => void;
};

export default function SelectedClassesPanel({
  items,
  onRemove,
}: SelectedClassesPanelProps) {
  const monthlyTotal = items
    .filter((item) => item.billingPeriod === "monthly")
    .reduce((sum, item) => sum + item.price, 0);
  const oneTimeTotal = items
    .filter((item) => item.billingPeriod === "one-time")
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="flex min-w-0 flex-col rounded-[24px] bg-black/1 p-4 backdrop-blur-xl dark:bg-white/5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold opacity-85">Wybrane zajęcia</h3>
        <span className="ui-muted-label text-xs font-semibold uppercase tracking-[0.14em] text-black/75 dark:text-white/45">
          {items.length} wybrane
        </span>
      </div>

      {items.length === 0 ? (
        <div className="flex items-center justify-center rounded-2xl border border-dashed border-white/10 px-4 text-sm leading-7 text-black/58 dark:text-white/50 md:h-55">
          Nie wybrałeś żadnych zajęć. Wybierz z listy zajęcia, które Cię
          interesują, aby przejść dalej.
        </div>
      ) : (
        <div className="flex-1 space-y-3 pr-1 [scrollbar-gutter:stable] md:min-h-55 md:max-h-55 md:overflow-y-scroll">
          {items.map((item, index) => (
            <div
              key={item.clientId}
              className="rounded-2xl border border-white/10 bg-black/3 p-3.5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="inline-flex w-fit min-h-8 items-center justify-center rounded-md border border-black/30 bg-black/5 px-2.5 py-1 text-[11px] font-semibold text-black/55 transition hover:bg-black/10 dark:bg-white/10 dark:text-white/65 dark:hover:bg-white/15"
                >
                  Usuń
                </button>
                <div className="min-w-0 flex-1 text-sm text-black/82 dark:text-white/85">
                  <p className="font-medium">{item.classTypeName}</p>
                  <p className="ui-muted-label text-xs leading-5 dark:text-white/45">
                    {item.locationName} • {item.timeLabel}
                  </p>
                </div>
                <div className="text-sm font-semibold text-foreground dark:text-white">
                  {item.price.toFixed(2).replace(".", ",")} zł
                  <span className="ui-muted-label ml-1 text-[11px] font-normal dark:text-white/45">
                    / {item.billingPeriod === "one-time" ? "jednorazowo" : "miesięcznie"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 border-t border-white/15 pt-4">
        <div className="flex items-center justify-between gap-1.5">
          <p className="ui-muted-label text-sm uppercase tracking-[0.12em] dark:text-white/45">
            Razem
          </p>

          <div className="flex items-start gap-4 text-right">
            {oneTimeTotal > 0 ? (
              <div>
                <p className="text-lg font-semibold text-foreground dark:text-white md:text-xl">
                  {oneTimeTotal.toFixed(2).replace(".", ",")} zł
                </p>
                <p className="ui-muted-label text-xs dark:text-white/45">
                  jednorazowo
                </p>
              </div>
            ) : null}
            <div>
              <p className="text-lg font-semibold text-foreground dark:text-white md:text-xl">
                {monthlyTotal.toFixed(2).replace(".", ",")} zł
              </p>
              <p className="ui-muted-label text-xs dark:text-white/45">
                miesięcznie
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
