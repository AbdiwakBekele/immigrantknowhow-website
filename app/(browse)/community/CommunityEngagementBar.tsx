"use client";

import type { ReactNode } from "react";

import type { PublicCommunityPost } from "@/app/lib/api/community";
import { HUB_REGISTER_URL } from "@/app/lib/hub-links";

type Props = {
  post: PublicCommunityPost;
  size?: "sm" | "md";
};

function IconHeart() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconComment() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function IconBookmark() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ActionLink({
  label,
  count,
  icon,
  size = "md",
}: {
  label: string;
  count: number;
  icon: ReactNode;
  size?: "sm" | "md";
}) {
  const sizeClass =
    size === "sm"
      ? "px-3 py-1.5 text-xs"
      : "px-3 py-1.5 text-sm";

  return (
    <a
      href={HUB_REGISTER_URL}
      onClick={(event) => event.stopPropagation()}
      className={`inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 ${sizeClass}`}
    >
      {icon}
      <span>{label}</span>
      <span className="rounded-full bg-black/5 px-1.5 py-0.5 text-[11px] tabular-nums">
        {count}
      </span>
    </a>
  );
}

export default function CommunityEngagementBar({ post, size = "md" }: Props) {
  const saveLabel = size === "sm" ? "Bookmark" : "Save";

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      onClick={(event) => event.stopPropagation()}
    >
      <ActionLink
        label="Like"
        count={post.likes_count}
        icon={<IconHeart />}
        size={size}
      />
      <ActionLink
        label={size === "sm" ? "Comment" : "Comment"}
        count={post.comments_count}
        icon={<IconComment />}
        size={size}
      />
      <ActionLink
        label="Share"
        count={post.shares_count}
        icon={<IconShare />}
        size={size}
      />
      <ActionLink
        label={saveLabel}
        count={post.bookmarks_count}
        icon={<IconBookmark />}
        size={size}
      />
    </div>
  );
}
