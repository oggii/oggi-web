import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';
import { getPayloadClient } from '@/lib/payload';
import { convertHTMLToLexical } from '@payloadcms/richtext-lexical';
import { editorConfigFactory } from '@payloadcms/richtext-lexical';

const API_SECRET = process.env.POST_API_SECRET;

async function htmlToLexical(html: string) {
  const payload = await getPayloadClient();
  const sanitizedConfig = await payload.config;
  const editorConfig = await editorConfigFactory.default({ config: sanitizedConfig });
  return convertHTMLToLexical({ editorConfig, html, JSDOM: JSDOM as any });
}

export async function POST(request: NextRequest) {
  if (!API_SECRET) {
    console.error('POST_API_SECRET env var is not set — refusing request');
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const authHeader = request.headers.get('x-api-secret');
  if (authHeader !== API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, title, slug, excerpt, html, status = 'draft' } = body;

    if (!title || !html) {
      return NextResponse.json(
        { error: 'Missing required fields: title, html' },
        { status: 400 },
      );
    }

    const payload = await getPayloadClient();
    const lexicalContent = body._rawContent || await htmlToLexical(html);

    // Update existing post or create new one
    if (id) {
      const post = await payload.update({
        collection: 'posts',
        id,
        data: {
          title,
          excerpt: excerpt || undefined,
          content: lexicalContent,
          status,
        },
      });

      return NextResponse.json({
        success: true,
        action: 'updated',
        id: post.id,
        slug: post.slug,
        url: `/de/blog/${post.slug}`,
        adminUrl: `/admin/collections/posts/${post.id}`,
      });
    }

    const post = await payload.create({
      collection: 'posts',
      data: {
        title,
        slug: slug || undefined,
        excerpt: excerpt || undefined,
        content: lexicalContent,
        status,
      },
    });

    return NextResponse.json({
      success: true,
      action: 'created',
      id: post.id,
      slug: post.slug,
      url: `/de/blog/${post.slug}`,
      adminUrl: `/admin/collections/posts/${post.id}`,
    }, { status: 201 });

  } catch (error: any) {
    console.error('Create/update post error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create/update post' },
      { status: 500 },
    );
  }
}
