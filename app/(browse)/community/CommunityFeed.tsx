"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import type { PublicCommunityPost, PublicNewsItem } from "@/app/lib/api/community";
import { apiEndpoints } from "@/app/lib/api/config";

import CommunityNewsPanel from "@/app/(browse)/community/CommunityNewsPanel";
import CommunityPostCard from "@/app/(browse)/community/CommunityPostCard";
import CommunityRecentPosts from "@/app/(browse)/community/CommunityRecentPosts";
import CommunitySidebar from "@/app/(browse)/community/CommunitySidebar";
import {
  categoryLabels,
  communitySectionFromParam,
  type CommunitySection,
} from "@/app/(browse)/community/community-config";

type Props = {
  initialPosts: PublicCommunityPost[];
  initialLastPage: number;
  initialRecentPosts: PublicCommunityPost[];
  initialNewsItems?: PublicNewsItem[];
};

type PostsPayload = {
  posts?: {
    data?: PublicCommunityPost[];
    current_page?: number;
    last_page?: number;
  };
  error?: string;
};

export default function CommunityFeed({
  initialPosts,
  initialLastPage,
  initialRecentPosts,
  initialNewsItems = [],
}: Props) {
  const searchParams = useSearchParams();
  const initialSection = communitySectionFromParam(searchParams.get("section"));
  const [activeSection, setActiveSection] = useState<CommunitySection>(initialSection);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const [recentPosts] = useState(initialRecentPosts);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(initialLastPage);
  const [postsLoading, setPostsLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [postsError, setPostsError] = useState("");

  const [newsItems, setNewsItems] = useState<PublicNewsItem[]>(initialNewsItems);
  const [newsCountry, setNewsCountry] = useState("US");
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState("");

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasMorePosts = page < lastPage;
  const isNewsSection = activeSection === "immigration-news";

  const loadPosts = useCallback(
    async (nextPage: number, section: CommunitySection, searchTerm: string, replace: boolean) => {
      if (section === "immigration-news") {
        return;
      }

      if (!replace) {
        setLoadingMore(true);
      } else {
        setPostsLoading(true);
        setPostsError("");
      }

      const params = new URLSearchParams({
        page: String(nextPage),
        per_page: "20",
        category: section,
      });
      if (searchTerm.trim()) {
        params.set("search", searchTerm.trim());
      }

      try {
        const response = await fetch(
          `${apiEndpoints.publicCommunityPosts}?${params.toString()}`,
          { headers: { Accept: "application/json" } },
        );
        const data = (await response.json()) as PostsPayload;
        const incoming = data.posts?.data ?? [];

        setPage(data.posts?.current_page ?? nextPage);
        setLastPage(data.posts?.last_page ?? nextPage);

        if (replace) {
          setPosts(incoming);
        } else {
          setPosts((prev) => {
            const ids = new Set(prev.map((p) => p.id));
            return [...prev, ...incoming.filter((p) => !ids.has(p.id))];
          });
        }

        if (data.error) {
          setPostsError(data.error);
        }
      } catch {
        if (replace) {
          setPosts([]);
        }
        setPostsError("Unable to load community posts.");
      } finally {
        setPostsLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  );

  const loadNews = useCallback(async (country: string) => {
    setNewsLoading(true);
    setNewsError("");
    try {
      const response = await fetch(
        `${apiEndpoints.publicCommunityNews}?country=${country}&limit=10`,
        { headers: { Accept: "application/json" } },
      );
      const data = await response.json();
      setNewsItems(data.items ?? []);
      if (data.error) {
        setNewsError(data.error);
      }
    } catch {
      setNewsItems([]);
      setNewsError("Unable to load immigration news.");
    } finally {
      setNewsLoading(false);
    }
  }, []);

  const onSectionChange = (section: CommunitySection) => {
    setActiveSection(section);
    if (section === "immigration-news") {
      if (newsItems.length === 0 && !newsLoading) {
        void loadNews(newsCountry);
      }
      return;
    }
    void loadPosts(1, section, search, true);
  };

  useEffect(() => {
    if (initialSection === "immigration-news" && newsItems.length === 0 && !newsLoading) {
      void loadNews(newsCountry);
    }
  }, [initialSection, loadNews, newsCountry, newsItems.length, newsLoading]);

  useEffect(() => {
    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }
    if (isNewsSection) {
      return;
    }
    searchDebounceRef.current = setTimeout(() => {
      void loadPosts(1, activeSection, search, true);
    }, 200);
    return () => {
      if (searchDebounceRef.current) {
        clearTimeout(searchDebounceRef.current);
      }
    };
  }, [search, activeSection, isNewsSection, loadPosts]);

  useEffect(() => {
    if (isNewsSection || !loadMoreRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) {
          return;
        }
        setPage((currentPage) => {
          setLastPage((currentLast) => {
            if (currentPage < currentLast) {
              void loadPosts(currentPage + 1, activeSection, search, false);
            }
            return currentLast;
          });
          return currentPage;
        });
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [activeSection, isNewsSection, loadPosts, search]);

  const filteredPosts = posts.filter((post) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      post.title.toLowerCase().includes(query) ||
      (post.description ?? "").toLowerCase().includes(query) ||
      (post.tag ?? "").toLowerCase().includes(query)
    );
  });

  return (
    <section className="py-2 md:py-4">
      <div className="px-0">
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <CommunitySidebar
            activeSection={activeSection}
            onSectionChange={onSectionChange}
          />

          <div className="min-w-0 flex-1">
            <div
              className={
                activeSection === "feed"
                  ? "grid gap-3 xl:grid-cols-[minmax(0,1fr)_320px]"
                  : "grid gap-3"
              }
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-base font-semibold text-[#111827]">
                    {categoryLabels[activeSection]}
                  </h2>
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={`Search in ${categoryLabels[activeSection]}...`}
                    className="h-11 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 text-[15px] text-slate-900 outline-none ring-blue-200 transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-white focus:ring-2 sm:w-80"
                  />
                </div>

                {isNewsSection ? (
                  <CommunityNewsPanel
                    country={newsCountry}
                    items={newsItems}
                    loading={newsLoading}
                    error={newsError}
                    search={search}
                    onCountryChange={(c) => {
                      setNewsCountry(c);
                      void loadNews(c);
                    }}
                    onReload={() => void loadNews(newsCountry)}
                  />
                ) : (
                  <div className="mt-4 space-y-3">
                    {postsLoading ? (
                      <p className="rounded-lg border border-dashed border-[#c9d5e6] p-4 text-center text-sm text-[#64748b]">
                        Loading community posts...
                      </p>
                    ) : null}

                    {postsError ? (
                      <p className="text-sm text-[#b91c1c]">{postsError}</p>
                    ) : null}

                    {filteredPosts.map((post) => (
                      <CommunityPostCard key={post.id} post={post} />
                    ))}

                    {!postsLoading && filteredPosts.length === 0 ? (
                      <p className="rounded-lg border border-dashed border-[#c9d5e6] p-4 text-center text-sm text-[#64748b]">
                        No posts found for this section. Try another category or search.
                      </p>
                    ) : null}

                    {hasMorePosts || loadingMore ? (
                      <div
                        ref={loadMoreRef}
                        className="flex min-h-16 items-center justify-center py-4"
                      >
                        {loadingMore ? (
                          <p className="text-sm text-[#64748b]">Loading more posts...</p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {activeSection === "feed" ? (
                <CommunityRecentPosts posts={recentPosts} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
