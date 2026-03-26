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
    <aside className="flex min-w-0 flex-col rounded-[24px] border border-white/20 bg-white/[0.05] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl h-full">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="font-[var(--anton)] text-lg  tracking-wide text-white md:text-xl">
          Moje zajęcia
        </h3>
        <span className="text-xs uppercase tracking-[0.14em] text-white/45">
          {items.length} wybrane
        </span>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm leading-7 text-white/50 text-center">
          Nie wybrałeś żadnych zajęć. Wybierz z listy zajęcia, które Cię
          interesują, aby przejść dalej.
        </div>
      ) : (
        <div className="space-y-3  max-h-[250px] overflow-y-scroll ">
          {items.map((item, index) => (
            <div
              key={item.clientId}
              className="border-b border-white/15 pb-3 last:border-0"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between pr-4">
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="w-fit rounded-md border border-[#ac4967]/60 px-2 py-1 text-[11px] text-[#f3a6be] transition hover:bg-[#ac4967]/12"
                >
                  Usuń
                </button>

                <div className="min-w-0 flex-1 text-sm text-white/85">
                  <p>{item.classTypeName}</p>
                  <p className="mt-1 text-xs text-white/45">
                    {item.locationName} • {item.timeLabel}
                  </p>
                </div>

                <div className="text-sm text-white sm:text-right">
                  {item.price.toFixed(2).replace(".", ",")} zł
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto ">
        <div className="flex flex-col gap-2 border-t border-white/20 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-lg font-semibold  md:text-xl">Razem:</p>

          <div className="sm:text-right">
            <p className="text-lg font-semibold  md:text-xl">
              {total.toFixed(2).replace(".", ",")} zł{" "}
              <span className="opacity-50 text-sm"> /miesięcznie</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
