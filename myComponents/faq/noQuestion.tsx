export default function NoQuestion() {
  return (
    <div className="rounded-md border border-dashed border-foreground/15 p-6 sm:p-8">
      <h2 className="text-2xl">Nie znaleźliśmy takiego pytania</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Spróbuj krótszej frazy lub wyczyść wyszukiwanie. Możesz też napisać do nas przez stronę kontaktową.
      </p>
    </div>
  );
}
