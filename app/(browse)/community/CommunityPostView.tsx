"use client";

import Link from "next/link";

import type { PublicCommunityComment, PublicCommunityPost } from "@/app/lib/api/community";
import { HUB_REGISTER_URL } from "@/app/lib/hub-links";

import CommunityEngagementBar from "./CommunityEngagementBar";
import {
  categoryLabel,
  commentInitials,
  formatPostDateTime,
  hasPostCoverImage,
  hasPostVideo,
  isDirectVideoFileUrl,
  stripHtml,
  youtubeVideoIdFromUrl,
} from "./community-utils";

type Props = {
  post: PublicCommunityPost;
  comments: PublicCommunityComment[];
};

export default function CommunityPostView({ post, comments }: Props) {
  const youtubeId = youtubeVideoIdFromUrl(post.video_url);
  const showDirectVideo =
    hasPostVideo(post) && !youtubeId && isDirectVideoFileUrl(post.video_url);
  const showExternalVideo =
    hasPostVideo(post) && !youtubeId && !showDirectVideo;
  const bodyText = stripHtml(post.description);
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/community/${post.id}`
      : `/community/${post.id}`;

  return (
    <section className="min-h-screen bg-slate-50 py-4 md:py-6">
      <div className="mx-auto max-w-5xl px-3 sm:px-4 lg:px-6">
        <Link
          href="/community"
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
        >
          <span aria-hidden>←</span>
          <span>Back to Community</span>
        </Link>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-4 md:p-5">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-blue-200 bg-blue-100/70 px-2.5 py-1 text-xs font-semibold text-blue-700">
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
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {post.title}
            </h1>
            {post.created_at ? (
              <p className="mt-1 text-xs text-slate-500">{formatPostDateTime(post.created_at)}</p>
            ) : null}
          </div>

          <div className="p-4 md:p-6">
            {hasPostVideo(post) ? (
              <div className="space-y-4">
                {youtubeId ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title="Post video"
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                {showDirectVideo && post.video_url ? (
                  <video
                    src={post.video_url}
                    className="max-h-[32rem] w-full rounded-2xl bg-black"
                    controls
                    playsInline
                  />
                ) : null}
                {showExternalVideo && post.video_url ? (
                  <a
                    href={post.video_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Open video
                  </a>
                ) : null}
              </div>
            ) : null}

            {!hasPostVideo(post) && hasPostCoverImage(post) && post.image_url ? (
              <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-[#e5e7eb] md:h-[28rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image_url} alt={post.title} className="h-full w-full object-cover" />
              </div>
            ) : null}

            {bodyText ? (
              <div className="prose prose-slate prose-sm mt-4 max-w-none whitespace-pre-wrap sm:prose-base">
                {bodyText}
              </div>
            ) : null}

            <div className="mt-5">
              <CommunityEngagementBar post={post} size="sm" />
            </div>

            <div
              id="share-this-post"
              className="mt-5 scroll-mt-24 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Share this post
              </p>
              <p className="mt-1 break-all text-xs text-slate-500">{shareUrl}</p>
              <a
                href={HUB_REGISTER_URL}
                className="mt-3 inline-flex rounded-full bg-[#1d4ed8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e40af]"
              >
                Sign up to share &amp; engage
              </a>
            </div>
          </div>
        </article>

        <div
          id="comments"
          className="mt-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6"
        >
          <h2 className="text-lg font-bold text-[#111827]">Comments</h2>

          <div className="mt-3 max-h-80 space-y-2 overflow-y-auto">
            {comments.length === 0 ? (
              <p className="text-sm text-[#64748b]">No comments yet.</p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="flex items-start gap-2.5">
                    {comment.author_avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={comment.author_avatar_url}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200"
                      />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-[10px] font-semibold text-slate-700">
                        {commentInitials(comment.author_name)}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-[#334155]">
                        {comment.author_name}
                      </p>
                      <p className="mt-1 text-sm text-[#475569]">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <p className="mt-3 text-sm text-[#64748b]">
            <a href={HUB_REGISTER_URL} className="font-semibold text-[#1d4ed8] hover:underline">
              Create an account
            </a>{" "}
            to add a comment.
          </p>
        </div>
      </div>
    </section>
  );
}
