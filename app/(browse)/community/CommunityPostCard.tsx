import Link from "next/link";

import type { PublicCommunityPost } from "@/app/lib/api/community";

import CommunityEngagementBar from "./CommunityEngagementBar";
import { categoryLabel, descriptionPreview, hasPostVideo } from "./community-utils";

export default function CommunityPostCard({ post }: { post: PublicCommunityPost }) {
  const showMedia = post.image_url || hasPostVideo(post);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/community/${post.id}`}
        className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
      >
        {showMedia ? (
          <div className="relative mb-3 h-52 overflow-hidden rounded-xl bg-[#e5e7eb] sm:h-56 md:h-64">
            {post.image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.image_url}
                alt={post.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Video post
                </span>
              </div>
            )}
            {hasPostVideo(post) ? (
              <span className="absolute bottom-3 right-3 inline-flex items-center rounded-full bg-black/65 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                ▶ Video
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
            {categoryLabel(post.category)}
          </span>
          {post.contributor_name ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 py-1 pl-1 pr-2.5 text-xs font-semibold text-indigo-800">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5Z" />
                </svg>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wide text-indigo-600">
                Contributor
              </span>
              <span className="text-indigo-900">{post.contributor_name}</span>
            </span>
          ) : null}
          {post.contributor_country ? (
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
              {post.contributor_country}
            </span>
          ) : null}
          {post.tag ? (
            <span className="rounded-full bg-[#eef2ff] px-2.5 py-1 text-xs font-semibold text-[#3730a3]">
              {post.tag}
            </span>
          ) : null}
        </div>

        <h3 className="text-xl font-bold text-[#111827] group-hover:underline">{post.title}</h3>
        <p className="mt-1.5 line-clamp-3 text-[15px] text-[#4b5563]">
          {descriptionPreview(post.description, 400)}
        </p>
      </Link>

      <div className="relative z-10 mt-3">
        <CommunityEngagementBar post={post} />
      </div>
    </article>
  );
}
