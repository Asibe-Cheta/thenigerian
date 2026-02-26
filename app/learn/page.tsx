import type { Metadata } from 'next'
import { Suspense } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ContentGrid from './_components/ContentGrid'

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Explore Nigerian Pidgin lessons, Naija food content, throwback stories and more.',
}

const categories = [
  { slug: 'all', label: 'All' },
  { slug: 'pidgin', label: 'Pidgin 101' },
  { slug: 'naija-food', label: 'Naija Food' },
  { slug: 'throwback', label: 'Growing Up Naija' },
  { slug: 'general', label: 'General' },
]

export default function LearnPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0d0d0d] texture-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Learn"
            heading="The Content Hub"
            subheading="Pidgin lessons, food stories, nostalgia — everything that makes us Nigerian."
            light
          />
        </div>
      </section>

      {/* Category filter + grid */}
      <section className="bg-white py-12 md:py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Suspense fallback={<LoadingSkeleton />}>
            <ContentGrid categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-[#f5f3ef] rounded-sm aspect-[4/3] animate-pulse" />
      ))}
    </div>
  )
}
