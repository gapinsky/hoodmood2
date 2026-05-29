"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Heart, Images, Instagram, MessageCircle, Play } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InstagramPostCard from "./InstagramPostCard";
import InstagramMedia from "./InstagramMedia";
import type { InstagramPost } from "./types";

const studioAvatar = "/assets/svg/mainLogo/logo.svg";

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
  icon: ReactNode;
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

function InstagramPreviewMedia({
  post,
  sizes,
}: {
  post: InstagramPost;
  sizes: string;
}) {
  const firstItem = post.media[0];

  if (!firstItem) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black/5 text-sm ui-muted-copy dark:bg-white/5">
        Brak podgladu
      </div>
    );
  }

  if (firstItem.type === "VIDEO") {
    return (
      <video
        src={firstItem.url}
        poster={firstItem.thumbnailUrl}
        aria-label={post.caption}
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src={firstItem.url}
      alt={post.caption}
      fill
      unoptimized
      className="object-cover"
      sizes={sizes}
    />
  );
}

function PostTypeIndicator({ post }: { post: InstagramPost }) {
  const firstItem = post.media[0];

  if (post.media.length > 1) {
    return (
      <Images
        aria-label="Karuzela"
        className="absolute right-3 top-3 z-10 size-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
      />
    );
  }

  if (firstItem?.type === "VIDEO") {
    return (
      <Play
        aria-label="Wideo"
        className="absolute right-3 top-3 z-10 size-5 fill-white text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
      />
    );
  }

  return null;
}

function DesktopPostTile({ post }: { post: InstagramPost }) {
  return (
    <DialogTrigger asChild>
      <button
        type="button"
        className="group relative hidden aspect-square w-full overflow-hidden rounded-lg border border-black/[0.06] bg-white/[0.18] text-left shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2 md:block dark:border-white/[0.08] dark:bg-white/[0.05] dark:shadow-[0_14px_38px_rgba(0,0,0,0.2)]"
        aria-label={`Otworz post Instagram: ${post.caption}`}
      >
        <InstagramPreviewMedia
          post={post}
          sizes="(max-width: 1023px) 33vw, 25vw"
        />
        <PostTypeIndicator post={post} />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/42 group-focus-visible:bg-black/42" />
        <div className="absolute inset-0 flex items-center justify-center gap-6 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <PostMetric
            icon={<Heart className="size-5 fill-white" />}
            label="Polubienia"
            count={post.likeCount}
          />
          <PostMetric
            icon={<MessageCircle className="size-5 fill-white" />}
            label="Komentarze"
            count={post.commentsCount}
          />
        </div>
      </button>
    </DialogTrigger>
  );
}

function MobilePostCard({ post }: { post: InstagramPost }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="block w-full overflow-hidden rounded-xl border border-black/[0.06] bg-white/[0.34] text-left shadow-[0_14px_34px_rgba(0,0,0,0.08)] md:hidden dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <Avatar className="size-9 border border-black/[0.08] dark:border-white/[0.1]">
          <AvatarImage
            src={studioAvatar}
            alt={post.accountName}
            className="object-cover"
          />
          <AvatarFallback className="bg-muted text-foreground">HM</AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {post.accountName}
          </p>
          <p className="truncate text-xs ui-muted-copy">{post.date}</p>
        </div>

        <Instagram className="ml-auto size-4 text-[var(--brand-700)] dark:text-[var(--brand-300)]" />
      </div>

      <div className="relative aspect-square w-full overflow-hidden border-y border-black/[0.06] dark:border-white/[0.08]">
        <InstagramMedia post={post} />
        <PostTypeIndicator post={post} />
      </div>

      <div className="space-y-2 px-4 py-3">
        <div className="flex items-center gap-4 text-sm text-foreground">
          <PostMetric
            icon={<Heart className="size-5" />}
            label="Polubienia"
            count={post.likeCount}
          />
          <PostMetric
            icon={<MessageCircle className="size-5" />}
            label="Komentarze"
            count={post.commentsCount}
          />
        </div>
        <p
          className={`text-sm leading-6 text-foreground/88 dark:text-white/86 ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          <span className="font-semibold">{post.accountName}</span>{" "}
          {post.caption}
        </p>
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="text-sm font-medium ui-muted-copy transition hover:text-foreground"
        >
          {isExpanded ? "Zobacz mniej" : "Zobacz wiecej"}
        </button>
      </div>
    </article>
  );
}

function InstagramPostDialog({ post }: { post: InstagramPost }) {
  return (
    <Dialog>
      <DesktopPostTile post={post} />
      <MobilePostCard post={post} />

      <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-[1080px]  overflow-y-auto rounded-2xl border-black/[0.08]  p-0 shadow-[0_30px_90px_rgba(0,0,0,0.3)] [&>button]:z-20 dark:border-white/[0.1] dark:bg-neutral-950/95">
        <DialogTitle className="sr-only ">
          Post Instagram {post.accountName}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {post.caption}
        </DialogDescription>
        <InstagramPostCard post={post} />
      </DialogContent>
    </Dialog>
  );
}

export default function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="w-full rounded-xl border border-black/[0.06] bg-white/[0.26] p-5 text-sm ui-muted-copy dark:border-white/[0.08] dark:bg-white/[0.05]">
        Brak dostepnych postow z Instagrama.
      </p>
    );
  }

  return (
    <div className="mx-auto w-full ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2 lg:gap-3">
        {posts.map((post) => (
          <InstagramPostDialog key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
