import type { Metadata } from 'next'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Thank You — The Nigerian',
  description: 'Your support means everything. E don do!',
}

export default function DonateSuccessPage() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] texture-dark flex items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="text-6xl mb-6">🙏🏾</div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          E don do<span className="text-[#3b6e52]">.</span>
        </h1>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          Your support is deeply appreciated. It keeps the Pidgin lessons, the food poetry, and the
          throwback stories alive. Na you be the real MVP.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="secondary">Back to Home</Button>
          <Button href="/learn" variant="ghost">Start Learning</Button>
        </div>
      </div>
    </section>
  )
}
