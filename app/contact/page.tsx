import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from './_components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Nigerian — collaborations, media, or just say hello.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0d0d0d] texture-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Contact"
            heading="Let's Talk."
            subheading="Collaborations, press enquiries, book orders, or just to say hello — get in touch."
            light
          />
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {/* Info */}
            <div className="md:col-span-2">
              <div className="space-y-8">
                {[
                  {
                    label: 'For Collaborations',
                    body: 'Brand partnerships, sponsored content, and creative collaborations — reach out with your proposal.',
                  },
                  {
                    label: 'For Media & Press',
                    body: 'Interviews, features, podcasts, and speaking engagements.',
                  },
                  {
                    label: 'For Book Orders',
                    body: 'Bulk orders, gifting, or questions about shipping — we will get back to you.',
                  },
                ].map(({ label, body }) => (
                  <div key={label}>
                    <h3 className="text-sm font-black text-[#0d0d0d] uppercase tracking-wide mb-2">
                      {label}
                    </h3>
                    <p className="text-sm text-[#3a3a3a] leading-relaxed">{body}</p>
                  </div>
                ))}

                <div className="pt-4 border-t border-[#e5e2dc]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#3a3a3a] mb-3">
                    Or reach us on
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'TikTok', href: 'https://www.tiktok.com/@the.nigerian1' },
                      { label: 'Instagram', href: 'https://www.instagram.com/the.nigerian1' },
                    ].map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#3b6e52] font-medium hover:underline"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
