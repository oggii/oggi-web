import type { PayloadRequest } from 'payload'
import { getServerSideURL } from './getURL'

const collectionPrefixMap: Record<string, string> = {
  posts: '/blog',
  pages: '',
}

export const generatePreviewPath = ({
  slug,
  collection,
  req,
}: {
  slug?: string | null
  collection: string
  req: PayloadRequest
}) => {
  const path = `${collectionPrefixMap[collection] ?? ''}/${slug ?? ''}`
  const params = {
    slug: slug ?? '',
    collection,
    path,
  }

  const encodedParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  const url = `${getServerSideURL()}/next/preview?${encodedParams.toString()}`

  return url
}
