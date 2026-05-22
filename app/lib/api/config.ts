const productionHubUrl = "https://hub.immigrantknowhow.com";
const localHubUrl = "http://immigrationknowhow.test";

/** Hub API origin. Override with NEXT_PUBLIC_HUB_API_BASE_URL in .env.local */
const baseUrl =
  process.env.NEXT_PUBLIC_HUB_API_BASE_URL ??
  (process.env.NODE_ENV === "development" ? localHubUrl : productionHubUrl);

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
  publicCommunityPosts: `${apiConfig.baseUrl}/api/community/posts`,
  publicCommunityPost: (id: number) =>
    `${apiConfig.baseUrl}/api/community/posts/${id}`,
  publicCommunityComments: (id: number) =>
    `${apiConfig.baseUrl}/api/community/posts/${id}/comments`,
  publicCommunityNews: `${apiConfig.baseUrl}/api/community/news`,
};
