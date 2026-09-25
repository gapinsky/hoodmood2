import Image from "next/image";

import InstagramCarousel from "./InstagramCarousel";
import InstagramVideo from "./InstagramVideo";
import type { InstagramPost } from "./types";

export default function InstagramMedia({ post }: { post: InstagramPost }) {
  const firstItem = post.media[0];

  if (post.media.length > 1) {
    return <InstagramCarousel items={post.media} caption={post.caption} />;
  }

  if (firstItem.type === "VIDEO") {
    return <InstagramVideo item={firstItem} caption={post.caption} />;
  }

  return (
    <Image
      src={firstItem.url}
      alt={post.caption}
      fill
      unoptimized
      className="object-cover"
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
    />
  );
}
