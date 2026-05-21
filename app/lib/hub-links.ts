const HUB_ORIGIN = 'https://hub.immigrantknowhow.com'

export const HUB_LOGIN_URL = `${HUB_ORIGIN}/login`
export const HUB_REGISTER_URL = `${HUB_ORIGIN}/register`
export const HUB_COMMUNITY_URL = `${HUB_ORIGIN}/community`

export const MEMBER_CTA_LABEL = 'Become A Member'

/** Hub book detail page (public; purchase still requires sign-in). */
export function hubLibraryItemUrl(slug: string): string {
  return `${HUB_ORIGIN}/library/${encodeURIComponent(slug)}`
}
