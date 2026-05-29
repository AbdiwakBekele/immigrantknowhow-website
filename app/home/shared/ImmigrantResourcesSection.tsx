'use client'

import { useState } from 'react'

import type { PublicCommunityPost, PublicNewsItem } from '@/app/lib/api/community'
import { descriptionPreview } from '@/app/(browse)/community/community-utils'
import { COMMUNITY_PAGE_PATH } from '@/app/lib/site-links'

import {
  HOME_FEATURED_VIDEO_POST,
  HOME_FEATURED_VIDEO_URL,
  articleCardImage,
  IMMIGRANT_RESOURCES_SECTION_ID,
  normalizeArticlesForDisplay,
  RESOURCE_CAROUSEL_LIMIT,
  trimArticleSummary,
} from './immigrant-resources-data'
import ResourceVideoMedia from './ResourceVideoMedia'
import { CompassIcon } from './ui'

type ResourceTab = 'articles' | 'videos'

function articleCoverUrl(item: PublicNewsItem, index: number): string {
  return item.image || articleCardImage(index)
}

function articleSummary(item: PublicNewsItem): string {
  const text = trimArticleSummary(String(item.summary ?? '').trim() || item.title)
  if (text) {
    return text
  }
  return 'Latest immigration news from trusted sources.'
}

function videoPostHref(post: PublicCommunityPost): string {
  if (post.id === HOME_FEATURED_VIDEO_POST.id) {
    return HOME_FEATURED_VIDEO_URL
  }

  return `${COMMUNITY_PAGE_PATH}/${post.id}`
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href)
}

export default function ImmigrantResourcesSection({
  articles = [],
  videos = [],
}: {
  articles?: PublicNewsItem[]
  videos?: PublicCommunityPost[]
}) {
  const [activeTab, setActiveTab] = useState<ResourceTab>('articles')
  const articleItems = normalizeArticlesForDisplay((articles ?? []).slice(0, RESOURCE_CAROUSEL_LIMIT))
  const apiVideoItems = (videos ?? []).filter((post) => post.video_url !== HOME_FEATURED_VIDEO_URL)
  const videoItems = [HOME_FEATURED_VIDEO_POST, ...apiVideoItems.slice(1)]
    .slice(0, RESOURCE_CAROUSEL_LIMIT)
  const showArticles = activeTab === 'articles'
  const panelItems = showArticles ? articleItems : videoItems
  const moreHref = showArticles
    ? `${COMMUNITY_PAGE_PATH}?section=immigration-news`
    : COMMUNITY_PAGE_PATH

  return (
    <section id={IMMIGRANT_RESOURCES_SECTION_ID} className="ikh-section ikh-immigrant-resources">
      <div className="ikh-shell">
        <h2 className="ikh-heading ikh-heading--center ikh-heading--narrow">
          Immigrant <span className="secondary">Resources</span>
        </h2>
        <p className="ikh-section-copy ikh-immigrant-resources__subtitle">
          Articles and videos that answer common questions and make the next step easier.
        </p>

        <div className="ikh-immigrant-resources__tabs" role="tablist" aria-label="Resource type">
          <button
            type="button"
            role="tab"
            aria-selected={showArticles}
            className={`ikh-immigrant-resources__tab ${showArticles ? 'is-active' : ''}`}
            onClick={() => setActiveTab('articles')}
          >
            Articles
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!showArticles}
            className={`ikh-immigrant-resources__tab ${!showArticles ? 'is-active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
        </div>

        <h3 className="ikh-immigrant-resources__panel-title">
          {showArticles ? 'Latest Articles' : 'Latest Videos'}
        </h3>

        {panelItems.length === 0 ? (
          <p className="ikh-section-copy ikh-immigrant-resources__empty">
            {showArticles
              ? 'Immigration news is loading or temporarily unavailable. Visit the community page for the latest stories.'
              : 'No community videos yet. Check back soon or browse the community feed.'}
          </p>
        ) : (
          <div className="ikh-ebooks-carousel-wrap">
            <div className="ikh-ebooks-grid" role="tabpanel">
              {showArticles
                ? articleItems.map((item, index) => (
                    <article className="ikh-ebooks-card ikh-immigrant-resources-card" key={item.id}>
                      <div
                        className="ikh-ebooks-card__media"
                        style={{ backgroundImage: `url('${articleCoverUrl(item, index)}')` }}
                        role="img"
                        aria-label={item.title}
                      />
                      <div className="ikh-ebooks-card__body">
                        <h3>{item.title}</h3>
                        <p>{articleSummary(item)}</p>
                        <a
                          className="ikh-ebooks-card__link"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read article →
                        </a>
                      </div>
                    </article>
                  ))
                : videoItems.map((post) => {
                    const postHref = videoPostHref(post)
                    const externalHref = isExternalHref(postHref)

                    return (
                      <article className="ikh-ebooks-card ikh-immigrant-resources-card" key={post.id}>
                        <ResourceVideoMedia post={post} href={postHref} />
                        <div className="ikh-ebooks-card__body">
                          <h3>{post.title}</h3>
                          <p>
                            {descriptionPreview(post.description, 120) ||
                              'Watch this community video.'}
                          </p>
                          <a
                            className="ikh-ebooks-card__link"
                            href={postHref}
                            target={externalHref ? '_blank' : undefined}
                            rel={externalHref ? 'noreferrer' : undefined}
                          >
                            Watch video →
                          </a>
                        </div>
                      </article>
                    )
                  })}
            </div>
          </div>
        )}

        <div className="ikh-immigrant-resources__actions">
          <a href={moreHref} className="ikh-button ikh-button--primary">
            <CompassIcon />
            <span>{showArticles ? 'More Articles' : 'More Videos'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
