import { getHubOrigin } from '@/app/lib/hub-origin'

const HUB_ORIGIN = getHubOrigin()

export const HUB_LOGIN_URL = `${HUB_ORIGIN}/login`
export const HUB_REGISTER_URL = `${HUB_ORIGIN}/register`

/** Hub login with optional post-auth return path (e.g. `/providers?service_type=...`). */
export function hubLoginUrl(redirectPath?: string): string {
  const url = new URL(HUB_LOGIN_URL)
  const path = redirectPath?.trim()
  if (path?.startsWith('/')) {
    url.searchParams.set('redirect', path)
  }
  return url.toString()
}

/** Hub registration with optional post-auth return path. */
export function hubRegisterUrl(redirectPath?: string): string {
  const url = new URL(HUB_REGISTER_URL)
  const path = redirectPath?.trim()
  if (path?.startsWith('/')) {
    url.searchParams.set('redirect', path)
  }
  return url.toString()
}

/** Provider sign-up on the hub (same entry point; role selected during onboarding). */
export const HUB_PROVIDER_REGISTER_URL = `${HUB_ORIGIN}/register`
export const HUB_COMMUNITY_URL = `${HUB_ORIGIN}/community`

export const MEMBER_CTA_LABEL = 'Become A Member'

export const HERO_OFFERING_SERVICE_LABEL = "I'm Offering a Service"
export const HERO_LOOKING_SERVICE_LABEL = "I'm Looking for a Service"

/** Hub book detail page (public; purchase still requires sign-in). */
export function hubLibraryItemUrl(slug: string): string {
  return `${HUB_ORIGIN}/library/${encodeURIComponent(slug)}`
}

/** Hub provider directory with optional service type filter. */
export function hubProvidersUrl(serviceType?: string): string {
  return hubProvidersSearchUrl(serviceType ? { service_type: serviceType } : undefined)
}

/** Hub provider search path for login redirect (service type, location, spoken language). */
export function hubProvidersSearchPath(params?: {
  service_type?: string
  location?: string
  language?: string
}): string {
  const url = new URL(`${HUB_ORIGIN}/providers`)
  if (params?.service_type) {
    url.searchParams.set('service_type', params.service_type)
  }
  if (params?.location?.trim()) {
    url.searchParams.set('location', params.location.trim())
  }
  if (params?.language?.trim()) {
    url.searchParams.set('language', params.language.trim())
  }
  return `${url.pathname}${url.search}`
}

/** Hub provider profile (full listing; contact requires sign-in). */
export function hubProviderProfileUrl(slug: string): string {
  return `${HUB_ORIGIN}/providers/${encodeURIComponent(slug)}`
}

/** Hub provider search (service type, location, spoken language). */
export function hubProvidersSearchUrl(params?: {
  service_type?: string
  location?: string
  language?: string
}): string {
  return `${HUB_ORIGIN}${hubProvidersSearchPath(params)}`
}
