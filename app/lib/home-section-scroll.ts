import { HOME_PAGE_PATH } from '@/app/lib/site-links'

export const HOW_SECTION_ID = 'how'
export const SERVICES_SECTION_ID = 'services'
export const FAQ_SECTION_ID = 'faq'
export const IMMIGRANT_RESOURCES_SECTION_ID = 'immigrant-resources'

export const HOW_SECTION_PATH = `${HOME_PAGE_PATH}#${HOW_SECTION_ID}`
export const FAQ_SECTION_PATH = `${HOME_PAGE_PATH}#${FAQ_SECTION_ID}`

export function scrollToHomeSection(sectionId: string) {
  requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

export function hasHomeSection(sectionId: string): boolean {
  return Boolean(document.getElementById(sectionId))
}

export function scrollToHomeSectionWhenReady(sectionId: string, maxAttempts = 24, delayMs = 50) {
  let attempts = 0

  const tryScroll = () => {
    if (hasHomeSection(sectionId)) {
      scrollToHomeSection(sectionId)
      return
    }

    if (attempts < maxAttempts) {
      attempts += 1
      window.setTimeout(tryScroll, delayMs)
    }
  }

  tryScroll()
}

export function homeHashSectionId(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  const hash = window.location.hash.replace(/^#/, '')
  if (
    hash === HOW_SECTION_ID ||
    hash === SERVICES_SECTION_ID ||
    hash === FAQ_SECTION_ID ||
    hash === IMMIGRANT_RESOURCES_SECTION_ID
  ) {
    return hash
  }

  return null
}
