import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/learn', label: 'Learn' },
  { href: '/book', label: 'The Book' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.tiktok.com/@the.nigerian1/', label: 'TikTok' },
  { href: 'https://www.instagram.com/the.nigerian1/', label: 'Instagram' },
  { href: 'https://www.youtube.com/@THENIGERIAN.1', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-black uppercase tracking-tight mb-3">The Nigerian</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Pidgin · Naija Food Poet · Throwback Stories · Funny · Witty · Educative
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
              Follow
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-[#3b6e52] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} The Nigerian. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            PIDGIN 101 &nbsp;·&nbsp; NAIJA FOOD &nbsp;·&nbsp; GROWING UP NAIJA
          </p>
        </div>
      </div>
    </footer>
  )
}
