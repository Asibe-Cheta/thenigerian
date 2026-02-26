import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your copy of The Nigerian Pidgin Book is on its way.',
}

export default function BookSuccessPage() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] texture-dark flex items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="text-6xl mb-6">📕</div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Order confirmed<span className="text-[#3b6e52]">.</span>
        </h1>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          Thank you for getting your copy of The Nigerian Pidgin Book. We will process your order
          and ship it to you shortly. Check your email for confirmation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="secondary">Back to Home</Button>
          <Button href="/learn" variant="ghost">Start Learning</Button>
        </div>
      </div>
    </section>
  )
}
