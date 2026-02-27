'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const TIERS = [
  { amount: 300, label: '£3', description: 'Buy me a coffee' },
  { amount: 500, label: '£5', description: 'Keep the content coming' },
  { amount: 1000, label: '£10', description: 'Real Naija support' },
]

export default function DonateSection() {
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
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <SectionHeading
            eyebrow="Support"
            heading="Back the Creator"
            subheading="If the content has made you laugh, learn, or feel something — consider showing some love. Every bit helps keep things going."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {TIERS.map(({ amount, label, description }, i) => (
            <motion.button
              key={amount}
              onClick={() => handleDonate(amount)}
              disabled={loading !== null}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center gap-3 p-8 border-2 border-[#e5e2dc] rounded-sm hover:border-[#3b6e52] hover:bg-[#f5f3ef] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              <span className="text-4xl font-black text-[#0d0d0d] group-hover:text-[#3b6e52] transition-colors">
                {label}
              </span>
              <span className="text-xs text-[#3a3a3a] uppercase tracking-wide font-medium">
                {description}
              </span>
              {loading === amount && (
                <span className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-sm text-xs text-[#3b6e52] font-bold uppercase tracking-wide">
                  Redirecting…
                </span>
              )}
            </motion.button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#999] uppercase tracking-widest">
          Secure payment via Stripe · No account needed
        </p>
      </div>
    </section>
  )
}
