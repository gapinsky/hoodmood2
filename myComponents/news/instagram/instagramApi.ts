import "server-only";
import { unstable_cache } from "next/cache";
import type {
  InstagramApiPost,
  InstagramApiResponse,
  InstagramMediaItem,
  InstagramPost,
  InstagramPostsPage,
} from "./types";

const accountName = "Hood Mood Studio";
const handle = "@hoodmood_dancestudio";
const baseFields =
  "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink,children{id,media_type,media_url,thumbnail_url}";
const fieldsWithCounts = `${baseFields},like_count,comments_count`;

function formatPostDate(timestamp?: string) {
  if (!timestamp) {
    return "";
  }

  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
  }).format(new Date(timestamp));
}

function mapMediaItem(item: InstagramApiPost): InstagramMediaItem | null {
  const url = item.media_url;

  if (!item.media_type || !url) {
    return null;
  }

  return {
    id: item.id,
    type: item.media_type,
    url,
    thumbnailUrl: item.thumbnail_url,
  };
}

function mapPostMedia(post: InstagramApiPost) {
  if (post.media_type === "CAROUSEL_ALBUM") {
    return (post.children?.data ?? [])
      .map(mapMediaItem)
      .filter((item): item is InstagramMediaItem => Boolean(item));
  }

  const media = mapMediaItem(post);

  return media ? [media] : [];
}

function getFeedUrl(
  userId: string,
  accessToken: string,
  fields: string,
  after?: string,
) {
  const url = new URL(`https://graph.instagram.com/${userId}/media`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", "9");
  url.searchParams.set("access_token", accessToken);
  if (after) url.searchParams.set("after", after);

  return url;
}

async function fetchInstagramMedia(
  userId: string,
  accessToken: string,
  after?: string,
): Promise<Response> {
  const signal = AbortSignal.timeout(6000);
  const response = await fetch(
    getFeedUrl(userId, accessToken, fieldsWithCounts, after),
    {
      cache: "no-store",
      signal,
    },
  );

  if (response.ok) {
    return response;
  }

  return fetch(getFeedUrl(userId, accessToken, baseFields, after), {
    cache: "no-store",
    signal,
  });
}

async function fetchPostsPage(
  after?: string,
): Promise<InstagramPostsPage> {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    throw new Error("Instagram unavailable");
  }

  try {
    const response = await fetchInstagramMedia(userId, accessToken, after);

    if (!response.ok) {
      console.error(`Instagram posts fetch failed: ${response.status}`);
      throw new Error("Instagram unavailable");
    }

    const result = (await response.json()) as InstagramApiResponse;
    if (!Array.isArray(result.data)) throw new Error("Invalid Instagram response");

    const posts = (result.data ?? [])
      .map((post) => {
        const media = mapPostMedia(post);

        return {
          id: post.id,
          media,
          accountName,
          handle,
          caption: post.caption ?? "Post Instagram Hood Mood Studio",
          date: formatPostDate(post.timestamp),
          likeCount: post.like_count,
          commentsCount: post.comments_count,
          permalink: post.permalink,
        };
      })
      .filter((post) => post.media.length > 0);

    return {
      status: "success",
      posts,
      nextCursor: result.paging?.next
        ? (result.paging.cursors?.after ?? null)
        : null,
    };
  } catch {
    console.error("Instagram posts fetch failed");
    throw new Error("Instagram unavailable");
  }
}

// Cache only successful, validated public results; throwing on refresh preserves stale data.
const cachedPostsPage = unstable_cache(fetchPostsPage, ["instagram-public-feed-v2"], { revalidate: 600 });

export async function getInstagramPostsPage(after?: string): Promise<InstagramPostsPage> {
  try {
    return await cachedPostsPage(after);
  } catch {
    return { status: "error", posts: [], nextCursor: null };
  }
}

export async function getLatestInstagramPosts(): Promise<InstagramPost[]> {
  return (await getInstagramPostsPage()).posts;
}
