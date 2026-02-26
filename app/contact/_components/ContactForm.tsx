'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const inputClass =
    'w-full bg-[#f5f3ef] border border-[#e5e2dc] rounded-sm px-4 py-3 text-sm text-[#0d0d0d] placeholder-[#aaa] focus:outline-none focus:border-[#3b6e52] transition-colors'

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#d4e6da] border border-[#3b6e52]/30 rounded-sm p-10 text-center"
        >
          <p className="text-4xl mb-4">✓</p>
          <h3 className="text-xl font-black text-[#0d0d0d] mb-2">Message received.</h3>
          <p className="text-sm text-[#3a3a3a]">
            We'll get back to you as soon as possible. Thank you!
          </p>
          <button
            onClick={() => setState('idle')}
            className="mt-6 text-xs font-bold uppercase tracking-widest text-[#3b6e52] hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#3a3a3a] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#3a3a3a] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#3a3a3a] mb-2">
              Subject
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select a subject</option>
              <option value="collaboration">Collaboration</option>
              <option value="media-press">Media & Press</option>
              <option value="book-order">Book Order Enquiry</option>
              <option value="general">General</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#3a3a3a] mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us what's on your mind..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {state === 'error' && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again or reach out via social media.
            </p>
          )}

          <Button type="submit" size="lg" disabled={state === 'submitting'}>
            {state === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
