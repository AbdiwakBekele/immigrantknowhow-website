import { categoryLabels } from "./community-config";

export function categoryLabel(category: string): string {
  return categoryLabels[category] ?? category.replace(/-/g, " ");
}

export function stripHtml(html: string | null): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function descriptionPreview(html: string | null, max = 280): string {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export function formatPostDate(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatPostDateTime(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function youtubeVideoIdFromUrl(url: string | null | undefined): string | null {
  const value = String(url ?? "").trim();
  if (!value) return null;

  try {
    const parsed = new URL(value);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.replace("/", "").slice(0, 32) || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }
      const embed = parsed.pathname.match(/^\/embed\/([^/]+)/);
      if (embed) return embed[1] || null;
      const shorts = parsed.pathname.match(/^\/shorts\/([^/]+)/);
      if (shorts) return shorts[1] || null;
    }
  } catch {
    return null;
  }

  return null;
}

export function isDirectVideoFileUrl(url: string | null | undefined): boolean {
  const value = String(url ?? "").trim();
  if (!value) return false;
  return /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(value);
}

export function hasPostVideo(post: { video_url?: string | null }): boolean {
  return Boolean(String(post.video_url ?? "").trim());
}

export function hasPostCoverImage(post: { image_url?: string | null }): boolean {
  return Boolean(String(post.image_url ?? "").trim());
}

export function commentInitials(name: string | null | undefined): string {
  const text = String(name ?? "").trim();
  if (!text) return "U";
  return text
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
