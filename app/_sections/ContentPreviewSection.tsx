'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const categories = [
  {
    slug: 'pidgin',
    label: 'Pidgin 101',
    description:
      "Learn real Nigerian Pidgin — from greetings to deep slang. We dey teach am proper.",
    accent: '#3b6e52',
    count: '50+ lessons',
  },
  {
    slug: 'naija-food',
    label: 'Naija Food',
    description:
      'Egusi. Jollof. Suya. The Nigerian breaks down our food with passion and poetry.',
    accent: '#0d0d0d',
    count: '30+ posts',
  },
  {
    slug: 'throwback',
    label: 'Growing Up Naija',
    description:
      'Throwback stories that make every Nigerian say "e be like na me dem dey describe."',
    accent: '#2a2a2a',
    count: '20+ stories',
  },
]

export default function ContentPreviewSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Learn"
            heading="Content That Hits Different"
            subheading="Pidgin, food, culture and nostalgia — all in one place."
          />
          <Button href="/learn" variant="outline" className="self-start md:self-auto shrink-0">
            Explore All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e2dc]">
          {categories.map(({ slug, label, description, count }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/learn?category=${slug}`}
                className="group flex flex-col h-full bg-white p-8 md:p-10 hover:bg-[#f5f3ef] transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#3b6e52] mb-6">
                  {count}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0d0d0d] mb-4 group-hover:text-[#3b6e52] transition-colors">
                  {label}
                </h3>
                <p className="text-[#3a3a3a] text-sm leading-relaxed flex-1">{description}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3b6e52]">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
