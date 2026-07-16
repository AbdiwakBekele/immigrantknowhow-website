import { getHubOrigin } from '@/app/lib/hub-origin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Stripe Dashboard is configured for https://immigrantknowhow.com/webhooks/stripe,
 * but webhook verification and fulfillment live on the Laravel hub.
 * Forward the unmodified body + Stripe-Signature header so signature checks still pass.
 */
export async function POST(request: Request): Promise<Response> {
  const hubOrigin = getHubOrigin().replace(/\/+$/, '')
  const target = `${hubOrigin}/webhooks/stripe`
  const rawBody = Buffer.from(await request.arrayBuffer())
  const stripeSignature = request.headers.get('stripe-signature') ?? ''
  const contentType = request.headers.get('content-type') ?? 'application/json'

  let upstream: Response
  try {
    upstream = await fetch(target, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        'Stripe-Signature': stripeSignature,
        Accept: 'application/json, text/plain, */*',
      },
      body: rawBody,
      cache: 'no-store',
    })
  } catch {
    return new Response('Webhook upstream unavailable', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  const responseBody = await upstream.arrayBuffer()
  const responseType = upstream.headers.get('content-type') ?? 'text/plain; charset=utf-8'

  return new Response(responseBody, {
    status: upstream.status,
    headers: {
      'Content-Type': responseType,
      'Cache-Control': 'no-store',
    },
  })
}
