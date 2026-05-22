import Link from 'next/link'

import type { PublicCommunityPost } from '@/app/lib/api/community'
import {
  hasPostVideo,
  isDirectVideoFileUrl,
  youtubeVideoIdFromUrl,
} from '@/app/(browse)/community/community-utils'
import { COMMUNITY_PAGE_PATH } from '@/app/lib/site-links'

export default function ResourceVideoMedia({ post }: { post: PublicCommunityPost }) {
  const postHref = `${COMMUNITY_PAGE_PATH}/${post.id}`
  const youtubeId = youtubeVideoIdFromUrl(post.video_url)
  const showDirectVideo =
    hasPostVideo(post) && !youtubeId && isDirectVideoFileUrl(post.video_url)
  const coverImage = String(post.image_url ?? '').trim()

  if (youtubeId) {
    return (
      <Link href={postHref} className="ikh-immigrant-resources-card__media-link" aria-label={post.title}>
        <div className="ikh-immigrant-resources-card__video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={post.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Link>
    )
  }

  if (showDirectVideo && post.video_url) {
    return (
      <div className="ikh-immigrant-resources-card__video">
        <video src={post.video_url} controls playsInline preload="metadata" />
      </div>
    )
  }

  if (coverImage) {
    return (
      <Link href={postHref} className="ikh-immigrant-resources-card__media-link" aria-label={post.title}>
        <div
          className="ikh-ebooks-card__media"
          style={{ backgroundImage: `url('${coverImage}')` }}
          role="img"
        />
        {hasPostVideo(post) ? <span className="ikh-immigrant-resources-card__play">▶ Video</span> : null}
      </Link>
    )
  }

  if (hasPostVideo(post) && post.video_url) {
    return (
      <Link href={postHref} className="ikh-immigrant-resources-card__media-link" aria-label={post.title}>
        <div className="ikh-immigrant-resources-card__video-placeholder">
          <span className="ikh-immigrant-resources-card__play">▶ Video</span>
        </div>
      </Link>
    )
  }

  return (
    <Link href={postHref} className="ikh-immigrant-resources-card__media-link" aria-label={post.title}>
      <div className="ikh-immigrant-resources-card__video-placeholder" />
    </Link>
  )
}
