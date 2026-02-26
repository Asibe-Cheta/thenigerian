'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import type { ContentPost } from '@/types'

interface Props {
  categories: { slug: string; label: string }[]
}

// Placeholder posts shown when Supabase is not yet connected
const PLACEHOLDER_POSTS: ContentPost[] = [
  {
    id: '1',
    title: 'Pidgin Word of the Day: DEY',
    slug: 'pidgin-word-dey',
    category: 'pidgin',
    excerpt: '"Dey" na one of di most versatile words for Pidgin. We go break am down today.',
    body: '',
    published_at: '2024-01-15',
    created_at: '2024-01-15',
  },
  {
    id: '2',
    title: 'Why Jollof Rice Is Not Just Rice',
    slug: 'jollof-rice-naija',
    category: 'naija-food',
    excerpt: 'E go make you cry, laugh, and feel like home all at once. This na Naija jollof.',
    body: '',
    published_at: '2024-01-10',
    created_at: '2024-01-10',
  },
  {
    id: '3',
    title: 'The First Day of School in Nigeria',
    slug: 'first-day-of-school',
    category: 'throwback',
    excerpt: 'Your mum iron your uniform till e shine like mirror. Your heart dey beat fast.',
    body: '',
    published_at: '2024-01-05',
    created_at: '2024-01-05',
  },
  {
    id: '4',
    title: 'Pidgin 101: Basic Greetings',
    slug: 'pidgin-greetings',
    category: 'pidgin',
    excerpt: 'How you go greet your elders, your mates, and even strangers in Pidgin.',
    body: '',
    published_at: '2023-12-20',
    created_at: '2023-12-20',
  },
  {
    id: '5',
    title: 'Egusi Soup: A Love Story',
    slug: 'egusi-soup',
    category: 'naija-food',
    excerpt: 'Di moment you smell fried egusi, you know you don reach home.',
    body: '',
    published_at: '2023-12-15',
    created_at: '2023-12-15',
  },
  {
    id: '6',
    title: 'Growing Up: NEPA Don Take Light',
    slug: 'nepa-light',
    category: 'throwback',
    excerpt: 'That specific darkness. The silence before everyone starts shouting. Classic.',
    body: '',
    published_at: '2023-12-01',
    created_at: '2023-12-01',
  },
]

const categoryColors: Record<string, string> = {
  pidgin: 'text-[#3b6e52]',
  'naija-food': 'text-[#8b5e3c]',
  throwback: 'text-[#4a6fa5]',
  general: 'text-[#3a3a3a]',
}

export default function ContentGrid({ categories }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeCategory = searchParams.get('category') || 'all'

  const [posts, setPosts] = useState<ContentPost[]>(PLACEHOLDER_POSTS)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const supabase = createClient()
        let query = supabase
          .from('content_posts')
          .select('*')
          .order('published_at', { ascending: false })

        if (activeCategory !== 'all') {
          query = query.eq('category', activeCategory)
        }

        const { data, error } = await query
        if (!error && data && data.length > 0) {
          setPosts(data)
        }
        // If error or empty — placeholder posts stay
      } catch {
        // Keep placeholders
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [activeCategory])

  const filtered =
    activeCategory === 'all' ? posts : posts.filter((p) => p.category === activeCategory)

  function setCategory(slug: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (slug === 'all') {
      params.delete('category')
    } else {
      params.set('category', slug)
    }
    router.push(`/learn?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(({ slug, label }) => (
          <button
            key={slug}
            onClick={() => setCategory(slug)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors ${
              activeCategory === slug
                ? 'bg-[#0d0d0d] text-white'
                : 'bg-[#f5f3ef] text-[#3a3a3a] hover:bg-[#e5e2dc]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#f5f3ef] rounded-sm h-48 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-[#f5f3ef] hover:bg-[#eceae4] transition-colors rounded-sm overflow-hidden"
            >
              {post.cover_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div className="w-full aspect-video bg-[#e5e2dc] flex items-center justify-center">
                  <span className="text-4xl opacity-30">
                    {post.category === 'pidgin'
                      ? '🇳🇬'
                      : post.category === 'naija-food'
                      ? '🍲'
                      : '📖'}
                  </span>
                </div>
              )}
              <div className="p-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    categoryColors[post.category] || 'text-[#3a3a3a]'
                  }`}
                >
                  {post.category.replace('-', ' ')}
                </span>
                <h3 className="mt-2 text-lg font-black text-[#0d0d0d] group-hover:text-[#3b6e52] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[#3a3a3a] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </>
  )
}
