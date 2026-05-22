import { apiEndpoints } from "./config";

export type PublicServiceProviderUser = {
  first_name: string | null;
  last_name: string | null;
  initials: string;
  avatar_url: string | null;
  city: string | null;
  state: string | null;
};

export type PublicServiceProvider = {
  slug: string;
  business_name: string | null;
  display_name: string;
  tagline: string | null;
  bio_excerpt: string | null;
  primary_service_type: string | null;
  service_types_labels: string[];
  average_rating: number;
  total_reviews: number;
  is_featured: boolean;
  is_verified: boolean;
  background_check_clear: boolean;
  free_consultation: boolean;
  hourly_rate: number | null;
  consultation_fee: number | null;
  serves_remote: boolean;
  serves_in_person: boolean;
  service_radius_miles: number | null;
  location_display: string;
  profile_url: string;
  user: PublicServiceProviderUser | null;
};

export type PublicServiceProviderSearchParams = {
  service_type?: string;
  location?: string;
  language?: string;
  search?: string;
  page?: number;
  per_page?: number;
  sort?: "rating" | "reviews" | "newest" | "experience";
  remote_only?: boolean;
  free_consultation?: boolean;
};

type LaravelPaginatedResponse<T> = {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
};

export type PublicServiceProvidersPage = {
  providers: PublicServiceProvider[];
  currentPage: number;
  lastPage: number;
  total: number;
};

const emptyPage: PublicServiceProvidersPage = {
  providers: [],
  currentPage: 1,
  lastPage: 1,
  total: 0,
};

export async function fetchPublicServiceProviders(
  params: PublicServiceProviderSearchParams = {},
): Promise<PublicServiceProvidersPage> {
  const search = new URLSearchParams({
    per_page: String(params.per_page ?? 12),
    page: String(params.page ?? 1),
  });

  if (params.service_type) {
    search.set("service_type", params.service_type);
  }
  if (params.location?.trim()) {
    search.set("location", params.location.trim());
  }
  if (params.language?.trim()) {
    search.set("language", params.language.trim());
  }
  if (params.search?.trim()) {
    search.set("search", params.search.trim());
  }
  if (params.sort) {
    search.set("sort", params.sort);
  }
  if (params.remote_only) {
    search.set("remote_only", "1");
  }
  if (params.free_consultation) {
    search.set("free_consultation", "1");
  }

  const requestUrl = `${apiEndpoints.publicServiceProviders}?${search.toString()}`;

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error("[ServiceProvidersAPI] Non-OK response", {
        status: response.status,
        url: requestUrl,
      });
      return emptyPage;
    }

    const payload =
      (await response.json()) as LaravelPaginatedResponse<PublicServiceProvider>;

    return {
      providers: payload.data ?? [],
      currentPage: payload.current_page ?? 1,
      lastPage: payload.last_page ?? 1,
      total: payload.total ?? 0,
    };
  } catch (error) {
    console.error("[ServiceProvidersAPI] Fetch failed", { url: requestUrl, error });
    return emptyPage;
  }
}
