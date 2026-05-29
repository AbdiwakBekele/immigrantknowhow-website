/** Public marketing-site routes (same origin as this Next app). */
export const HOME_PAGE_PATH = "/";
export const SERVICES_SECTION_PATH = "/#services";
export const LIBRARY_PAGE_PATH = "/library";
export const libraryItemPagePath = (slug: string) =>
  `/library/${encodeURIComponent(slug)}`;
export const DV_LOTTERY_PAGE_PATH = "/dv-lottery";
export const COMMUNITY_PAGE_PATH = "/community";
export const PROVIDERS_PAGE_PATH = "/providers";
export const CONTACT_PAGE_PATH = "/contact";
export const TERMS_PAGE_PATH = "/terms";
export const PRIVACY_PAGE_PATH = "/privacy";

export type LibrarySearchParams = {
  search?: string;
  page?: string;
};

export function librarySearchPath(params?: LibrarySearchParams): string {
  const search = new URLSearchParams();
  if (params?.search?.trim()) {
    search.set("search", params.search.trim());
  }
  if (params?.page?.trim()) {
    search.set("page", params.page.trim());
  }
  const query = search.toString();
  return query ? `${LIBRARY_PAGE_PATH}?${query}` : LIBRARY_PAGE_PATH;
}

export type ProviderSearchParams = {
  service_type?: string;
  location?: string;
  language?: string;
  search?: string;
  page?: string;
  sort?: string;
};

/** Marketing-site provider search results (query string mirrors hub filters). */
export function providersSearchPath(params?: ProviderSearchParams): string {
  const search = new URLSearchParams();
  if (params?.service_type) {
    search.set("service_type", params.service_type);
  }
  if (params?.location?.trim()) {
    search.set("location", params.location.trim());
  }
  if (params?.language?.trim()) {
    search.set("language", params.language.trim());
  }
  if (params?.search?.trim()) {
    search.set("search", params.search.trim());
  }
  if (params?.page?.trim()) {
    search.set("page", params.page.trim());
  }
  if (params?.sort?.trim()) {
    search.set("sort", params.sort.trim());
  }
  const query = search.toString();
  return query ? `${PROVIDERS_PAGE_PATH}?${query}` : PROVIDERS_PAGE_PATH;
}
