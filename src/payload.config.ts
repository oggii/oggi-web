import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import type { CollectionConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor, EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import sharp from 'sharp';

// New collections, globals, plugins
import { Categories } from './collections/Categories';
import { Pages } from './collections/Pages';
import { Header } from './Header/config';
import { Footer } from './Footer/config';
import { plugins } from './plugins';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äöü]/g, (c) => ({ ä: 'ae', ö: 'oe', ü: 'ue' })[c] || c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'name', type: 'text' },
  ],
};

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    mimeTypes: ['image/*'],
  },
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
  ],
};

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    // Public can only read published posts
    read: ({ req }) => {
      if (req.user) return true;
      return { status: { equals: 'published' } };
    },
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        // Auto-generate slug from title on create
        if (operation === 'create' && data?.title && !data.slug) {
          data.slug = slugify(data.title);
        }
        // Auto-set publishedAt when status changes to published
        if (data?.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from title. Edit to customize.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'Short summary shown on the blog listing page.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'Auto-set when publishing. Override for scheduled posts.',
      },
    },
  ],
};

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, EXPERIMENTAL_TableFeature()],
  }),
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.og_POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
    ...plugins,
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  collections: [Users, Media, Posts, Categories, Pages],
  globals: [Header, Footer],
});
