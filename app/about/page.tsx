import type { Metadata } from 'next'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of The Nigerian — creator, Pidgin poet, Naija food enthusiast, and author.',
}

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@the.nigerian1/' },
  { label: 'Instagram', href: 'https://www.instagram.com/the.nigerian1/' },
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
            {/* Photo */}
            <div className="sticky top-28">
              <div className="w-full aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Atoche J Ugbenyo — The Nigerian"
                  className="w-full h-full object-cover object-top"
                  width={800}
                  height={1000}
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] mb-8 leading-tight">
                From the streets to your screen —<br />
                <span className="text-[#3b6e52]">one Pidgin word at a time.</span>
              </h2>

              <div className="space-y-5 text-[#3a3a3a] text-base leading-relaxed">
                <p>
                  Atoche J Ugbenyo (Popularly known as &ldquo;The Nigerian&rdquo;) is a Nigerian
                  content creator, author, and cultural educator known for making Nigerian Pidgin
                  English accessible, funny, and deeply meaningful to audiences both in Nigeria
                  and the diaspora.
                </p>
                <p>
                  With over 26,000 Instagram followers and 19,000 TikTok followers, The Nigerian
                  has built a community around three pillars:{' '}
                  <strong className="text-[#0d0d0d]">Pidgin 101</strong>,{' '}
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
                  <em>Understanding Nigerian Pidgin Tenses</em> — his debut publication — is the
                  natural extension of that mission. A physical artefact for the culture. A
                  reference. A love letter to the language.
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

      {/* The Book */}
      <section className="bg-[#f5f3ef] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="text-[#3b6e52] text-xs font-bold uppercase tracking-widest mb-4">
              The Book
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] mb-6 leading-tight">
              Understanding Nigerian Pidgin Tenses<span className="text-[#3b6e52]">.</span>
            </h2>
            <p className="text-[#3a3a3a] text-base leading-relaxed mb-8">
              Everything you need to speak, understand, and appreciate Nigerian Pidgin English
              Tenses. From basic vocabulary to the most complex structure — written with
              authenticity, humour, and love for the language.
            </p>
            <Button href="/book" size="lg">Get Your Copy</Button>
          </div>
        </div>
      </section>

      {/* What he covers */}
      <section className="bg-white py-20 md:py-28">
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
              <div key={title} className="bg-white p-8 md:p-10">
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
