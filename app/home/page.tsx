import { fetchPublicCommunityNews, fetchPublicCommunityVideos } from '@/app/lib/api/community'
import { fetchPublicLibraryEbooks } from '@/app/lib/api/library'
import { fetchPublicServiceTypes } from '@/app/lib/api/service-types'
import HomeLikePage from './HomeLikePage'
import { HOME_PAGE_CONFIG } from './shared/country-pages'
import { RESOURCE_CAROUSEL_LIMIT } from './shared/immigrant-resources-data'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [serviceTypes, ebooks, newsArticles, videoPosts] = await Promise.all([
    fetchPublicServiceTypes(100),
    fetchPublicLibraryEbooks(6),
    fetchPublicCommunityNews('US', RESOURCE_CAROUSEL_LIMIT),
    fetchPublicCommunityVideos(RESOURCE_CAROUSEL_LIMIT),
  ])

  return (
    <HomeLikePage
      config={HOME_PAGE_CONFIG}
      serviceTypes={serviceTypes ?? []}
      ebooks={ebooks ?? []}
      resourceArticles={newsArticles ?? []}
      resourceVideos={videoPosts}
    />
  )
}
