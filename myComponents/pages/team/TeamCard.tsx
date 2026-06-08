import Image from "next/image";
import Link from "next/link";
import { cardLiftHoverStyles } from "@/myComponents/common/cardMotion";

type Props = {
  name: string;
  role?: string;
  styles?: string[];
  images: string[];
  localizations?: string[];
  id: string;
  variant?: "grid" | "carousel";
};

export default function TeamCard({
  name,
  role,
  styles = [],
  images,
  localizations: _localizations,
  id,
  variant = "grid",
}: Props) {
  const specialization = role || styles[0];
  const isCarousel = variant === "carousel";

  return (
    <Link
      scroll
      href={`/kadra/${id}`}
      aria-label={`Zobacz profil trenera: ${name}`}
      className={`group relative block aspect-square w-full overflow-hidden rounded-lg border border-black/6 bg-white/18 text-left shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition duration-300 hover:cursor-pointer hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2 dark:border-white/[0.08] dark:bg-white/[0.05] dark:shadow-[0_14px_38px_rgba(0,0,0,0.2)] ${cardLiftHoverStyles}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={images[0]}
          fill
          alt={name}
          sizes={
            isCarousel
              ? "(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(33vw - 3rem), 280px"
              : "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 33vw, 25vw"
          }
          className="object-cover"
          quality={isCarousel ? 60 : undefined}
          priority={false}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,10,0)_34%,rgba(12,8,10,0.18)_68%,rgba(12,8,10,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
          <h2
            className={`leading-tight ${
              isCarousel ? "text-sm sm:text-base" : "text-sm sm:text-base lg:text-4xl"
            }`}
          >
            {name}
          </h2>
          {specialization ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/78">
              {specialization}
            </p>
          ) : null}
        </div>

        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/42 group-focus-visible:bg-black/42 [@media(hover:none)]:bg-black/42 [@media(pointer:coarse)]:bg-black/42" />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-5 text-center text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 [@media(pointer:coarse)]:opacity-100">
          Zobacz profil
        </div>
      </div>
    </Link>
  );
}
