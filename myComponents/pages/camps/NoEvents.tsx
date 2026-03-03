import Link from "next/link";

export default function NoEvents() {
  return (
    <section className="mx-auto text-center space-y-2 my-36">
      <h6 className="text-xl">
        Aktualnie nie mamy aktywynych obozów, kolonii ani wydarzeń specjalnych
      </h6>
      <p className="text-lg">
        Ale spokojnie! Takie akcje pojawiają się u nas regularnie. Obserwuj nas,
        żeby być na bieżąco.
      </p>
      <div className="flex gap-4 mx-auto w-fit mt-4">
        <Link
          href={"/tiktok"}
          className="uppercase space-x-2 inline-flex items-center gap-1 border p-1"
        >
          <img src={"/icons/tiktok.svg"} className="w-4 bg-white" />
          tiktok
        </Link>
        <Link
          href={"/facebook"}
          className="uppercase space-x-2 inline-flex items-center gap-1 border p-1"
        >
          <img src={"/icons/facebook.svg"} className="w-4 bg-white" />
          facebook
        </Link>
        <Link
          href={"/instagram"}
          className="uppercase space-x-2 inline-flex items-center gap-1 border p-1"
        >
          <img src={"/icons/instagram.svg"} className="w-4 bg-white" />
          instagram
        </Link>
      </div>
    </section>
  );
}
