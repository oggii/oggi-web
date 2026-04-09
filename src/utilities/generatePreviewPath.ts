import type { PayloadRequest } from 'payload'
import { getServerSideURL } from './getURL'

const collectionPrefixMap: Record<string, string> = {
  posts: '/blog',
  pages: '',
}

export const generatePreviewPath = ({
  slug,
  collection,
}: {
  slug?: string | null
  collection: string
  req?: PayloadRequest
}) => {
  const path = `${collectionPrefixMap[collection] ?? ''}/${slug ?? ''}`
  const url = `${getServerSideURL()}${path}`
  return url
}
