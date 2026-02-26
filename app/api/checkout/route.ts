import { NextResponse } from 'next/server'
import { stripe, BOOK_PRICE_GBP, BOOK_TITLE, BOOK_DESCRIPTION } from '@/lib/stripe'

export async function POST() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: BOOK_TITLE,
              description: BOOK_DESCRIPTION,
            },
            unit_amount: BOOK_PRICE_GBP,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: [
          'GB', 'US', 'CA', 'AU', 'NG', 'IE', 'DE', 'FR', 'NL', 'BE',
          'SE', 'NO', 'DK', 'FI', 'IT', 'ES', 'PT',
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 350, currency: 'gbp' },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 14 },
            },
          },
        },
      ],
      success_url: `${siteUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/book`,
      metadata: {
        product: 'pidgin-book',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[checkout]', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
