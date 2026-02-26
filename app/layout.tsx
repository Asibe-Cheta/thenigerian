import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Nigerian — Pidgin, Naija Food & Culture',
    template: '%s | The Nigerian',
  },
  description:
    'The home of Nigerian Pidgin 101, Naija Food Poetry, Throwback Stories, and The Nigerian Pidgin Book. Funny. Witty. Educative.',
  keywords: [
    'Nigerian Pidgin',
    'Naija food',
    'Nigerian culture',
    'Pidgin English',
    'The Nigerian',
    'Nigerian content creator',
  ],
  openGraph: {
    siteName: 'The Nigerian',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@the.nigerian1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
