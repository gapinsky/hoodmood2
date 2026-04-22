import { Instagram } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import InstagramMedia from "./InstagramMedia";
import type { InstagramPost } from "./types";

const studioAvatar = "/assets/svg/mainLogo/logo.svg";

const cardBaseStyles =
  "group h-full overflow-hidden border-black/[0.06] bg-white/[0.26] shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-white/[0.05] dark:shadow-[0_18px_44px_rgba(0,0,0,0.22)]";

export default function InstagramPostCard({
  post,
}: {
  post: InstagramPost;
}) {
  return (
    <Card className={cardBaseStyles}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-b-[1.35rem]">
        <InstagramMedia post={post} />
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
