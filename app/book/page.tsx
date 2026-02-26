'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: 'What is this book about?',
    a: 'A definitive guide to Nigerian Pidgin English — vocabulary, grammar, slang, culture, food references and humour. Created by The Nigerian from first-hand experience.',
  },
  {
    q: 'Is it a physical or digital book?',
    a: 'Physical copy only. We ship directly to you wherever you are.',
  },
  {
    q: 'Where do you ship to?',
    a: 'We currently ship to the UK, Europe, and North America. More regions coming soon.',
  },
  {
    q: 'How long does delivery take?',
    a: 'UK: 3–5 business days. International: 7–14 business days.',
  },
]

export default function BookPage() {
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d0d0d] texture-dark pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(59,110,82,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#3b6e52] text-xs font-bold uppercase tracking-widest mb-4">
                Physical Book · Limited Copies
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                The Nigerian
                <br />
                Pidgin Book
                <span className="text-[#3b6e52]">.</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mb-10">
                Everything you need to speak, understand, and appreciate Nigerian Pidgin English.
                From basic vocabulary to deep slang — written with authenticity, humour, and love
                for the language.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button onClick={handleCheckout} size="lg" disabled={loading}>
                  {loading ? 'Redirecting...' : 'Buy Now — £15'}
                </Button>
                <p className="text-white/30 text-xs uppercase tracking-widest">
                  Secure checkout via Stripe
                </p>
              </div>
            </motion.div>

            {/* Book visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-64 md:w-72">
                <div className="absolute -left-4 top-3 bottom-3 w-4 bg-[#1a3d2b] rounded-l-sm shadow-xl" />
                <div
                  className="relative rounded-r-sm overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                  style={{
                    aspectRatio: '2/3',
                    background:
                      'linear-gradient(135deg, #1a3d2b 0%, #2d5a3f 50%, #3b6e52 100%)',
                  }}
                >
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <p className="text-[#d4e6da]/70 text-xs font-bold uppercase tracking-widest">
                      The Nigerian
                    </p>
                    <div>
                      <h2 className="text-white text-3xl font-black leading-tight mb-4">
                        Nigerian
                        <br />
                        Pidgin
                        <br />
                        Book
                      </h2>
                      <span className="text-3xl">📕📗</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Inside the Book"
            heading="What You're Getting"
            subheading="Not a textbook. Not a dry dictionary. A genuine, cultural deep-dive into the language of the people."
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e2dc]">
            {[
              { title: 'Core Vocabulary', body: 'Essential Pidgin words and phrases with contextual usage — not just definitions.' },
              { title: 'Grammar & Structure', body: 'How Pidgin actually works — the patterns, rules, and beautiful shortcuts.' },
              { title: 'Slang & Street Talk', body: "The terms you won't find anywhere else. Real, current, culturally rich." },
              { title: 'Food & Culture', body: 'Naija food references, proverbs, and the cultural DNA woven into the language.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white p-8 md:p-10">
                <h3 className="text-lg font-black text-[#0d0d0d] mb-3">{title}</h3>
                <p className="text-sm text-[#3a3a3a] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f3ef] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <SectionHeading eyebrow="FAQ" heading="Questions Answered" align="center" />
          <div className="mt-12 divide-y divide-[#e5e2dc]">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-bold text-[#0d0d0d]">{q}</span>
                  <span className="text-[#3b6e52] font-bold text-xl shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 text-sm text-[#3a3a3a] leading-relaxed"
                  >
                    {a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0d0d0d] py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Your Copy<span className="text-[#3b6e52]">?</span>
          </h2>
          <p className="text-white/50 mb-10">Physical book · Shipped to your door · £15</p>
          <Button onClick={handleCheckout} size="lg" disabled={loading}>
            {loading ? 'Redirecting...' : 'Buy Now — £15'}
          </Button>
        </div>
      </section>
    </>
  )
}
