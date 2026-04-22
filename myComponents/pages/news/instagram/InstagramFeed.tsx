import type { InstagramPost } from "./types";
import InstagramPostCard from "./InstagramPostCard";

export default function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <InstagramPostCard post={post} />
          </div>
        ))
      ) : (
        <p className="rounded-[1.35rem] border border-black/[0.06] bg-white/[0.26] p-5 text-sm ui-muted-copy sm:col-span-2 xl:col-span-4 dark:border-white/[0.08] dark:bg-white/[0.05]">
          Brak dostepnych postow z Instagrama.
        </p>
      )}
    </div>
  );
}
