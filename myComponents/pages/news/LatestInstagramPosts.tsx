import { connection } from "next/server";
import { Instagram } from "lucide-react";

import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import InstagramFeed from "./instagram/InstagramFeed";
import { getInstagramPostsPage } from "./instagram/instagramApi";

const profileUrl = "https://www.instagram.com/hoodmood_dancestudio/";

export default async function LatestInstagramPosts() {
  await connection();

  const { posts, nextCursor, status } = await getInstagramPostsPage();

  return (
    <section id="wpisy" aria-labelledby="wpisy-title" className="scroll-mt-28 space-y-8 sm:space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/10 pb-5">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">01 / Na bieżąco</p>
          <h2 id="wpisy-title" className="font-anton text-3xl uppercase sm:text-4xl">Co słychać w Hoodmood?</h2>
        </div>
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Instagram className="size-4" aria-hidden="true" /> @hoodmood_dancestudio</span>
      </div>
      <InstagramFeed posts={posts} initialCursor={nextCursor} initialStatus={status} />
      <div className="flex flex-col items-start justify-between gap-6 rounded-md border border-foreground/10 bg-foreground/2.5 p-6 sm:p-8 lg:flex-row lg:items-center">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-(--brand-700) dark:text-(--brand-400)">Bądź bliżej ekipy</p>
          <h3 className="font-anton text-2xl uppercase sm:text-3xl">Jeszcze więcej za kulisami</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">Obserwuj nasze treningi, wydarzenia i codzienne życie studia na Instagramie.</p>
        </div>
        <ButtonSecondary
          href={profileUrl}
          blank
          className="text-(--brand-700) dark:text-(--brand-300)"
        >
          <Instagram className="size-4" />
          Otwórz Instagram
        </ButtonSecondary>
      </div>
    </section>
  );
}
