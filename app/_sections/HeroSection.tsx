'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] texture-dark flex flex-col justify-center overflow-hidden">
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(59,110,82,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <p className="text-[#3b6e52] text-xs font-bold uppercase tracking-widest mb-6">
            Pidgin · Naija Food · Throwback · Culture
          </p>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] tracking-tight">
            The
            <br />
            <span className="text-[#3b6e52]">Nigerian.</span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-lg"
          >
            Nigerian Pidgin 101. Naija Food Poetry. Throwback Stories.
            <br />
            Funny. Witty. Educative.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/book" size="lg" variant="primary">
              Get the Pidgin Book
            </Button>
            <Button href="/learn" size="lg" variant="ghost">
              Start Learning
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 md:mt-28 flex flex-wrap gap-10 md:gap-16 border-t border-[#2a2a2a] pt-10"
        >
          {[
            { value: '26.8K', label: 'Instagram Followers' },
            { value: '19.3K', label: 'TikTok Followers' },
            { value: '484K', label: 'TikTok Likes' },
            { value: '270+', label: 'Posts' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-black text-white">{value}</p>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
