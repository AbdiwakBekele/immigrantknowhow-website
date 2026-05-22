import { apiEndpoints } from "./config";

export type PublicCommunityPost = {
  id: number;
  title: string;
  description: string | null;
  tag: string | null;
  category: string;
  contributor_name: string | null;
  contributor_country: string | null;
  image_url: string | null;
  video_url: string | null;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  bookmarks_count: number;
  user_reactions?: string[];
  created_at: string | null;
};

export type PublicCommunityComment = {
  id: number;
  author_name: string;
  author_avatar_url: string | null;
  content: string;
  created_at: string | null;
};

export type PublicNewsItem = {
  id: string;
  title: string;
  url: string;
  published_at: string;
  source: string;
  summary: string;
  image: string;
};

type PaginatedPosts = {
  data?: PublicCommunityPost[];
  current_page?: number;
  last_page?: number;
};

type CommunityPostsResponse = {
  posts?: PaginatedPosts;
};

type CommunityPostResponse = {
  post?: PublicCommunityPost;
};

type CommunityCommentsResponse = {
  comments?: PublicCommunityComment[];
};

type CommunityNewsResponse = {
  country?: string;
  items?: PublicNewsItem[];
  error?: string;
};

export type CommunityPostsPage = {
  posts: PublicCommunityPost[];
  currentPage: number;
  lastPage: number;
};

function normalizePost(raw: Partial<PublicCommunityPost> & { id: number }): PublicCommunityPost {
  return {
    id: raw.id,
    title: raw.title ?? "",
    description: raw.description ?? null,
    tag: raw.tag ?? null,
    category: raw.category ?? "feed",
    contributor_name: raw.contributor_name ?? null,
    contributor_country: raw.contributor_country ?? null,
    image_url: raw.image_url ?? null,
    video_url: raw.video_url ?? null,
    likes_count: Number(raw.likes_count ?? 0),
    comments_count: Number(raw.comments_count ?? 0),
    shares_count: Number(raw.shares_count ?? 0),
    bookmarks_count: Number(raw.bookmarks_count ?? 0),
    user_reactions: raw.user_reactions ?? [],
    created_at: raw.created_at ?? null,
  };
}

export async function fetchPublicCommunityPostsPage(
  page = 1,
  category = "feed",
  search = "",
  perPage = 20,
  hasVideo = false,
): Promise<CommunityPostsPage> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
    category,
  });
  if (search.trim()) {
    params.set("search", search.trim());
  }
  if (hasVideo) {
    params.set("has_video", "1");
  }

  const requestUrl = `${apiEndpoints.publicCommunityPosts}?${params.toString()}`;

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return { posts: [], currentPage: 1, lastPage: 1 };
    }

    const payload = (await response.json()) as CommunityPostsResponse;
    const paginated = payload.posts;

    return {
      posts: (paginated?.data ?? []).map((item) =>
        normalizePost(item as PublicCommunityPost),
      ),
      currentPage: paginated?.current_page ?? 1,
      lastPage: paginated?.last_page ?? 1,
    };
  } catch {
    return { posts: [], currentPage: 1, lastPage: 1 };
  }
}

export async function fetchPublicCommunityPost(
  id: number,
): Promise<PublicCommunityPost | null> {
  try {
    const response = await fetch(apiEndpoints.publicCommunityPost(id), {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as CommunityPostResponse;
    if (!payload.post) {
      return null;
    }

    return normalizePost(payload.post);
  } catch {
    return null;
  }
}

export async function fetchPublicCommunityComments(
  postId: number,
): Promise<PublicCommunityComment[]> {
  try {
    const response = await fetch(apiEndpoints.publicCommunityComments(postId), {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as CommunityCommentsResponse;
    return payload.comments ?? [];
  } catch {
    return [];
  }
}

export async function fetchPublicCommunityVideos(
  limit = 6,
): Promise<PublicCommunityPost[]> {
  const page = await fetchPublicCommunityPostsPage(1, "feed", "", limit, true);
  return page.posts;
}

export async function fetchPublicCommunityNews(
  country = "US",
  limit = 10,
): Promise<PublicNewsItem[]> {
  const params = new URLSearchParams({
    country,
    limit: String(limit),
  });

  try {
    const response = await fetch(
      `${apiEndpoints.publicCommunityNews}?${params.toString()}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as CommunityNewsResponse;
    return payload.items ?? [];
  } catch {
    return [];
  }
}
