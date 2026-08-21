import type { APIRoute } from 'astro'

import { getLocalPayload } from '@/lib/payload'

export const GET: APIRoute = async () => {
  const payload = await getLocalPayload()
  const media = await payload.find({
    collection: 'media',
    depth: 0,
  })

  return Response.json(media)
}
