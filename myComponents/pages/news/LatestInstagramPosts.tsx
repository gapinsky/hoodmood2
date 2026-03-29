import Image from "next/image";
import { Instagram } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";

type MockPost = {
  id: string;
  image: string;
  accountName: string;
  handle: string;
  caption: string;
  date: string;
};

const studioAvatar = "/assets/svg/mainLogo/logo.svg";

const mockPosts: MockPost[] = [
  {
    id: "studio-vibes",
    image: "/assets/images/landingOffer/adults1.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Wieczorne zajecia pelne energii, swiatla i muzyki. Tak wyglada nasz rytm tygodnia w studio.",
    date: "Mar 26",
  },
  {
    id: "young-team",
    image: "/assets/images/landingOffer/teens1.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Mloda ekipa wraca na sale z nowa choreografia i ogromna dawka pewnosci siebie.",
    date: "Mar 24",
  },
  {
    id: "kids-session",
    image: "/assets/images/landingOffer/kids1.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Pierwsze kroki, wielkie usmiechy i masa ruchu. Zajecia dla najmldszych zawsze maja najlepsza energie.",
    date: "Mar 22",
  },
  {
    id: "camp-energy",
    image: "/assets/images/landingOffer/camp1.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Przedsmak wyjazdowej energii. Warsztaty, integracja i taneczny progres w jednym miejscu.",
    date: "Mar 20",
  },
  {
    id: "ballet-moment",
    image: "/assets/images/offer/balet.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Subtelna technika i praca nad detalem. Czasem najwieksza sila kryje sie w spokoju ruchu.",
    date: "Mar 18",
  },
  {
    id: "crew-focus",
    image: "/assets/images/offer/qualityCrew.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Trening przed kolejnym wystepem. Skupienie, rytm i zespolowa chemia budowana na sali.",
    date: "Mar 16",
  },
  {
    id: "acro-work",
    image: "/assets/images/offer/partnerowanieAkro.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Akro i partnerowania w praktyce. Stabilnosc, zaufanie i precyzja ruchu od pierwszej proby.",
    date: "Mar 14",
  },
  {
    id: "community-night",
    image: "/assets/images/landingOffer/adults2.jpg",
    accountName: "Hood Mood Studio",
    handle: "@hoodmood_dancestudio",
    caption:
      "Wieczor z ekipa, ktora wraca po wiecej niz trening. Budujemy miejsce, do ktorego chce sie wracac.",
    date: "Mar 12",
  },
];

const cardBaseStyles =
  "group h-full overflow-hidden border-black/[0.06] bg-white/[0.26] shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-[2px] dark:border-white/[0.08] dark:bg-white/[0.05] dark:shadow-[0_18px_44px_rgba(0,0,0,0.22)]";

function InstagramPostCard({ post }: { post: MockPost }) {
  return (
    <Card className={cardBaseStyles}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-b-[1.35rem]">
        <Image
          src={post.image}
          alt={post.caption}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,10,0)_35%,rgba(12,8,10,0.12)_72%,rgba(12,8,10,0.28)_100%)]" />
      </div>

      <CardContent className="relative z-10 flex h-full flex-col gap-4 p-5">
        <div className="flex items-center gap-3">
          <Avatar className="size-11 border border-black/[0.08] shadow-[0_4px_14px_rgba(0,0,0,0.08)] dark:border-white/[0.1]">
            <AvatarImage
              src={studioAvatar}
              alt={post.accountName}
              className="object-cover"
            />
            <AvatarFallback className="bg-muted text-foreground">
              HM
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              {post.accountName}
            </p>
            <p className="truncate text-xs uppercase tracking-[0.14em] ui-muted-label">
              {post.handle}
            </p>
          </div>
        </div>

        <p className="min-h-[4.5rem] text-sm leading-6 text-foreground/88 dark:text-white/86">
          {post.caption}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/[0.06] pt-3 text-xs uppercase tracking-[0.14em] ui-muted-copy dark:border-white/[0.08]">
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-2 text-[var(--brand-700)] dark:text-[var(--brand-300)]">
            <Instagram className="size-3.5" />
            latest post
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LatestInstagramPosts() {
  return (
    <section className="mt-12 space-y-8 md:mt-14 lg:mt-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <ButtonSecondary
          href="https://www.instagram.com/hoodmood_dancestudio/"
          blank
        >
          <Instagram className="size-4" />
          Zobacz profil
        </ButtonSecondary>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {mockPosts.map((post) => (
          <div key={post.id}>
            <InstagramPostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
