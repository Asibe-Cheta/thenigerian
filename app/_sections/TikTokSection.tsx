'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

// Placeholder TikTok video IDs — replace with real ones from @the.nigerian1
const TIKTOK_VIDEOS = [
  { id: '7292347856291934470', caption: 'Pidgin Word: DEY' },
  { id: '7316702451029188870', caption: 'Nigerian Pidgin Book 📕📗' },
  { id: '7305489012937821446', caption: 'Trouble dey school' },
]

export default function TikTokSection() {
  return (
    <section className="bg-[#f5f3ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Watch"
            heading="See What the Noise Is About"
            subheading="Short-form content that teaches, entertains, and hits different."
          />
          <Button
            href="https://www.tiktok.com/@the.nigerian1"
            variant="outline"
            external
            className="self-start md:self-auto shrink-0"
          >
            Follow on TikTok
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIKTOK_VIDEOS.map(({ id, caption }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#0d0d0d] aspect-[9/16]">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${id}`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="encrypted-media"
                  title={caption}
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-[#3a3a3a] font-medium uppercase tracking-wide">
                {caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
