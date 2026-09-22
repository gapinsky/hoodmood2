import Link from "next/link";

export default function LocationComingSoon() {
  return (
    <div className="rounded-md border border-dashed border-foreground/15 p-8 text-center">
      <h2 className="font-anton text-2xl uppercase">Szczegóły wkrótce</h2>
      <p className="mt-3 text-base leading-7 text-muted-foreground">
        Przygotowujemy zajęcia w tej lokalizacji. Ofertę, grafik i ceny opublikujemy wkrótce.
      </p>
      <Link href="/kontakt" className="ui-link-subtle mt-4">Zapytaj o zajęcia</Link>
    </div>
  );
}
