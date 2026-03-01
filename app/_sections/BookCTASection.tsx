'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function BookCTASection() {
  return (
    <section className="bg-[#0d0d0d] texture-dark py-20 md:py-28 overflow-hidden relative">
      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(59,110,82,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#3b6e52] text-xs font-bold uppercase tracking-widest mb-4">
              Now Available
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] mb-6">
              The Nigerian
              <br />
              Pidgin Book
              <span className="text-[#3b6e52]">.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">
              A definitive guide to Nigerian Pidgin English — vocabulary, phrases, culture, and
              the humour that makes us who we are. Physical copy, delivered to your door.
            </p>
            <Button href="/book" size="lg" variant="primary">
              Get Your Copy
            </Button>
          </motion.div>

          {/* Book image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-56 md:w-64 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/book.png"
                alt="Understanding Nigerian Pidgin Tenses — The Nigerian"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
