import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: { useAsTitle: 'title' },
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (data?.title && (!data.slug || operation === 'create')) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[äöü]/g, (c: string) => ({ ä: 'ae', ö: 'oe', ü: 'ue' })[c] || c)
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        }
        return data
      },
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from title.',
      },
    },
  ],
}
