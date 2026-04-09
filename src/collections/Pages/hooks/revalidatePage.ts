import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidatePage: CollectionAfterChangeHook = async ({
  doc, previousDoc, req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const { revalidatePath, revalidateTag } = await import('next/cache')
    if (doc._status === 'published') {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
      payload.logger.info(`Revalidating page at path: ${path}`)
      revalidatePath(path)
      revalidateTag('pages-sitemap', 'max')
    }
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
      revalidatePath(oldPath)
      revalidateTag('pages-sitemap', 'max')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook = async ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const { revalidatePath, revalidateTag } = await import('next/cache')
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('pages-sitemap', 'max')
  }
  return doc
}
