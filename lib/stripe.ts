import Stripe from 'stripe'

// Lazy-initialised so the module can be imported at build time
// without the env var present. The API routes that use `stripe`
// only run at request time in a real environment.
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Missing STRIPE_SECRET_KEY environment variable')
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-02-25.clover',
    })
  }
  return _stripe
}

// Convenience re-export kept for code that calls stripe.webhooks, etc.
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return (getStripe() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

export const BOOK_PRICE_GBP = 1500 // £15.00 in pence — update as needed
export const BOOK_TITLE = 'The Nigerian Pidgin Book'
export const BOOK_DESCRIPTION =
  'A definitive guide to Nigerian Pidgin English — vocabulary, phrases, culture, and humour by The Nigerian.'
