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
};

type LaravelPaginatedResponse<T> = {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

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
