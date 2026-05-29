import type { PublicCommunityPost, PublicNewsItem } from '@/app/lib/api/community'

const asset = (file: string) => `/images/home/2025/immigrant-resources/${file}`

/** Card photos aligned with the design mockup (pen, forms, phone, library). */
export const ARTICLE_CARD_IMAGES = [
  asset('article-trusted-help.jpg'),
  asset('article-documents.jpg'),
  asset('article-money-basics.jpg'),
  asset('article-school-support.jpg'),
] as const

/** CDN fallbacks when a local asset is missing. */
export const ARTICLE_CARD_IMAGES_REMOTE = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3b83d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521587760476-6c12a7b040de?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
] as const

export const VIDEO_CARD_IMAGES = [
  asset('video-community-1.jpg'),
  asset('video-community-2.jpg'),
  asset('video-community-3.jpg'),
  asset('video-community-4.jpg'),
] as const

export const VIDEO_CARD_IMAGES_REMOTE = [
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1536240478700-b869070f4279?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
] as const

export const IMMIGRANT_RESOURCES_SECTION_ID = 'immigrant-resources'

export const RESOURCE_CAROUSEL_LIMIT = 6

export const HOME_FEATURED_VIDEO_URL = 'https://youtu.be/4k15Lxz3rc8'

export const HOME_FEATURED_VIDEO_POST: PublicCommunityPost = {
  id: -1,
  title: 'Learn more about immigrantknowhow.com',
  description: 'Watch this introduction to Immigrant Know How.',
  tag: null,
  category: 'feed',
  contributor_name: 'Immigrant Know How',
  contributor_country: null,
  image_url: 'https://i.ytimg.com/vi/4k15Lxz3rc8/hqdefault.jpg',
  video_url: HOME_FEATURED_VIDEO_URL,
  likes_count: 0,
  comments_count: 0,
  shares_count: 0,
  bookmarks_count: 0,
  user_reactions: [],
  created_at: null,
}

/** Design mockup copy — used when shaping summaries to match card height. */
export const ARTICLE_SUMMARY_MAX_CHARS = 95

export function articleCardImage(index: number): string {
  return ARTICLE_CARD_IMAGES[index % ARTICLE_CARD_IMAGES.length]
}

export function articleCardImageFallback(index: number): string {
  return ARTICLE_CARD_IMAGES_REMOTE[index % ARTICLE_CARD_IMAGES_REMOTE.length]
}

export function videoCardImage(index: number): string {
  return VIDEO_CARD_IMAGES[index % VIDEO_CARD_IMAGES.length]
}

export function videoCardImageFallback(index: number): string {
  return VIDEO_CARD_IMAGES_REMOTE[index % VIDEO_CARD_IMAGES_REMOTE.length]
}

function decodeFeedText(text: string): string {
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
}

export function trimArticleSummary(text: string, max = ARTICLE_SUMMARY_MAX_CHARS): string {
  const normalized = decodeFeedText(text).replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) {
    return normalized
  }
  return `${normalized.slice(0, max).trim()}…`
}

export function normalizeArticlesForDisplay(items: PublicNewsItem[]): PublicNewsItem[] {
  return items.map((item, index) => ({
    ...item,
    image: articleCardImage(index),
    summary: trimArticleSummary(item.summary || item.title),
  }))
}
