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
    <aside className="flex min-w-0 flex-col rounded-[24px] border border-white/20 bg-white/[0.05] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="font-[var(--anton)] text-2xl leading-none text-white md:text-3xl">
          Moje zajęcia
        </h3>
        <span className="text-xs uppercase tracking-[0.14em] text-white/45">
          {items.length} wybrane
        </span>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm leading-7 text-white/50">
          Nie dodano jeszcze żadnych zajęć. Wybierz lokalizację i dodaj pozycje
          z listy po lewej stronie.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={item.clientId} className="border-b border-white/15 pb-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
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

      <div className="mt-auto pt-6">
        <div className="flex flex-col gap-2 border-t border-white/20 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Do zapłaty
          </p>

          <div className="sm:text-right">
            <p className="text-2xl font-semibold text-white sm:text-3xl">
              {total.toFixed(2).replace(".", ",")} zł
            </p>
            <p className="text-sm text-white/45">/miesiąc</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
