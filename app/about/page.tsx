import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of The Nigerian — creator, Pidgin poet, Naija food enthusiast, and author.',
}

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@the.nigerian1' },
  { label: 'Instagram', href: 'https://www.instagram.com/the.nigerian1' },
  { label: 'YouTube', href: 'https://www.youtube.com/@THENIGERIAN.1' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d0d0d] texture-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="About"
            heading="The Nigerian."
            subheading="Creator. Author. Pidgin enthusiast. The voice of a culture that deserves to be celebrated."
            light
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="sticky top-28">
              <div
                className="w-full aspect-[4/5] bg-[#f5f3ef] rounded-sm overflow-hidden flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #1a3d2b 0%, #2d5a3f 60%, #3b6e52 100%)',
                }}
              >
                {/* Replace with actual Image component once photo is available */}
                <span className="text-white/20 text-6xl font-black uppercase tracking-tight">TN</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] mb-8 leading-tight">
                From Lagos to your screen —<br />
                <span className="text-[#3b6e52]">one Pidgin word at a time.</span>
              </h2>

              <div className="space-y-5 text-[#3a3a3a] text-base leading-relaxed">
                <p>
                  The Nigerian is a Nigerian content creator, author, and cultural educator
                  known for making Nigerian Pidgin English accessible, funny, and deeply
                  meaningful to audiences both in Nigeria and the diaspora.
                </p>
                <p>
                  With over 26,000 Instagram followers and 19,000 TikTok followers, The Nigerian
                  has built a community around three pillars: <strong className="text-[#0d0d0d]">Pidgin 101</strong>,{' '}
                  <strong className="text-[#0d0d0d]">Naija Food Poetry</strong>, and{' '}
                  <strong className="text-[#0d0d0d]">Growing Up Naija</strong> — content that
                  triggers memory, provokes laughter, and teaches without feeling like a lesson.
                </p>
                <p>
                  His short-form videos have racked up hundreds of thousands of views on TikTok,
                  with a pinned video alone hitting over 511,000 plays. The formula is simple:
                  real talk, cultural depth, and the warmth of someone who genuinely loves where
                  they come from.
                </p>
                <p>
                  The Nigerian Pidgin Book — his debut publication — is the natural extension of
                  that mission. A physical artefact for the culture. A reference. A love letter
                  to the language.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-px bg-[#e5e2dc]">
                {[
                  { value: '26.8K', label: 'Instagram' },
                  { value: '19.3K', label: 'TikTok Followers' },
                  { value: '484K', label: 'TikTok Likes' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white p-5">
                    <p className="text-2xl font-black text-[#0d0d0d]">{value}</p>
                    <p className="text-xs text-[#3a3a3a] uppercase tracking-widest mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href }) => (
                  <Button key={label} href={href} variant="outline" size="sm" external>
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What he covers */}
      <section className="bg-[#f5f3ef] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Content Pillars"
            heading="What The Nigerian Creates"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e5e2dc]">
            {[
              {
                icon: '🇳🇬',
                title: 'Pidgin 101',
                body: 'Structured lessons on Nigerian Pidgin English — vocabulary, grammar, slang, and everyday usage.',
              },
              {
                icon: '🍲',
                title: 'Naija Food Poet',
                body: 'Deep dives into Nigerian food — the flavours, the memories, and the cultural weight behind every dish.',
              },
              {
                icon: '📖',
                title: 'Growing Up Naija',
                body: 'Throwback stories from a Nigerian childhood — NEPA, school, family, and the beautiful chaos of it all.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-[#f5f3ef] p-8 md:p-10">
                <span className="text-3xl">{icon}</span>
                <h3 className="text-xl font-black text-[#0d0d0d] mt-4 mb-3">{title}</h3>
                <p className="text-sm text-[#3a3a3a] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-4">
            Support the work<span className="text-[#3b6e52]">.</span>
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            Get the book, follow the channels, spread the culture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/book" size="lg">Get the Book</Button>
            <Button href="/contact" size="lg" variant="ghost">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  )
}
