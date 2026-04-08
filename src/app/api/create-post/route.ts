import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';
import { getPayloadClient } from '@/lib/payload';
import { convertHTMLToLexical } from '@payloadcms/richtext-lexical';
import { editorConfigFactory } from '@payloadcms/richtext-lexical';
import configPromise from '@payload-config';

const API_SECRET = process.env.POST_API_SECRET || 'oggi-create-post-2026';

export async function POST(request: NextRequest) {
  // Simple auth check
  const authHeader = request.headers.get('x-api-secret');
  if (authHeader !== API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, excerpt, html, status = 'draft' } = body;

    if (!title || !html) {
      return NextResponse.json(
        { error: 'Missing required fields: title, html' },
        { status: 400 },
      );
    }

    // Get Payload client and config
    const payload = await getPayloadClient();
    const config = await configPromise;
    const sanitizedConfig = await payload.config;

    // Build editor config for HTML-to-Lexical conversion
    const editorConfig = await editorConfigFactory.default({
      config: sanitizedConfig,
    });

    // Convert HTML to Lexical JSON
    const lexicalContent = convertHTMLToLexical({
      editorConfig,
      html,
      JSDOM: JSDOM as any,
    });

    // Create the post
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
      id: post.id,
      slug: post.slug,
      url: `/de/blog/${post.slug}`,
      adminUrl: `/admin/collections/posts/${post.id}`,
    }, { status: 201 });

  } catch (error: any) {
    console.error('Create post error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create post' },
      { status: 500 },
    );
  }
}
