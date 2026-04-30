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
};
