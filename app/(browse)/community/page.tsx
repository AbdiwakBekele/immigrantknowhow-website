import type { Metadata } from "next";
import { Suspense } from "react";

import SitePage from "@/app/components/Layout/SitePage";
import {
  fetchPublicCommunityPostsPage,
} from "@/app/lib/api/community";

import CommunityFeed from "./CommunityFeed";

export const metadata: Metadata = {
  title: "Community - Immigrants KnowHow",
  description: "Browse community posts, resources, and immigration news.",
};

export default async function PublicCommunityPage() {
  const [{ posts, lastPage }, recentPage] = await Promise.all([
    fetchPublicCommunityPostsPage(1, "feed", "", 20),
    fetchPublicCommunityPostsPage(1, "feed", "", 5),
  ]);

  return (
    <SitePage wide flush className="ikh-site-page--community">
      <Suspense fallback={null}>
        <CommunityFeed
          initialPosts={posts}
          initialLastPage={lastPage}
          initialRecentPosts={recentPage.posts}
        />
      </Suspense>
    </SitePage>
  );
}
