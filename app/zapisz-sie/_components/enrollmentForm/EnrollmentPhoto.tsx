import Image from "next/image";

export default function EnrollmentPhoto() {
  return (
    <div className="relative hidden min-h-0 overflow-hidden rounded-md lg:block">
      <Image
        src="/assets/images/realLife/teamNormal.jpg"
        alt="Ekipa Hoodmood na wspólnym zdjęciu"
        fill
        sizes="(min-width: 1280px) 550px, 45vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 xl:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
          Twój pierwszy krok
        </p>
        <p className="font-anton text-3xl leading-tight text-white xl:text-4xl">
          Widzimy się na sali.
        </p>
        <p className="max-w-xs text-sm leading-6 text-white/75">
          Wspólny ruch, nowi ludzie i miejsce na Twój rozwój.
        </p>
      </div>
    </div>
  );
}
