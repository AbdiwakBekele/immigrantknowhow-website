export const categoryLabels: Record<string, string> = {
  feed: "Feed",
  "ask-intro": "Intro",
  "ask-announcement": "Announcement",
  "immigration-legal": "Immigration & Legal",
  "career-finance": "Career & Finance",
  "health-wellness": "Health & Wellness",
  "daily-living": "Daily Living & Settling In",
  "culture-community": "Culture & Community",
  "immigration-news": "Latest Immigration News",
};

export const immigrantResourceSections = [
  "immigration-legal",
  "career-finance",
  "health-wellness",
  "daily-living",
  "culture-community",
] as const;

export const newsCountries = ["US", "EU", "CA", "GB"] as const;

export type CommunitySection =
  | "feed"
  | "ask-intro"
  | "ask-announcement"
  | (typeof immigrantResourceSections)[number]
  | "immigration-news";
