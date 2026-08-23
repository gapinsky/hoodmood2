import SocialLinks from "@/myComponents/common/SocialLinks";

export default function NoEvents() {
  return (
    <section className="mx-auto text-center space-y-2 my-16 w-fit">
      <p className="text-lg">
        Aktualnie nie mamy aktywynych obozów, kolonii ani wydarzeń specjalnych
      </p>
      <p className="text-muted-foreground ">
        Ale spokojnie! Takie akcje pojawiają się u nas regularnie. Obserwuj nas,
        żeby być na bieżąco.
      </p>
      <SocialLinks className="mx-auto mt-5 w-fit justify-center" />
    </section>
  );
}
