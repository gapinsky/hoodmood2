import SocialLinks from "@/myComponents/common/SocialLinks";

export default function NoEvents() {
  return (
    <section id="najblizsze" aria-labelledby="najblizsze-title" className="scroll-mt-28 space-y-8">
      <div className="border-b border-foreground/10 pb-5">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">01 / Przed nami</p>
        <h2 id="najblizsze-title" className="font-anton text-3xl uppercase sm:text-4xl">Najbliższe wydarzenia</h2>
      </div>
      <div className="grid gap-8 rounded-md border border-foreground/10 bg-foreground/2.5 p-6 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-10">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-(--brand-700) dark:text-(--brand-400)">Bądźmy w kontakcie</p>
          <h3 className="font-anton text-2xl uppercase sm:text-3xl">Kolejne wspomnienia przed nami</h3>
        </div>
        <div className="space-y-5">
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Aktualnie nie mamy aktywnych obozów, kolonii ani wydarzeń specjalnych.
            Takie akcje pojawiają się u nas regularnie — obserwuj nas, żeby być na bieżąco.
          </p>
          <SocialLinks className="justify-start" />
        </div>
      </div>
    </section>
  );
}
