'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/learn', label: 'Learn' },
  { href: '/book', label: 'The Book' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  const isDark = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#2a2a2a]'
          : isDark
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md border-b border-[#e5e2dc]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-black tracking-tight uppercase transition-colors ${
            scrolled || isDark ? 'text-white' : 'text-[#0d0d0d]'
          }`}
        >
          The Nigerian
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                pathname === href
                  ? 'text-[#3b6e52]'
                  : scrolled || isDark
                  ? 'text-white/70 hover:text-white'
                  : 'text-[#3a3a3a] hover:text-[#0d0d0d]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="ml-2 px-5 py-2 bg-[#3b6e52] text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-[#4e8f6a] transition-colors"
          >
            Buy the Book
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled || isDark ? 'text-white' : 'text-[#0d0d0d]'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0d0d0d] border-t border-[#2a2a2a] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-base font-semibold uppercase tracking-wide transition-colors ${
                    pathname === href ? 'text-[#3b6e52]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-2 inline-block px-6 py-3 bg-[#3b6e52] text-white text-sm font-bold uppercase tracking-wider text-center rounded-sm hover:bg-[#4e8f6a] transition-colors"
              >
                Buy the Book
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
