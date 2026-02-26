import type { Metadata } from 'next'
import HeroSection from './_sections/HeroSection'
import TikTokSection from './_sections/TikTokSection'
import ContentPreviewSection from './_sections/ContentPreviewSection'
import BookCTASection from './_sections/BookCTASection'

export const metadata: Metadata = {
  title: 'The Nigerian — Pidgin, Naija Food & Culture',
  description:
    'Nigerian Pidgin 101, Naija Food Poetry, Throwback Stories & The Nigerian Pidgin Book.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TikTokSection />
      <ContentPreviewSection />
      <BookCTASection />
    </>
  )
}
