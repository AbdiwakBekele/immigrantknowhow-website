const baseUrl = "https://hub.immigrantknowhow.com";
// const baseUrl = "http://immigrationknowhow.test";

export const apiConfig = {
  baseUrl,
  auth: {
    signInUrl: "https://hub.immigrantknowhow.com/login",
    signUpUrl: `${baseUrl}/register`,
  },
};

export const apiEndpoints = {
  publicLibraryItems: `${apiConfig.baseUrl}/api/public/library-items`,
  publicLibraryItem: (slug: string) =>
    `${apiConfig.baseUrl}/api/public/library-items/${encodeURIComponent(slug)}`,
  publicDvLottery: `${apiConfig.baseUrl}/api/public/dv-lottery`,
  publicCommunityPosts: `${apiConfig.baseUrl}/api/community/posts`,
  publicCommunityPost: (id: number) =>
    `${apiConfig.baseUrl}/api/community/posts/${id}`,
  publicCommunityComments: (id: number) =>
    `${apiConfig.baseUrl}/api/community/posts/${id}/comments`,
  publicCommunityNews: `${apiConfig.baseUrl}/api/community/news`,
};
