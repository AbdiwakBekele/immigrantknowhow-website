import Link from "next/link";

import type { PublicCommunityPost } from "@/app/lib/api/community";

import { categoryLabel } from "./community-utils";

export default function CommunityRecentPosts({ posts }: { posts: PublicCommunityPost[] }) {
  return (
    <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-bold text-[#111827]">Recent Posts</h3>
      <p className="mt-1 text-xs text-[#64748b]">Latest updates from the community feed.</p>

      <div className="mt-3 space-y-2.5">
        {posts.map((post) => (
          <Link
            key={`recent-${post.id}`}
            href={`/community/${post.id}`}
            className="block rounded-2xl border border-slate-200 p-2.5 transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-sm"
          >
            <div className="flex items-start gap-2.5">
              {post.image_url ? (
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#e2e8f0]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image_url}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-slate-600 to-slate-400" />
              )}
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#111827]">{post.title}</p>
                <p className="mt-0.5 truncate text-xs text-[#475569]">
                  {categoryLabel(post.category)}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {posts.length === 0 ? (
          <p className="rounded-lg border border-dashed border-[#d4dcea] p-3 text-center text-xs text-[#64748b]">
            No recent posts available.
          </p>
        ) : null}
      </div>
    </aside>
  );
}
