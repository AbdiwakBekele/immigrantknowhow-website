import { cache } from 'react'
import { apiEndpoints } from './config'
import { FALLBACK_PUBLIC_SERVICE_TYPES } from './service-types-fallback'

export type PublicServiceType = {
  value: string
  label: string
  icon: string | null
  description: string
  image_url: string
}

type PublicServiceTypesResponse = {
  service_types?: PublicServiceType[]
}

export const fetchPublicServiceTypes = cache(async function fetchPublicServiceTypes(
  limit = 100,
): Promise<PublicServiceType[]> {
  const requestUrl = `${apiEndpoints.publicServiceTypes}?limit=${limit}`

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('[ServiceTypesAPI] Non-OK response', {
        status: response.status,
        url: requestUrl,
      })
      return FALLBACK_PUBLIC_SERVICE_TYPES
    }

    const data = (await response.json()) as PublicServiceTypesResponse
    const types = data.service_types ?? []
    return types.length > 0 ? types : FALLBACK_PUBLIC_SERVICE_TYPES
  } catch (error) {
    console.error('[ServiceTypesAPI] Fetch failed', { url: requestUrl, error })
    return FALLBACK_PUBLIC_SERVICE_TYPES
  }
})
