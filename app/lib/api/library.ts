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
  is_featured?: boolean;
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
  ai_summary?: string | null;
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

export type PublicLibraryItemsPage = {
  items: PublicLibraryItem[];
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
  /** Featured titles included in `items` (page 1 only). */
  featuredCount?: number;
  /** Total featured matching the current search. */
  featuredTotal?: number;
};

export type PublicLibraryItemsParams = {
  search?: string;
  page?: number;
  perPage?: number;
  /** When set, filter to featured (`true`) or non-featured (`false`) only. */
  featured?: boolean;
  type?: string;
};

function emptyLibraryItemsPage(
  page: number,
  perPage: number,
  items: PublicLibraryItem[] = [],
): PublicLibraryItemsPage {
  return {
    items,
    currentPage: page,
    lastPage: 1,
    perPage,
    total: items.length,
  };
}

function sortFeaturedFirst(items: PublicLibraryItem[]): PublicLibraryItem[] {
  return [...items].sort((a, b) => Number(Boolean(b.is_featured)) - Number(Boolean(a.is_featured)));
}

export const fetchPublicLibraryEbooks = cache(async function fetchPublicLibraryEbooks(
  limit = 24,
): Promise<PublicLibraryItem[]> {
  const requestLimit = Math.min(100, Math.max(limit, 1));

  async function fetchEbooks(extra: Record<string, string>): Promise<PublicLibraryItem[]> {
    const params = new URLSearchParams({
      type: "ebook",
      per_page: String(requestLimit),
      page: "1",
      ...extra,
    });
    const requestUrl = `${apiEndpoints.publicLibraryItems}?${params.toString()}`;

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

    return payload.data ?? [];
  }

  try {
    const featured = await fetchEbooks({ featured: "1" });
    if (featured.length > 0) {
      return featured
        .map((item) => ({ ...item, is_featured: true }))
        .slice(0, requestLimit);
    }

    // Fallback if the featured filter is unavailable: prefer items flagged featured.
    const allEbooks = await fetchEbooks({});
    const featuredFromList = sortFeaturedFirst(allEbooks).filter(
      (item) => item.is_featured,
    );

    if (featuredFromList.length > 0) {
      return featuredFromList.slice(0, requestLimit);
    }

    return sortFeaturedFirst(allEbooks).slice(0, requestLimit);
  } catch {
    return [];
  }
});

export async function fetchPublicLibraryItems(
  params: PublicLibraryItemsParams = {},
): Promise<PublicLibraryItemsPage> {
  const page = Math.max(1, params.page ?? 1);
  const perPage = Math.min(100, Math.max(1, params.perPage ?? 20));
  const requestParams = new URLSearchParams({
    per_page: String(perPage),
    page: String(page),
  });

  if (params.search?.trim()) {
    requestParams.set("search", params.search.trim());
  }

  if (typeof params.featured === "boolean") {
    requestParams.set("featured", params.featured ? "1" : "0");
  }

  if (params.type?.trim()) {
    requestParams.set("type", params.type.trim());
  }

  const requestUrl = `${apiEndpoints.publicLibraryItems}?${requestParams.toString()}`;

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
      return emptyLibraryItemsPage(page, perPage);
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

    const items = payload.data ?? [];

    return {
      items:
        typeof params.featured === "boolean" ? items : sortFeaturedFirst(items),
      currentPage: payload.current_page ?? page,
      lastPage: payload.last_page ?? 1,
      perPage: payload.per_page ?? perPage,
      total: payload.total ?? payload.data?.length ?? 0,
    };
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

    return emptyLibraryItemsPage(page, perPage);
  }
}

/**
 * Catalog listing with every featured title pinned above non-featured results.
 * Featured books are loaded in full on page 1 (not limited to the page size).
 */
export async function fetchPublicLibraryCatalog(
  params: PublicLibraryItemsParams = {},
): Promise<PublicLibraryItemsPage> {
  const page = Math.max(1, params.page ?? 1);
  const perPage = Math.min(50, Math.max(1, params.perPage ?? 20));
  const search = params.search?.trim() || undefined;

  const [featuredPage, regularPage] = await Promise.all([
    fetchPublicLibraryItems({
      search,
      featured: true,
      perPage: 100,
      page: 1,
    }),
    fetchPublicLibraryItems({
      search,
      featured: false,
      perPage,
      page,
    }),
  ]);

  const featuredItems =
    page === 1
      ? featuredPage.items.map((item) => ({ ...item, is_featured: true }))
      : [];

  return {
    items: [...featuredItems, ...regularPage.items],
    currentPage: regularPage.currentPage,
    lastPage: Math.max(1, regularPage.lastPage),
    perPage: regularPage.perPage,
    total: featuredPage.total + regularPage.total,
    featuredCount: featuredItems.length,
    featuredTotal: featuredPage.total,
  };
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
