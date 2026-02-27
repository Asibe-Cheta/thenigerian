'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

const TIERS = [
  {
    amount: 300,
    label: '£3',
    tag: 'Coffee',
    description: 'A small way to say thank you for the content.',
  },
  {
    amount: 500,
    label: '£5',
    tag: 'Support',
    description: 'Helps keep the videos, stories, and lessons coming.',
  },
  {
    amount: 1000,
    label: '£10',
    tag: 'Real Naija Love',
    description: "You're backing something real. E don do.",
  },
]

export default function DonatePage() {
  const [loading, setLoading] = useState<number | null>(null)

  async function handleDonate(amount: number) {
    setLoading(amount)
    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
        setLoading(null)
      }
    } catch {
      alert('Something went wrong. Please try again.')
      setLoading(null)
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
              'radial-gradient(ellipse 60% 50% at 40% 50%, rgba(59,110,82,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#3b6e52] text-xs font-bold uppercase tracking-widest mb-4">
              Support
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
              Back the Creator
              <span className="text-[#3b6e52]">.</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              The Nigerian Pidgin content, the food poetry, the throwbacks — it all takes time and
              love to make. If it has meant something to you, here is your chance to show it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-[#f5f3ef] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TIERS.map(({ amount, label, tag, description }, i) => (
              <motion.button
                key={amount}
                onClick={() => handleDonate(amount)}
                disabled={loading !== null}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-center text-center gap-4 p-10 bg-white border-2 border-[#e5e2dc] rounded-sm hover:border-[#3b6e52] hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="text-5xl font-black text-[#0d0d0d] group-hover:text-[#3b6e52] transition-colors">
                  {label}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#3b6e52] bg-[#d4e6da] px-3 py-1 rounded-full">
                  {tag}
                </span>
                <p className="text-sm text-[#3a3a3a] leading-relaxed">{description}</p>
                {loading === amount ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-sm text-xs text-[#3b6e52] font-bold uppercase tracking-wide">
                    Redirecting…
                  </span>
                ) : (
                  <span className="mt-2 text-xs font-bold uppercase tracking-widest text-[#0d0d0d] group-hover:text-[#3b6e52] transition-colors">
                    Support →
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-[#999] uppercase tracking-widest">
            Secure payment via Stripe · No account needed
          </p>
        </div>
      </section>
    </>
  )
}
