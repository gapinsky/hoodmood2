import { Heart, Instagram, MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import InstagramMedia from "./InstagramMedia";
import type { InstagramPost } from "./types";

const studioAvatar = "/assets/svg/mainLogo/logo.svg";

const cardBaseStyles =
  "group flex h-fit w-full flex-col overflow-hidden border-black/[0.06] bg-white/[0.26] shadow-[0_16px_40px_rgba(0,0,0,0.08)] lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)] dark:border-white/[0.08] dark:bg-white/[0.05] dark:shadow-[0_18px_44px_rgba(0,0,0,0.22)]";

function formatCount(count?: number) {
  if (typeof count !== "number") {
    return null;
  }

  return new Intl.NumberFormat("pl-PL", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(count);
}

function PostMetric({
  icon,
  label,
  count,
}: {
  icon: React.ReactNode;
  label: string;
  count?: number;
}) {
  const formattedCount = formatCount(count);

  return (
    <span
      aria-label={formattedCount ? `${label}: ${formattedCount}` : label}
      className="inline-flex items-center gap-1.5"
    >
      {icon}
      {formattedCount ? <span>{formattedCount}</span> : null}
    </span>
  );
}

export default function InstagramPostCard({ post }: { post: InstagramPost }) {
  return (
    <Card className={cardBaseStyles}>
      <div className="relative order-2 aspect-[4/5] overflow-hidden border-y border-black/[0.06] lg:order-1 lg:min-h-[560px] lg:border-y-0 lg:border-r dark:border-white/[0.08]">
        <InstagramMedia post={post} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,10,0)_35%,rgba(12,8,10,0.12)_72%,rgba(12,8,10,0.28)_100%)]" />
      </div>

      <CardContent className="contents lg:order-2 lg:flex lg:h-full lg:min-h-[560px] lg:flex-col lg:gap-5 lg:p-6">
        <div className="order-1 flex items-center gap-3 p-4 pb-3 lg:p-0">
          <Avatar className="size-10 border border-black/[0.08] shadow-[0_4px_14px_rgba(0,0,0,0.08)] dark:border-white/[0.1]">
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

          <Instagram className="ml-auto size-4 text-[var(--brand-700)] dark:text-[var(--brand-300)]" />
        </div>

        <p className="order-3 min-h-[4.5rem] overflow-hidden px-5 pb-5 pt-3 text-sm leading-6 text-foreground/88 lg:order-2 lg:min-h-0 lg:max-h-[18rem] lg:p-0 dark:text-white/86">
          <span className="font-semibold">{post.accountName}</span>{" "}
          {post.caption}
        </p>

        <div className="order-4 mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] px-5 py-4 text-xs uppercase tracking-[0.14em] ui-muted-copy dark:border-white/[0.08] lg:px-0 lg:pb-0 lg:pt-4">
          <div className="flex flex-wrap items-center gap-4">
            <PostMetric
              icon={<Heart className="size-4" />}
              label="Polubienia"
              count={post.likeCount}
            />
            <PostMetric
              icon={<MessageCircle className="size-4" />}
              label="Komentarze"
              count={post.commentsCount}
            />
            <span>{post.date}</span>
          </div>

          {post.permalink ? (
            <a
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--brand-700)] underline-offset-4 hover:underline dark:text-[var(--brand-300)]"
            >
              Zobacz post
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
