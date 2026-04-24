import { connection } from "next/server";
import { Instagram } from "lucide-react";

import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import InstagramFeed from "./instagram/InstagramFeed";
import { getLatestInstagramPosts } from "./instagram/instagramApi";

const profileUrl = "https://www.instagram.com/hoodmood_dancestudio/";

export default async function LatestInstagramPosts() {
  await connection();

  const posts = await getLatestInstagramPosts();

  return (
    <section className="mt-12 space-y-8 md:mt-14 lg:mt-16">
      <InstagramFeed posts={posts} />
      <div className="flex flex-col gap-5 place-self-end mt-16">
        <ButtonSecondary href={profileUrl} blank>
          <Instagram className="size-4" />
          Zobacz więcej na Instagramie
        </ButtonSecondary>
      </div>
    </section>
  );
}
