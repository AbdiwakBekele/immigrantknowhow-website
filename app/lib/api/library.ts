import { cache } from "react";
import { apiEndpoints } from "./config";

type LibraryCategory = {
  name: string;
  slug: string;
};

export type PublicLibraryItem = {
  title: string;
  slug: string;
  type: string;
  description: string | null;
  author: string | null;
  category: LibraryCategory | null;
  cover_image_url: string | null;
  is_premium: boolean;
  price: number | null;
  currency: string | null;
  page_count?: number | null;
  publisher?: string | null;
  publication_year?: number | null;
  published_at?: string | null;
  isbn?: string | null;
  language?: string | null;
  estimated_reading_minutes?: number | null;
  duration_seconds?: number | null;
  narrator?: string | null;
  difficulty_level?: string | null;
  recommended_age_group?: string | null;
};

type PublicLibraryItemResponse = {
  item?: PublicLibraryItem;
};

type LaravelPaginatedResponse<T> = {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

function pickDiverseEbooksByCategory(
  items: PublicLibraryItem[],
  limit: number,
): PublicLibraryItem[] {
  const picked: PublicLibraryItem[] = [];
  const seenCategories = new Set<string>();

  for (const item of items) {
    const categoryKey = item.category?.slug ?? item.category?.name ?? item.slug;
    if (seenCategories.has(categoryKey)) {
      continue;
    }

    seenCategories.add(categoryKey);
    picked.push(item);

    if (picked.length >= limit) {
      return picked;
    }
  }

  for (const item of items) {
    if (picked.some((entry) => entry.slug === item.slug)) {
      continue;
    }

    picked.push(item);

    if (picked.length >= limit) {
      break;
    }
  }

  return picked;
}

export const fetchPublicLibraryEbooks = cache(async function fetchPublicLibraryEbooks(
  limit = 6,
): Promise<PublicLibraryItem[]> {
  const params = new URLSearchParams({
    type: "ebook",
    featured: "1",
    per_page: String(Math.max(limit * 4, 24)),
    page: "1",
  });
  const requestUrl = `${apiEndpoints.publicLibraryItems}?${params.toString()}`;

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return [];
    }

    const payload =
      (await response.json()) as LaravelPaginatedResponse<PublicLibraryItem>;

    return pickDiverseEbooksByCategory(payload.data ?? [], limit);
  } catch {
    return [];
  }
});

export async function fetchPublicLibraryItems(): Promise<PublicLibraryItem[]> {
  const requestUrl = `${apiEndpoints.publicLibraryItems}?per_page=24`;

  try {
    console.log("[LibraryAPI] Fetch started", {
      url: requestUrl,
      method: "GET",
    });

    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.error("[LibraryAPI] Non-OK response", {
        url: requestUrl,
        status: response.status,
        statusText: response.statusText,
      });

      // Keep the public page available even when backend endpoint is not deployed yet.
      return [];
    }

    const payload =
      (await response.json()) as LaravelPaginatedResponse<PublicLibraryItem>;

    console.log("[LibraryAPI] Fetch success", {
      url: requestUrl,
      totalItems: payload.data?.length ?? 0,
      currentPage: payload.current_page,
      lastPage: payload.last_page,
      total: payload.total,
    });

    return payload.data ?? [];
  } catch (error) {
    const errorDetails =
      error instanceof Error
        ? {
            message: error.message,
            name: error.name,
            stack: error.stack,
            cause:
              typeof (error as Error & { cause?: unknown }).cause === "object"
                ? JSON.stringify((error as Error & { cause?: unknown }).cause)
                : String((error as Error & { cause?: unknown }).cause),
            code:
              (error as Error & { code?: string }).code ??
              "unknown_error_code",
          }
        : { message: String(error) };

    console.error("[LibraryAPI] Fetch failed", {
      url: requestUrl,
      error: errorDetails,
    });

    return [];
  }
}

function normalizeSlug(slug: string): string {
  try {
    return decodeURIComponent(slug).trim();
  } catch {
    return slug.trim();
  }
}

async function fetchLibraryJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

async function fetchPublicLibraryItemFromShow(
  slug: string,
): Promise<PublicLibraryItem | null> {
  const payload = await fetchLibraryJson<PublicLibraryItemResponse>(
    apiEndpoints.publicLibraryItem(slug),
  );

  return payload?.item ?? null;
}

async function fetchPublicLibraryItemFromCatalogSlug(
  slug: string,
): Promise<PublicLibraryItem | null> {
  const params = new URLSearchParams({
    slug,
    per_page: "1",
  });
  const payload = await fetchLibraryJson<LaravelPaginatedResponse<PublicLibraryItem>>(
    `${apiEndpoints.publicLibraryItems}?${params.toString()}`,
  );

  return payload?.data?.find((item) => item.slug === slug) ?? null;
}

async function findPublicLibraryItemInCatalog(
  slug: string,
): Promise<PublicLibraryItem | null> {
  const perPage = 50;
  let page = 1;
  let lastPage = 1;

  while (page <= lastPage) {
    const params = new URLSearchParams({
      per_page: String(perPage),
      page: String(page),
    });
    const payload = await fetchLibraryJson<LaravelPaginatedResponse<PublicLibraryItem>>(
      `${apiEndpoints.publicLibraryItems}?${params.toString()}`,
    );

    if (!payload?.data?.length) {
      return null;
    }

    const match = payload.data.find((item) => item.slug === slug);
    if (match) {
      return match;
    }

    lastPage = payload.last_page ?? 1;
    page += 1;
  }

  return null;
}

export async function fetchPublicLibraryItem(
  slug: string,
): Promise<PublicLibraryItem | null> {
  const normalized = normalizeSlug(slug);
  if (!normalized) {
    return null;
  }

  const fromShow = await fetchPublicLibraryItemFromShow(normalized);
  if (fromShow) {
    return fromShow;
  }

  const fromSlugQuery = await fetchPublicLibraryItemFromCatalogSlug(normalized);
  if (fromSlugQuery) {
    return fromSlugQuery;
  }

  return findPublicLibraryItemInCatalog(normalized);
}
