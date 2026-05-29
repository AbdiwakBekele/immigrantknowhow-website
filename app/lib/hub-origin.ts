const productionHubUrl = 'https://hub.immigrantknowhow.com'

/** Hub origin for API + auth links. Set NEXT_PUBLIC_HUB_ORIGIN or NEXT_PUBLIC_HUB_API_BASE_URL on the server. */
export function getHubOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_HUB_ORIGIN ??
    process.env.NEXT_PUBLIC_HUB_API_BASE_URL ??
    productionHubUrl
  )
}
