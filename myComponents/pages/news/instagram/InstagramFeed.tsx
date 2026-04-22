import type { InstagramPost } from "./types";
import InstagramPostCard from "./InstagramPostCard";

export default function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  return (
    <div className="flex flex-col items-center gap-5">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="w-full max-w-[470px] lg:max-w-[980px]">
            <InstagramPostCard post={post} />
          </div>
        ))
      ) : (
        <p className="w-full max-w-[470px] rounded-[1.35rem] border border-black/[0.06] bg-white/[0.26] p-5 text-sm ui-muted-copy lg:max-w-[980px] dark:border-white/[0.08] dark:bg-white/[0.05]">
          Brak dostepnych postow z Instagrama.
        </p>
      )}
    </div>
  );
}
