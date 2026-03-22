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
    <aside className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl xl:sticky xl:top-24">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-[var(--anton)] text-2xl text-white">Moje zajęcia</h3>
        <span className="text-xs uppercase tracking-[0.14em] text-white/45">
          {items.length} wybrane
        </span>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-sm leading-7 text-white/50">
          Nie dodano jeszcze żadnych zajęć. Wybierz lokalizację, typ zajęć i termin, a potem kliknij „Dodaj zajęcia”.
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={item.clientId}
              className="rounded-2xl border border-white/8 bg-black/10 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.classTypeName}
                  </h4>
                  <p className="mt-1 text-sm text-white/55">{item.locationName}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 transition hover:border-white/25 hover:bg-white/5"
                >
                  Usuń
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-white/70">
                  {item.dayLabel}, {item.timeLabel}
                </span>
                <span className="font-semibold text-[#f07ea4]">
                  {item.price} zł
                </span>
              </div>
            </div>
          ))}

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Razem</span>
              <span className="font-semibold text-white">{total} zł / mies.</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}