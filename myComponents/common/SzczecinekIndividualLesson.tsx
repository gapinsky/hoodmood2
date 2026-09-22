import ButtonSecondary from "./ButtonSecondary";

export default function SzczecinekIndividualLesson() {
  return (
    <section aria-labelledby="individual-lesson-title" className="flex flex-col items-start justify-between gap-6 rounded-md border border-foreground/10 bg-foreground/2.5 p-6 sm:p-8 lg:flex-row lg:items-center">
      <div>
        <h2 id="individual-lesson-title" className="font-anton text-2xl uppercase sm:text-3xl">Lekcje indywidualne</h2>
        <p className="mt-3 text-base font-semibold">120 zł / 60 min</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Indywidualna praca nad tańcem. Wypełnij formularz zapisów, a ustalimy szczegóły i termin lekcji w Szczecinku.</p>
      </div>
      <ButtonSecondary href="/zapisz-sie">Umów lekcję</ButtonSecondary>
    </section>
  );
}
