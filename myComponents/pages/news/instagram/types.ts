export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type InstagramMediaItem = {
  id: string;
  type: InstagramMediaType;
  url: string;
  thumbnailUrl?: string;
};

export type InstagramPost = {
  id: string;
  media: InstagramMediaItem[];
  accountName: string;
  handle: string;
  caption: string;
  date: string;
  likeCount?: number;
  commentsCount?: number;
  permalink?: string;
};

export type InstagramApiPost = {
  id: string;
  caption?: string;
  media_type?: InstagramMediaType;
  media_url?: string;
  thumbnail_url?: string;
  timestamp?: string;
  like_count?: number;
  comments_count?: number;
  permalink?: string;
  children?: InstagramApiResponse;
};

export type InstagramApiResponse = {
  data?: InstagramApiPost[];
};
