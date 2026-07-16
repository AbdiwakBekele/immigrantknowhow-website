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

  if (!stripeSignature) {
    return new Response('Missing Stripe-Signature header', {
      status: 400,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  }

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
      redirect: 'manual',
    })
  } catch {
    return new Response('Webhook upstream unavailable', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  }

  // Do not follow redirects — Stripe must receive the hub status directly.
  if (upstream.status >= 300 && upstream.status < 400) {
    return new Response('Webhook upstream redirected unexpectedly', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
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
