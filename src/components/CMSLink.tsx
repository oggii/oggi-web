import Link from 'next/link'
import React from 'react'
import { cn } from '@/utilities/cn'

type CMSLinkProps = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  reference?: {
    relationTo: string
    value: string | { slug?: string }
  } | null
  label?: string | null
  newTab?: boolean | null
  appearance?: 'default' | 'outline' | null
  className?: string
  children?: React.ReactNode
}

export const CMSLink: React.FC<CMSLinkProps> = ({
  type, url, reference, label, newTab, appearance = 'default', className, children,
}) => {
  let href = url || ''

  if (type === 'reference' && reference) {
    const slug = typeof reference.value === 'object' ? reference.value.slug : reference.value
    href = reference.relationTo === 'pages' ? `/${slug}` : `/blog/${slug}`
  }

  if (!href) return null

  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200'
  const variants: Record<string, string> = {
    default: 'bg-white text-black hover:bg-white/90',
    outline: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  }

  const content = children || label
  const linkClass = cn(baseStyles, variants[appearance || 'default'], className)

  if (newTab) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{content}</a>
  }

  return <Link href={href} className={linkClass}>{content}</Link>
}
