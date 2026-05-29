import type { ReactNode } from 'react'
import Link from 'next/link'

import type { PublicCommunityPost } from '@/app/lib/api/community'
import {
  hasPostVideo,
  isDirectVideoFileUrl,
  youtubeVideoIdFromUrl,
} from '@/app/(browse)/community/community-utils'
import { COMMUNITY_PAGE_PATH } from '@/app/lib/site-links'

function MediaLink({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: ReactNode
}) {
  const isExternal = /^https?:\/\//i.test(href)
  const className = 'ikh-immigrant-resources-card__media-link'

  if (isExternal) {
    return (
      <a href={href} className={className} aria-label={title} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} aria-label={title}>
      {children}
    </Link>
  )
}

export default function ResourceVideoMedia({
  post,
  href,
}: {
  post: PublicCommunityPost
  href?: string
}) {
  const postHref = href ?? `${COMMUNITY_PAGE_PATH}/${post.id}`
  const youtubeId = youtubeVideoIdFromUrl(post.video_url)
  const showDirectVideo =
    hasPostVideo(post) && !youtubeId && isDirectVideoFileUrl(post.video_url)
  const coverImage = String(post.image_url ?? '').trim()

  if (youtubeId) {
    return (
      <MediaLink href={postHref} title={post.title}>
        <div className="ikh-immigrant-resources-card__video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={post.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </MediaLink>
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
      <MediaLink href={postHref} title={post.title}>
        <div
          className="ikh-ebooks-card__media"
          style={{ backgroundImage: `url('${coverImage}')` }}
          role="img"
        />
        {hasPostVideo(post) ? <span className="ikh-immigrant-resources-card__play">▶ Video</span> : null}
      </MediaLink>
    )
  }

  if (hasPostVideo(post) && post.video_url) {
    return (
      <MediaLink href={postHref} title={post.title}>
        <div className="ikh-immigrant-resources-card__video-placeholder">
          <span className="ikh-immigrant-resources-card__play">▶ Video</span>
        </div>
      </MediaLink>
    )
  }

  return (
    <MediaLink href={postHref} title={post.title}>
      <div className="ikh-immigrant-resources-card__video-placeholder" />
    </MediaLink>
  )
}
