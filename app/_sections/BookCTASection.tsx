'use client'

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

          {/* Book visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-56 md:w-64">
              {/* Book spine shadow */}
              <div className="absolute -left-3 top-2 bottom-2 w-3 bg-[#2a4a39] rounded-l-sm" />
              {/* Book cover */}
              <div
                className="relative rounded-r-sm overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: '2/3',
                  background: 'linear-gradient(135deg, #1a3d2b 0%, #2d5a3f 50%, #3b6e52 100%)',
                }}
              >
                {/* Cover content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-[#d4e6da] text-[10px] font-bold uppercase tracking-widest">
                      The Nigerian
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-black leading-tight">
                      Nigerian
                      <br />
                      Pidgin
                      <br />
                      Book
                    </h3>
                    <div className="mt-4 flex gap-1">
                      <span className="text-2xl">📕</span>
                      <span className="text-2xl">📗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
