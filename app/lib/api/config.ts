import { getHubOrigin } from "@/app/lib/hub-origin";

/** Hub API origin. Override with NEXT_PUBLIC_HUB_ORIGIN or NEXT_PUBLIC_HUB_API_BASE_URL on the server. */
const baseUrl = getHubOrigin();

export const apiConfig = {
  baseUrl,
  auth: {
    signInUrl: `${baseUrl}/login`,
    signUpUrl: `${baseUrl}/register`,
  },
};

export const apiEndpoints = {
  publicLibraryItems: `${apiConfig.baseUrl}/api/public/library-items`,
  publicLibraryItem: (slug: string) =>
    `${apiConfig.baseUrl}/api/public/library-items/${encodeURIComponent(slug)}`,
  publicDvLottery: `${apiConfig.baseUrl}/api/public/dv-lottery`,
  publicServiceTypes: `${apiConfig.baseUrl}/api/public/service-types`,
  publicServiceProviders: `${apiConfig.baseUrl}/api/public/service-providers`,
  publicCommunityPosts: `${apiConfig.baseUrl}/api/public/community/posts`,
  publicCommunityPost: (id: number) =>
    `${apiConfig.baseUrl}/api/public/community/posts/${id}`,
  publicCommunityComments: (id: number) =>
    `${apiConfig.baseUrl}/api/public/community/posts/${id}/comments`,
  publicCommunityNews: `${apiConfig.baseUrl}/api/public/community/news`,
};
