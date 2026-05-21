/** Public marketing-site routes (same origin as this Next app). */
export const HOME_PAGE_PATH = "/";
export const SERVICES_SECTION_PATH = "/#services";
export const LIBRARY_PAGE_PATH = "/library";
export const libraryItemPagePath = (slug: string) =>
  `/library/${encodeURIComponent(slug)}`;
export const DV_LOTTERY_PAGE_PATH = "/dv-lottery";
export const COMMUNITY_PAGE_PATH = "/community";
export const CONTACT_PAGE_PATH = "/contact";
