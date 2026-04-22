import type {
  InstagramApiPost,
  InstagramApiResponse,
  InstagramMediaItem,
  InstagramPost,
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

function getFeedUrl(userId: string, accessToken: string, fields: string) {
  const url = new URL(`https://graph.instagram.com/${userId}/media`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", "8");
  url.searchParams.set("access_token", accessToken);

  return url;
}

async function fetchInstagramMedia(
  userId: string,
  accessToken: string,
): Promise<Response> {
  const response = await fetch(getFeedUrl(userId, accessToken, fieldsWithCounts), {
    cache: "no-store",
  });

  if (response.ok) {
    return response;
  }

  return fetch(getFeedUrl(userId, accessToken, baseFields), {
    cache: "no-store",
  });
}

export async function getLatestInstagramPosts(): Promise<InstagramPost[]> {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    return [];
  }

  try {
    const response = await fetchInstagramMedia(userId, accessToken);

    if (!response.ok) {
      console.error(`Instagram posts fetch failed: ${response.status}`);
      return [];
    }

    const result = (await response.json()) as InstagramApiResponse;

    return (result.data ?? [])
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
  } catch {
    console.error("Instagram posts fetch failed");
    return [];
  }
}
