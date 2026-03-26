import type { SelectedClassItem } from "@/lib/schemas/enrollmentSchema";

type SelectedClassesPanelProps = {
  items: SelectedClassItem[];
  onRemove: (index: number) => void;
};

export default function SelectedClassesPanel({
  items,
  onRemove,
}: SelectedClassesPanelProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="flex min-w-0 flex-col rounded-[24px] border border-white/20 bg-white/[0.05] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="font-[var(--anton)] text-lg tracking-wide text-white md:text-xl">
          Moje zajęcia
        </h3>
        <span className="text-xs uppercase tracking-[0.14em] text-white/45">
          {items.length} wybrane
        </span>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-center text-sm leading-7 text-white/50">
          Nie wybrałeś żadnych zajęć. Wybierz z listy zajęcia, które Cię
          interesują, aby przejść dalej.
        </div>
      ) : (
        <div className="space-y-3 md:max-h-[19rem] md:overflow-y-auto md:pr-1">
          {items.map((item, index) => (
            <div
              key={item.clientId}
              className="rounded-2xl border border-white/10 bg-black/10 p-3.5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1 text-sm text-white/85">
                  <p className="font-medium">{item.classTypeName}</p>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    {item.locationName} • {item.timeLabel}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                  <div className="text-sm font-semibold text-white">
                    {item.price.toFixed(2).replace(".", ",")} zł
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="inline-flex min-h-8 items-center justify-center rounded-md border border-[#ac4967]/60 px-2.5 py-1 text-[11px] text-[#f3a6be] transition hover:bg-[#ac4967]/12"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 border-t border-white/15 pt-4">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm uppercase tracking-[0.12em] text-white/45">Razem</p>

          <div className="sm:text-right">
            <p className="text-lg font-semibold text-white md:text-xl">
              {total.toFixed(2).replace(".", ",")} zł
            </p>
            <p className="text-xs text-white/45">miesięcznie</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
