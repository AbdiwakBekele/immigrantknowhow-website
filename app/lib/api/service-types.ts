import { cache } from 'react'
import { apiEndpoints } from './config'

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
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      console.error('[ServiceTypesAPI] Non-OK response', {
        status: response.status,
        url: requestUrl,
      })
      return []
    }

    const data = (await response.json()) as PublicServiceTypesResponse
    return data.service_types ?? []
  } catch (error) {
    console.error('[ServiceTypesAPI] Fetch failed', { url: requestUrl, error })
    return []
  }
})
