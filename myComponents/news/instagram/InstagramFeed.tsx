"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
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
import type { InstagramPost, InstagramPostsPage } from "./types";

const studioAvatar = "/assets/images/branding/logo.png";

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
        Brak podglądu
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
        className="ui-focus-ring group hidden w-full min-w-0 rounded-md text-left md:block"
        aria-label={`Otwórz post Instagram: ${post.caption}`}
      >
        <div className="relative aspect-square overflow-hidden rounded-md bg-muted [&_img]:transition-transform [&_img]:duration-700 motion-safe:group-hover:[&_img]:scale-[1.035] motion-safe:group-focus-visible:[&_img]:scale-[1.035]">
        <InstagramPreviewMedia
          post={post}
          sizes="(max-width: 1519px) 30vw, 440px"
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
        </div>
        <div className="border-b border-foreground/10 pb-5 pt-4">
          <p className="mb-2 text-xs uppercase tracking-[0.14em] text-(--brand-700) dark:text-(--brand-400)">{post.date}</p>
          <p className="line-clamp-2 text-base leading-7 text-foreground">{post.caption || "Z życia Hoodmood"}</p>
          <span className="mt-3 inline-block text-xs text-muted-foreground">Zobacz wpis ↗</span>
        </div>
      </button>
    </DialogTrigger>
  );
}

function MobilePostCard({ post }: { post: InstagramPost }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="block w-full overflow-hidden rounded-md border border-foreground/10 bg-foreground/2.5 text-left md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <Avatar className="size-9 border border-black/8 dark:border-white/10">
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

        <Instagram className="ml-auto size-4 text-(--brand-700) dark:text-(--brand-300)" />
      </div>

      <div className="relative aspect-square w-full overflow-hidden border-y border-black/6 dark:border-white/8">
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
          className="ui-link text-sm font-medium transition"
        >
          {isExpanded ? "Zobacz mniej" : "Zobacz więcej"}
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

      <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-270  overflow-y-auto rounded-2xl border-black/8  p-0 shadow-[0_30px_90px_rgba(0,0,0,0.3)] [&>button]:z-20 dark:border-white/10 dark:bg-neutral-950/95">
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

export default function InstagramFeed({
  posts: initialPosts,
  initialCursor,
  initialStatus,
}: {
  posts: InstagramPost[];
  initialCursor: string | null;
  initialStatus: "success" | "error";
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [cursor, setCursor] = useState(initialCursor);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (!cursor || loadingRef.current) return;

    loadingRef.current = true;
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(
        `/api/instagram?after=${encodeURIComponent(cursor)}`,
      );

      if (!response.ok) throw new Error("Nie udało się pobrać postów");

      const page = (await response.json()) as InstagramPostsPage;
      if (page.status === "error") throw new Error("Instagram unavailable");
      setPosts((currentPosts) => {
        const knownIds = new Set(currentPosts.map((post) => post.id));
        const newPosts = page.posts.filter((post) => !knownIds.has(post.id));
        return [...currentPosts, ...newPosts];
      });
      setCursor(page.nextCursor);
    } catch {
      setHasError(true);
    } finally {
      loadingRef.current = false;
      setIsLoading(false);
    }
  }, [cursor]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !cursor || hasError) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void loadMore();
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [cursor, hasError, loadMore]);

  if (posts.length === 0) {
    return (
      <p className="w-full rounded-md border border-black/6 bg-white/26 p-5 text-sm ui-muted-copy dark:border-white/8 dark:bg-white/5">
        {initialStatus === "error" ? "Nie możemy teraz załadować aktualności. Spróbuj później lub zajrzyj na nasz Instagram." : "Nie ma teraz dostępnych wpisów. Zajrzyj bezpośrednio na nasz Instagram."}
      </p>
    );
  }

  return (
    <div className="mx-auto w-full ">
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
        {posts.map((post) => (
          <InstagramPostDialog key={post.id} post={post} />
        ))}
      </div>
      {(cursor || isLoading) && (
        <div ref={sentinelRef} className="mt-8" aria-hidden="true">
          {isLoading && (
            <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="aspect-square animate-pulse motion-reduce:animate-none rounded-md bg-black/6 dark:bg-white/[0.07]"
                />
              ))}
            </div>
          )}
        </div>
      )}
      {hasError && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => void loadMore()}
            className="ui-focus-ring ui-field ui-pressable rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            Spróbuj wczytać kolejne posty ponownie
          </button>
        </div>
      )}
    </div>
  );
}
