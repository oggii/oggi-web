'use client'
import React, { useCallback, useState } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getClientSideURL } from '@/utilities/getURL'
import { track } from '@/lib/analytics'

type FormBlockProps = {
  enableIntro?: boolean
  form?: {
    id?: string
    fields?: Array<{ blockType: string; name?: string; label?: string; required?: boolean }>
    confirmationType?: 'message' | 'redirect'
    confirmationMessage?: any
    redirect?: { url?: string }
    submitButtonLabel?: string
  }
  introContent?: any
}

export const FormBlock: React.FC<FormBlockProps> = ({ enableIntro, form, introContent }) => {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form?.id) return
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: form.id,
          submissionData: Object.entries(formData).map(([field, value]) => ({ field, value })),
        }),
      })
      if (res.status >= 400) {
        const json = await res.json()
        setError(json.errors?.[0]?.message || 'Something went wrong.')
        return
      }
      track('Lead: Form Submitted', { form_id: form.id })
      setHasSubmitted(true)
      if (form.confirmationType === 'redirect' && form.redirect?.url) {
        window.location.href = form.redirect.url
      }
    } catch {
      setError('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }, [form, formData])

  const inputClass = 'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors'

  return (
    <div className="max-w-2xl mx-auto px-6">
      {enableIntro && introContent && !hasSubmitted && (
        <div className="prose prose-invert mb-8"><RichText data={introContent} /></div>
      )}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        {hasSubmitted && form?.confirmationType === 'message' && form.confirmationMessage ? (
          <div className="prose prose-invert"><RichText data={form.confirmationMessage} /></div>
        ) : (
          <form onSubmit={onSubmit}>
            {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
            <div className="space-y-5">
              {form?.fields?.map((field, i) => {
                const name = field.name || `field_${i}`
                return (
                  <div key={i}>
                    {field.label && <label className="block text-sm text-white/70 mb-1.5">{field.label}</label>}
                    {field.blockType === 'textarea' ? (
                      <textarea name={name} required={field.required} rows={4} className={inputClass} value={formData[name] || ''} onChange={(e) => handleChange(name, e.target.value)} />
                    ) : (
                      <input type={field.blockType === 'email' ? 'email' : 'text'} name={name} required={field.required} className={inputClass} value={formData[name] || ''} onChange={(e) => handleChange(name, e.target.value)} />
                    )}
                  </div>
                )
              })}
            </div>
            <button type="submit" disabled={isLoading} className="mt-6 bg-white text-black px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-white/90 transition-colors disabled:opacity-50">
              {isLoading ? 'Sending...' : form?.submitButtonLabel || 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
